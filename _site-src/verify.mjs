import { readFile, access, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const source = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(source);
const config = JSON.parse(await readFile(path.join(source,'config.json'),'utf8'));
const models = [];
for (const name of await readdir(path.join(source,'models'))) {
  if (name.endsWith('.json')) models.push(JSON.parse(await readFile(path.join(source,'models',name),'utf8')));
}
const sitemap = await readFile(path.join(root,'sitemap.xml'),'utf8');
const files = ['index.html','compare.html','how-we-choose.html','privacy.html','404.html','parts/index.html',...models.filter(m=>m.status==='published').map(m=>`parts/${m.slug}/index.html`)];
const documents = new Map(await Promise.all(files.map(async file=>[file,await readFile(path.join(root,file),'utf8')])));
const decode = value => value.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'");

for (const [file, html] of documents) {
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length,1,`${file}: exactly one H1`);
  assert.equal([...html.matchAll(/<header\b/g)].length,1,`${file}: shared header once`);
  assert.equal([...html.matchAll(/<footer\b/g)].length,1,`${file}: shared footer once`);
  assert.equal([...html.matchAll(/googletagmanager\.com\/gtag\/js/g)].length,1,`${file}: Analytics once`);
  assert(html.includes(`window.gtag('config', '${config.analyticsId}')`) || html.includes(`window.gtag('config','${config.analyticsId}')`),`${file}: correct Analytics ID`);
  assert(!html.includes('{{'),`${file}: no unresolved placeholders`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size,ids.length,`${file}: unique element IDs`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/);
  if (file === '404.html') {
    assert(html.includes('<meta name="robots" content="noindex">'));
    assert(!canonical);
  } else {
    const expectedPath = file==='index.html'?'/':file.endsWith('/index.html')?'/'+file.slice(0,-10):'/'+file;
    assert.equal(canonical?.[1],config.origin+expectedPath,`${file}: canonical`);
    assert(sitemap.includes(`<loc>${config.origin+expectedPath}</loc>`),`${file}: sitemap entry`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = new URL(decode(match[1]), config.origin + '/' + file);
    if (url.hostname === 'www.amazon.com') {
      assert(/^\/dp\/[A-Z0-9]{10}$/.test(url.pathname),`${file}: exact Amazon destination`);
      assert.equal(url.searchParams.get('tag'),config.affiliateTag,`${file}: affiliate tag`);
    } else if (url.origin === config.origin) {
      const target = url.pathname==='/'?'index.html':url.pathname.slice(1)+(url.pathname.endsWith('/')?'index.html':'');
      await access(path.join(root,target));
      if (url.hash) {
        const targetHtml = documents.get(target) || await readFile(path.join(root,target),'utf8');
        assert(targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),`${file}: missing anchor ${match[1]}`);
      }
    }
  }
}
for (const model of models) {
  if (model.status !== 'published') {
    assert(!sitemap.includes(`/parts/${model.slug}/`),'Draft model excluded from sitemap');
    continue;
  }
  const html = documents.get(`parts/${model.slug}/index.html`);
  const cards = [...html.matchAll(/<article class="part-card"/g)].length;
  assert.equal(cards,model.parts.length,'All researched parts rendered');
  assert.equal([...html.matchAll(/data-placement="button"/g)].length,model.parts.length+(model.robot?1:0),'One clear button per item');
  assert.equal([...html.matchAll(/data-placement="image"/g)].length,model.parts.length+(model.robot?1:0),'Clickable photo per item');
  for (const part of model.parts) {
    assert(html.includes(part.image),'Actual researched listing photo rendered');
    assert(html.includes(`<h2>${model.name} ${part.searchLabel || part.label.toLowerCase()}</h2>`),'Exact-model search phrase in every part card');
  }
  assert.equal([...html.matchAll(/As an Amazon Associate I earn from qualifying purchases\./g)].length,1,'Affiliate disclosure once at the end');
  assert(!html.includes('class="affiliate-ribbon"') && !html.includes('class="part-affiliate"'),'No repeated disclosure at the top or under buttons');
  if (model.robot) {
    assert(html.includes(model.robot.image),'Original robot photo shown');
    assert(html.includes(`https://www.amazon.com/dp/${model.robot.asin}?tag=${config.affiliateTag}`),'Original robot goes to the exact tagged Amazon listing');
  }
}

// Exercise shared Analytics without making a network request.
const analyticsTemplate = await readFile(path.join(source,'partials/analytics.html'),'utf8');
const analyticsCode = analyticsTemplate.replace(/<\/?script>/g,'').replace('{{analyticsHosts}}',JSON.stringify(config.analyticsHosts)).replaceAll('{{analyticsId}}',config.analyticsId);
for (const hostname of ['127.0.0.1', ...config.analyticsHosts]) {
  const scripts = [];
  const window = {location:{hostname}};
  vm.runInNewContext(analyticsCode,{window, document:{createElement:()=>({}),head:{appendChild:script=>scripts.push(script)}},Date});
  assert.equal(scripts.length,hostname==='127.0.0.1'?0:1,'Preview must not send production Analytics');
  if (scripts.length) {
    assert.equal(window.dataLayer.length,2,'One initialization and config event');
    assert.equal(window.dataLayer[1][1],config.analyticsId);
  }
}

// Affiliate attribution must describe the clicked item without collecting finder selections.
const handlers = {};
const captured = [];
const document = {querySelector:()=>null,addEventListener:(type,handler)=>{handlers[type]=handler;}};
vm.runInNewContext(await readFile(path.join(root,'assets/site.js'),'utf8'), {document,window:{gtag:(...args)=>captured.push(args)},URL});
const part = models.find(m=>m.status==='published').parts[0];
const link = {href:`https://www.amazon.com/dp/${part.asin}?tag=${config.affiliateTag}`,dataset:{model:'roborock-qrevo',part:part.id,asin:part.asin,placement:'button'}};
handlers.click({target:{closest:()=>link}});
assert.equal(captured[0][1],'affiliate_click');
assert.equal(captured[0][2].part_category,part.id);
assert.deepEqual(Object.keys(captured[0][2]).sort(),['asin','link_placement','part_category','robot_model']);
handlers.click({target:{closest:()=>({href:`https://www.amazon.com/dp/B0FVFL86M9?tag=${config.affiliateTag}`,dataset:{product:'dreame',placement:'finder-primary'}})}});
assert.equal(captured[1][2].robot_model,'dreame-l40-ultra-gen-2','Finder clicks use the same model identifier as future parts guides');
handlers.click({target:{closest:()=>({...link,href:config.origin+'/parts/'})}});
assert.equal(captured.length,2,'Internal links do not generate affiliate events');
console.log(`Passed: ${files.length} pages, internal links/anchors, exact affiliate links/photos, shared Analytics and click attribution.`);
