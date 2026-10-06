import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceRoot = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(sourceRoot);
const checkOnly = process.argv.includes('--check');
const read = name => readFile(path.join(sourceRoot, name), 'utf8');
const json = async name => JSON.parse(await read(name));
const config = await json('config.json');
const pages = await json('pages.json');
const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const requireValue = (condition, message) => { if (!condition) throw new Error(message); };
requireValue(/^G-[A-Z0-9]+$/.test(config.analyticsId), 'Invalid Google Analytics measurement ID');
requireValue(/^[a-zA-Z0-9-]+$/.test(config.affiliateTag), 'Invalid affiliate tag');
const origin = new URL(config.origin).origin;
requireValue(new URL(origin).protocol === 'https:', 'Production origin must use HTTPS');
const [pageTemplate, headerTemplate, footerTemplate, analyticsTemplate] = await Promise.all([
  read('templates/page.html'), read('partials/header.html'), read('partials/footer.html'), read('partials/analytics.html')
]);

function render(template, values) {
  return template.replace(/\{\{([a-zA-Z]+)\}\}/g, (token, key) => {
    requireValue(Object.hasOwn(values, key), `Unknown template field: ${key}`);
    return values[key];
  });
}

export function affiliateUrl(asin) {
  requireValue(/^[A-Z0-9]{10}$/.test(asin), `Invalid ASIN: ${asin}`);
  const url = new URL(`/dp/${asin}`, 'https://www.amazon.com');
  url.searchParams.set('tag', config.affiliateTag);
  return url.href;
}

const outputs = new Map();
function addOutput(name, content) {
  requireValue(!outputs.has(name), `Duplicate output: ${name}`);
  const resolved = path.resolve(root, name);
  requireValue(resolved.startsWith(root + path.sep), `Output outside workspace: ${name}`);
  requireValue(/^(?:[a-z0-9-]+\.html|parts\/(?:[a-z0-9-]+\/)?index\.html|sitemap\.xml)$/.test(name), `Unexpected output path: ${name}`);
  outputs.set(name, content);
}

function document(page, body, structuredData = []) {
  const url = new URL(page.url, origin).href;
  const analytics = render(analyticsTemplate, {
    analyticsId: config.analyticsId,
    analyticsHosts: JSON.stringify(config.analyticsHosts)
  });
  const navigation = config.navigation.map(item => {
    const active = page.url === item.href ? ' aria-current="page"' : item.href === '/parts/' && page.url.startsWith('/parts/') ? ' aria-current="location"' : '';
    return `<a href="${escape(item.href)}"${active}>${escape(item.label)}</a>`;
  }).join('\n    ');
  const html = render(pageTemplate, {
    analytics,
    title: escape(page.title), description: escape(page.description),
    canonical: page.noindex ? '' : `<link rel="canonical" href="${escape(url)}">`,
    robots: page.noindex ? '<meta name="robots" content="noindex">' : '',
    assetVersion: escape(config.assetVersion),
    preload: page.preloadHero ? `<link rel="preload" as="image" href="${escape(config.socialImage)}" fetchpriority="high">` : '',
    ogUrl: page.noindex ? '' : `<meta property="og:url" content="${escape(url)}">`,
    socialImage: escape(origin + config.socialImage), socialImageAlt: escape(config.socialImageAlt),
    structuredData: structuredData.length ? `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g,'\\u003c')}</script>` : '',
    affiliateRibbon: page.affiliateDisclosureAtEnd ? '' : '<div class="affiliate-ribbon">As an Amazon Associate I earn from qualifying purchases.</div>',
    header: render(headerTemplate, {navigation}),
    body,
    footer: render(footerTemplate, {footerNote:escape(page.footerNote)})
  });
  return html.replace(/\r\n/g,'\n').replace(/[ \t]+$/gm,'');
}

for (const page of pages) addOutput(page.output, document(page, render(await read(page.source), {analyticsId:escape(config.analyticsId)})));

