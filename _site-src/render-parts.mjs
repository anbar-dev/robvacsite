export function renderModel(model, {escape: e, affiliateUrl}) {
  const linkAttributes = (part, placement) => `class="amazon-link${placement === 'button' ? ' button button-dark' : ' part-image-link'}" href="${e(affiliateUrl(part.asin))}" target="_blank" rel="sponsored nofollow noopener" data-model="${e(model.slug)}" data-part="${e(part.id)}" data-asin="${e(part.asin)}" data-placement="${placement}"`;
  const cards = model.parts.map((part, index) => `
    <article class="part-card" id="${e(part.id)}">
      <div class="part-card-top"><span class="part-origin${part.type === 'Original' ? ' is-original' : ''}">${e(part.type)}</span><span>${e(part.brand)}</span></div>
      <a ${linkAttributes(part, 'image')} aria-label="View ${e(part.label.toLowerCase())} for ${e(model.name)} on Amazon (affiliate link)"><img src="${e(part.image)}" alt="${e(part.imageAlt)}" width="300" height="180" loading="${index < 3 ? 'eager' : 'lazy'}" decoding="async"></a>
      <div class="part-card-body"><h2>${e(model.name)} ${e(part.searchLabel)}</h2><p class="part-pack">${e(part.pack)}</p>
        <a ${linkAttributes(part, 'button')}>View ${e(part.buttonLabel || part.label.toLowerCase())} on Amazon <span aria-hidden="true">↗</span></a>
        <p class="part-fit"><strong>Fit:</strong> ${e(part.fit)}</p>
        <div class="part-guidance"><p><strong>Replace when:</strong> ${e(part.buyWhen)}</p><p><strong>Before buying:</strong> ${e(part.check)}</p></div>
      </div>
    </article>`).join('\n');
  const sourceLinks = model.sources.filter(source => !source.id.endsWith('-listing')).map(source => `<li><a href="${e(source.url)}" target="_blank" rel="noopener">${e(source.label)}</a></li>`).join('');
  const robot = model.robot;
  const robotLink = robot ? `href="${e(affiliateUrl(robot.asin))}" target="_blank" rel="sponsored nofollow noopener" data-model="${e(model.slug)}" data-part="robot-vacuum" data-asin="${e(robot.asin)}"` : '';
  const robotSection = robot ? `<section class="wrap original-robot" id="original-robot" aria-labelledby="original-robot-title"><a class="amazon-link original-robot-photo" ${robotLink} data-placement="image" aria-label="View the original ${e(model.name)} robot on Amazon"><img src="${e(robot.image)}" alt="${e(robot.imageAlt)}" width="569" height="586" loading="lazy" decoding="async"></a><div><div class="eyebrow">THE MODEL IN THIS GUIDE</div><h2 id="original-robot-title">Original ${e(model.name)} robot vacuum</h2><p>${e(robot.description)}</p><a class="amazon-link button button-outline" ${robotLink} data-placement="button">View the original robot on Amazon <span aria-hidden="true">↗</span></a></div></section>` : '';
  return `<main id="main" class="parts-page">
    <section class="wrap parts-hero">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/parts/">Replacement parts</a><span aria-hidden="true">/</span><span>${e(model.name)}</span></nav>
      <h1>${e(model.name)} <em>replacement parts.</em></h1><p class="parts-scope">${e(model.scope)}</p>
      <p class="parts-warning"><strong>Check the variant:</strong> ${e(model.warning)}</p>
      <nav class="part-shortcuts" aria-label="Choose a replacement part">${model.parts.map(part=>`<a href="#${e(part.id)}">${e(part.label)} <span aria-hidden="true">↓</span></a>`).join('')}</nav>
      <p class="parts-checked">Listings and compatibility checked <time datetime="${e(model.checkedDate)}">${e(model.checkedLabel)}</time> · Amazon.com / U.S. listings</p>
    </section>
    <section class="wrap parts-grid" aria-label="Shop replacement parts">${cards}</section>
    ${robotSection}
    <div class="wrap parts-details">
      <section class="parts-utility" id="compatibility"><div class="eyebrow">EXACT-MODEL FIT</div><h2>What is shared, and what needs checking?</h2><dl class="compatibility-list">${model.compatibility.map(item=>`<div><dt>${e(item.part)}</dt><dd>${e(item.detail)}</dd></div>`).join('')}</dl></section>
      <section class="parts-utility" id="maintenance"><div class="eyebrow">CLEAN FIRST, REPLACE WHEN NEEDED</div><h2>${e(model.name)} maintenance intervals</h2><p>The manufacturer’s published care guidance for this model gives these intervals. Wear and your cleaning routine can change when a part needs replacement; follow the replacement manufacturer’s care instructions too.</p><div class="care-table-wrap"><table class="care-table"><caption class="visually-hidden">${e(model.name)} cleaning and replacement intervals</caption><thead><tr><th scope="col">Part</th><th scope="col">Clean</th><th scope="col">Replace</th></tr></thead><tbody>${model.care.map(row=>`<tr><th scope="row">${e(row.part)}</th><td>${e(row.clean)}</td><td>${e(row.replace)}</td></tr>`).join('')}</tbody></table></div><p class="care-tip">${e(model.careTip)}</p></section>
      <section class="parts-utility parts-faq"><h2>Before you order</h2>${model.questions.map(item=>`<details><summary>${e(item.question)}</summary><p>${e(item.answer)}</p></details>`).join('')}</section>
      <section class="parts-utility parts-sources"><h2>How these parts were checked</h2><p>We checked each linked Amazon listing’s model names, selected pack and product photo. Third-party fit statements come from the seller; we have not tested these parts. Manufacturer sources:</p><ul>${sourceLinks}</ul><p>Each product button opens its exact listing. Details can change; compare the selected variation with your original part before ordering.</p><a class="text-link" href="/how-we-choose.html">Our research and affiliate disclosures <span aria-hidden="true">→</span></a></section>
    </div>
  </main>`;
}

export function renderIndex(models, {escape: e}) {
  return `<main id="main" class="wrap parts-index">
    <section class="parts-hero"><div class="eyebrow"><span class="eyebrow-dot"></span> FIND THE RIGHT FIT</div><h1>Replacement parts <em>by robot model.</em></h1><p class="parts-scope">Choose the exact model, then find its filters, bags, brushes and mop pads. Each guide shows pack sizes, fit notes and direct Amazon links.</p><p class="parts-index-note">Check the full model name: “Qrevo” and “Qrevo S5V,” for example, can need different parts.</p></section>
    <section class="model-guide-grid" aria-label="Available model guides">${models.map(model=>`<article class="model-guide"><div class="eyebrow">${e(model.brand.toUpperCase())}</div><h2><a href="/parts/${e(model.slug)}/">${e(model.name)}</a></h2><p class="model-variant">${e(model.variant)}</p><p>${e(model.parts.map(part=>part.label.toLowerCase()).join(' · '))}</p><a class="button button-dark" href="/parts/${e(model.slug)}/">Find ${e(model.name)} parts <span aria-hidden="true">→</span></a><p class="parts-checked">Checked ${e(model.checkedLabel)}</p></article>`).join('')}</section>
    <section class="parts-index-help"><h2>Not sure which part needs replacing?</h2><p>Start with the model guide’s maintenance table and the condition of your current part. A clogged filter or tangled brush may need cleaning before replacement.</p></section>
  </main>`;
}
