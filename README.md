# DustMigo

Static robot-vacuum buying and replacement-parts guides for the U.S. market. A small Node generator creates complete HTML; the published site runs with CSS and vanilla JavaScript, without a backend or framework.

## Build and preview

Node 20 or newer is required for authoring. There are no dependencies to install.

```sh
npm run build
npm run check
npm run dev
```

Equivalent commands are `node _site-src/build.mjs`, `node _site-src/build.mjs --check`, `node _site-src/verify.mjs` and `node _site-src/serve.mjs`.

Open `http://127.0.0.1:4173/`. The preview only serves public site files and disables production Analytics. Rebuild and reload after source edits. Set `DUSTMIGO_PORT` to use a different preview port.

## Where to edit

| Change | Source |
| --- | --- |
| Navigation, Analytics ID/hostnames, new guide affiliate tag, asset version | `_site-src/config.json` |
| Shared header, footer, Google tag | `_site-src/partials/` |
| Shared HTML document and metadata | `_site-src/templates/page.html` |
| Existing page content | `_site-src/pages/` |
| Existing titles/descriptions and dated footer notes | `_site-src/pages.json` |
| Replacement parts and compatibility for a model | `_site-src/models/<model-slug>.json` |
| Model-guide and parts-index layout | `_site-src/render-parts.mjs` |
| Styles and browser interactions | `assets/site.css`, `assets/site.js` |

Root HTML, `parts/**/index.html` and `sitemap.xml` are generated output. Do not edit them directly. Commit both source and output after building. Header/footer/Analytics appear in every generated file but are maintained in one place. Full page content and navigation exist before JavaScript runs.

## Add a model guide

For the repeatable “next replacement page” workflow, follow [AGENTS.md](AGENTS.md) and [REPLACEMENT_PAGE_PLAYBOOK.md](REPLACEMENT_PAGE_PLAYBOOK.md).

1. Use [MODELLI_RICAMBI.md](MODELLI_RICAMBI.md) to choose a candidate. Popularity signals are directional; the list is not a measured keyword-demand ranking.
2. Create `_site-src/models/<slug>.json`, using `roborock-qrevo.json` as the data-format example. Begin with `"status": "draft"`. Drafts create no page, index link or sitemap entry.
3. Verify the exact model and region against manufacturer documentation. For each part, open the actual Amazon.com listing and selected variation. Record ASIN, brand, pack contents, original/third-party label, compatibility exclusions, listing title, photo URL from that same listing, and verification date. Keep source IDs linking the evidence to each part. Give each card a natural `searchLabel` such as `replacement filters`; the guide combines it with the model name in the visible heading.
4. Write specific fit checks and replacement advice. Include manufacturer maintenance intervals and sources. A kit needs compatibility checks for all its components; a shared bag does not establish a shared filter. Leave unsupported parts out. Add the verified original robot in a `robot` object with its Amazon ASIN, tagged destination, image from that listing, model description and source IDs; published guides require this object.
5. Set `status` to `published` only when complete. Run build and check, then inspect desktop and mobile. The build validates required fields and links and creates the model page, index entry, breadcrumbs, canonical metadata and sitemap entry.

Do not create dozens of empty or near-identical public pages. A new model needs its own verified parts and useful compatibility notes. Separate part-specific pages can be added later where search data and sufficient distinct content support them.

The current format records one complete check date per guide: recheck all included listings when advancing it. Prices, ratings and stock are not copied. Amazon photos load from the verified listing's image CDN. Photos are used under the user's authorization for this affiliate site.

Model guides display the affiliate disclosure once in the shared footer, after the buying content. Keep card buttons and photos clearly labeled with their product destinations.

The build fails if changing a formerly published model to draft would leave its old generated page behind. Remove that public file deliberately and handle any redirect before publishing the change.

## Analytics

`_site-src/config.json` contains measurement ID **G-ZF7L8PV8EV**. The shared partial initializes it once on every page, including model guides and the 404, on the configured production hostnames only. Changing the ID requires one config edit and a rebuild; the privacy page's displayed ID is generated from that config too.

The delegated click handler sends `affiliate_click` with `robot_model`, `part_category`, `asin` and `link_placement`. It covers product photos, buttons and finder links, including future model pages. Finder answers are not sent. Privacy notes describe the events.

In GA4, register the four event parameters as [event-scoped custom dimensions](https://support.google.com/analytics/answer/14240153) to use them in reports. This repository does not change the Analytics property's settings. An affiliate click is an outbound click, not a confirmed Amazon sale; use Associates reports for orders and commission data.

## Publish with existing GitHub Pages hosting

Build, verify and push the source **and generated public files**. The existing branch/root Pages setup and `CNAME` remain supported. Node is needed locally for generation, not by the visitor or the existing Pages hosting build.

GitHub Pages' default Jekyll processing [excludes underscore-prefixed directories](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll), so `_site-src` stays out of the published site. Do not add `.nojekyll` to this branch/root workflow without also excluding source files through a separate deployment build.

The initial implementation has not been deployed. Preserve the domain configuration, then confirm live canonical URLs, images and production Analytics after the normal publication process.

## Verification and editorial plan

`npm run check` verifies deterministic output, internal links and anchors, metadata, sitemap membership, exact tagged Amazon destinations, photos and CTAs, and Analytics initialization/click attribution without network requests. It cannot establish a physical fit or detect later listing changes.

See [RICAMBI_SEO_PLAN.md](RICAMBI_SEO_PLAN.md) for the SEO approach and [ROADMAP.md](ROADMAP.md) for previous work and implementation notes.