// Only complete, published data files create public pages or sitemap entries.
const modelDirectory = path.join(sourceRoot, 'models');
const models = [];
for (const filename of (await readdir(modelDirectory)).filter(name => name.endsWith('.json')).sort()) {
  const model = await json(`models/${filename}`);
  if (model.status !== 'published') continue;
  requireValue(/^[a-z0-9-]+$/.test(model.slug), `Invalid model slug: ${filename}`);
  requireValue(filename === `${model.slug}.json`, `Model filename must match its slug: ${filename}`);
  requireValue(/^\d{4}-\d{2}-\d{2}$/.test(model.checkedDate), `Missing verified date: ${filename}`);
  requireValue(model.name && model.title && model.description && model.scope, `Incomplete model introduction: ${filename}`);
  requireValue(model.brand && model.variant && model.warning && model.checkedLabel && model.careTip, `Incomplete model guidance: ${filename}`);
  requireValue(model.compatibility?.length && model.compatibility.every(row=>row.part&&row.detail), `Missing compatibility notes: ${filename}`);
  requireValue(model.care?.length && model.care.every(row=>row.part&&row.clean&&row.replace), `Missing sourced care table: ${filename}`);
  requireValue(model.questions?.length && model.questions.every(row=>row.question&&row.answer), `Missing practical questions: ${filename}`);
  requireValue(model.parts?.length > 0 && model.sources?.length > 0, `No verified parts/sources: ${filename}`);
  const ids = new Set();
  const sourceIds = new Set(model.sources.map(source => source.id));
  const sourceById = new Map(model.sources.map(source => [source.id, source]));
  requireValue(sourceIds.size === model.sources.length, `Duplicate source IDs: ${filename}`);
  for (const source of model.sources) requireValue(source.id && source.label && new URL(source.url).protocol === 'https:', `Invalid source URL: ${source.id}`);
  for (const part of model.parts) {
    requireValue(/^[a-z0-9-]+$/.test(part.id) && !ids.has(part.id), `Duplicate/invalid part: ${part.id}`);
    ids.add(part.id);
    affiliateUrl(part.asin);
    requireValue(['Original','Third-party'].includes(part.type), `Unknown origin type: ${part.id}`);
    requireValue(part.label && part.searchLabel && part.brand && part.pack && part.fit && part.buyWhen && part.check && part.image && part.imageAlt && part.amazonTitle, `Incomplete part: ${part.id}`);
    const image = new URL(part.image);
    requireValue(image.protocol === 'https:' && ['m.media-amazon.com','images-na.ssl-images-amazon.com'].includes(image.hostname), `Photo must come from verified Amazon listing: ${part.id}`);
    requireValue(part.sourceIds?.length && part.sourceIds.every(id => sourceIds.has(id)), `Missing compatibility evidence: ${part.id}`);
    requireValue(part.sourceIds.some(id=>{
      const listing = new URL(sourceById.get(id).url);
      return listing.hostname === 'www.amazon.com' && listing.pathname === `/dp/${part.asin}`;
    }), `Source evidence must include this exact Amazon listing: ${part.id}`);
    requireValue(part.listingCheckedDate === model.checkedDate, `Listing date mismatch: ${part.id}`);
  }
  requireValue(model.robot, `Missing verified original robot listing: ${filename}`);
  const robot = model.robot;
  affiliateUrl(robot.asin);
  requireValue(robot.amazonTitle && robot.image && robot.imageAlt && robot.description, `Incomplete original robot: ${filename}`);
  const robotImage = new URL(robot.image);
  requireValue(robotImage.protocol === 'https:' && ['m.media-amazon.com','images-na.ssl-images-amazon.com'].includes(robotImage.hostname), `Robot photo must come from Amazon: ${filename}`);
  requireValue(robot.sourceIds?.length && robot.sourceIds.every(id=>sourceIds.has(id)), `Missing original robot evidence: ${filename}`);
  requireValue(robot.sourceIds.some(id=>{
    const listing = new URL(sourceById.get(id).url);
    return listing.hostname === 'www.amazon.com' && listing.pathname === `/dp/${robot.asin}`;
  }), `Original robot evidence must include its exact Amazon listing: ${filename}`);
  requireValue(robot.listingCheckedDate === model.checkedDate, `Original robot listing date mismatch: ${filename}`);
  models.push(model);
}

const { renderModel, renderIndex } = await import('./render-parts.mjs');
for (const model of models) {
  const page = {
    output: `parts/${model.slug}/index.html`, url: `/parts/${model.slug}/`,
    title: model.title, description:model.description,
    affiliateDisclosureAtEnd: true,
    footerNote:`Parts and listing details checked ${model.checkedLabel}. Verify the exact model and pack before purchase.`
  };
  addOutput(page.output, document(page, renderModel(model, {escape, affiliateUrl}), [{
    '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[
      {'@type':'ListItem', position:1, name:'Home', item:origin+'/'},
      {'@type':'ListItem', position:2, name:'Replacement parts', item:origin+'/parts/'},
      {'@type':'ListItem', position:3, name:model.name, item:origin+page.url}
    ]
  }]));
  pages.push({...page, lastmod:model.checkedDate});
}
const indexPage = {
  output:'parts/index.html', url:'/parts/', title:'Robot Vacuum Replacement Parts by Model | DustMigo',
  description:'Find robot vacuum filters, dust bags, brushes and mop pads by exact model. Check compatibility and choose the replacement part you need.',
  footerNote:'Compatibility is checked per part and model. See each guide for its verification date.'
};
addOutput(indexPage.output, document(indexPage, renderIndex(models, {escape}), [{
  '@context':'https://schema.org', '@type':'BreadcrumbList', itemListElement:[
    {'@type':'ListItem',position:1,name:'Home',item:origin+'/'},
    {'@type':'ListItem',position:2,name:'Replacement parts',item:origin+'/parts/'}
  ]
}]));
pages.push(indexPage);
addOutput('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(page=>!page.noindex).map(page=>`  <url><loc>${escape(origin+page.url)}</loc>${page.lastmod?`<lastmod>${escape(page.lastmod)}</lastmod>`:''}</url>`).join('\n')}\n</urlset>\n`);

// Fail if a removed/draft model would leave an old generated page in the deploy root.
const publicParts = path.join(root, 'parts');
for (const entry of await readdir(publicParts, {withFileTypes:true}).catch(error=>error.code==='ENOENT'?[]:Promise.reject(error))) {
  if (entry.isDirectory()) {
    const name = `parts/${entry.name}/index.html`;
    const old = await readFile(path.join(root,name),'utf8').catch(error=>error.code==='ENOENT'?'':Promise.reject(error));
    requireValue(!old.includes('Generated by node _site-src/build.mjs') || outputs.has(name), `Stale public page: ${name}. Remove it deliberately before publishing.`);
  }
}

const stale = [];
for (const [name, content] of outputs) {
  const file = path.join(root,name);
  const current = await readFile(file,'utf8').catch(error=>error.code==='ENOENT'?null:Promise.reject(error));
  if (current !== content) {
    if (checkOnly) stale.push(name);
    else { await mkdir(path.dirname(file),{recursive:true}); await writeFile(file,content,'utf8'); }
  }
}
requireValue(!stale.length, `Generated output is stale. Run node _site-src/build.mjs:\n${stale.join('\n')}`);
console.log(`${checkOnly?'Verified':'Generated'} ${outputs.size} files; ${models.length} complete model guide(s); shared Analytics ${config.analyticsId}.`);
