# TK SON HALWA

A static website for a family-run soan halwa shop in Pakistan. Visitors browse the menu, check per-kilo prices, and order through WhatsApp. There is no cart, checkout, database or build step.

- **Stack:** HTML, CSS and vanilla JavaScript
- **Hosting:** any static host
- **Primary action:** open WhatsApp with a prefilled order message
- **Main content file:** `assets/data.js`

## Quick start

Open `index.html` directly in a browser, or serve the folder locally:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080/`.

No install, build or compile step is required.

## File map

```text
.
├── index.html              Home page
├── halwa.html              Product detail template, driven by ?id=
├── 404.html                Static not-found page
├── assets/
│   ├── data.js             All shop content and menu data
│   ├── site.js             Renders data.js into the pages
│   ├── styles.css          Full design system and responsive layout
│   ├── fonts/              Local variable font files
│   └── img/                Local product and batch photos
├── DESIGN.md               Design tokens, page map and content rules
├── PRODUCT.md              Product context and launch checklist
├── GUIDE.md                Plain-language guide for the shop owner
├── robots.txt              Crawler rules
├── site.webmanifest        Web app manifest
├── .nojekyll               Keeps GitHub Pages from running Jekyll
└── .gitignore              Local-only files and OS/editor junk
```

## How the site works

1. Every page loads `assets/data.js`, which creates `window.TK`.
2. `assets/site.js` reads `window.TK` on `DOMContentLoaded`.
3. Based on `<body data-page="...">`, it paints the home page, a product page, or shared footer chrome.
4. Product pages read `?id=` from the URL and look up the matching object in `TK.halwas`.
5. Every order link is built from `TK.whatsappTo` and `TK.orderMessage`.
6. `site.js` also injects `Bakery` structured data (JSON-LD) built from the same menu object.

There is no client-side router and no data fetching. Opening the files from disk works.

### Important rendering detail

`index.html` and `halwa.html` contain static fallback copy for the first product and the main sections. JavaScript replaces that copy with the current data on load. If you change visible copy in `data.js`, the rendered site updates immediately. If you also want the no-JavaScript fallback to stay accurate, update the matching static text in the HTML.

## Content model (`assets/data.js`)

| Field | Type | Purpose |
| --- | --- | --- |
| `brand.name` | string | Shop name used in the UI and structured data |
| `brand.kicker` | string | Small line above the hero headline |
| `whatsappTo` | string | Number for `wa.me`, digits only, country code included |
| `whatsappDisplay` | string | Human-readable phone number |
| `orderMessage` | string | Item order template. Must keep `{name}` and `{price}` |
| `genericMessage` | string | General enquiry used by header and footer buttons |
| `priceNote` | string | Small print under the menu heading |
| `deliveryNote` | string | Delivery copy used in the footer and FAQ |
| `shopHours` | string | Opening hours used in the footer and FAQ |
| `heroFacts` | string[] | Three short lines under the hero |
| `halwas` | object[] | Menu items; see below |
| `strip` | object[] | Four batch photos and captions |
| `steps` | object[] | Four how-to-order steps |
| `faq` | object[] | Question and answer pairs |
| `story` | object | Story copy and counter summary rows |

### Menu item shape

```js
{
  id: "walnut-soan",              // unique, stable URL key
  name: "Multani Walnut Soan",
  short: "One-line menu description",
  long: "Full description on the product page",
  price: 1200,                    // PKR per kilogram, number only
  chips: ["Walnut", "Almond"],
  img: "assets/img/halwa-hero.jpg",
  imgW: 1200,                     // real image width
  imgH: 1202,                     // real image height
  imgAlt: "Description of the photo",
  specs: {
    amounts: "Pack sizes",
    shelfLife: "Storage and shelf life",
    ingredients: "Ingredient list",
    packing: "How it is packed"
  }
}
```

### FAQ placeholders

Two FAQ answers are set to `null` and filled at the bottom of `data.js`:

- The delivery answer reuses `deliveryNote`.
- The visit answer reuses `shopHours`.

If you rewrite those questions, keep the words `deliver` and `visit` in the question text, or replace the `null` with a normal answer string.

## Order flow

`site.js` builds links in this shape:

```text
https://wa.me/<whatsappTo>?text=<URL-encoded message>
```

The item template is:

```text
Hello, I want to order {name} from the website. It is listed at {price} per kg. Please confirm availability and delivery.
```

`{price}` becomes something like `Rs 1,200`, and the template adds `per kg`.

The header and footer use `genericMessage`. Product pages also show a `tel:` link.

### Phone number changes

The number is stored in `assets/data.js`, but static fallback links also exist in:

- `index.html`
- `halwa.html`
- `404.html`

JavaScript overwrites those links on load. For no-JavaScript visitors and clean source files, update the fallback links too. `GUIDE.md` gives the exact search-and-replace steps.

## Editing rules

- Edit menu content in `assets/data.js`, not in `site.js`.
- Keep prices as numbers. Do not add `Rs`, commas or spaces.
- Keep each product `id` unique. Do not change an `id` after links have been shared.
- Match `imgW` and `imgH` to the actual image file.
- Use `esc()` for any new user-provided string inserted through `innerHTML`.
- Do not add a framework, bundler or external CDN without a clear need. The site is intentionally dependency-free.
- Keep user-visible copy plain and specific. Avoid hype, fake reviews and invented claims.
- Keep prices in PKR and always per kilogram.
- Do not add fake testimonials or awards.

## Adding a product

1. Copy an existing object inside `TK.halwas`.
2. Give it a new unique `id`.
3. Change `name`, `short`, `long`, `price`, `chips`, photo fields and `specs`.
4. Add a comma between objects.
5. Save and refresh. The menu, product page, "more from the menu" list and structured data all update automatically.

No separate HTML file is needed. The detail page is a template.

## Removing a product

1. Delete the full `{ ... }` object from `TK.halwas`.
2. Make sure the previous object still has the correct trailing comma, or no comma if it is now the last item.
3. Remove or replace the photo in `assets/img` if nothing else uses it.

## Images

- All photos are local files in `assets/img`.
- Recommended format: JPG, roughly 1200px on the long edge, under about 300 KB.
- Keep a 4:3 or square crop. The layout crops with `object-fit: cover`.
- Use lowercase file names without spaces.
- Update `img`, `imgW`, `imgH` and `imgAlt` in `data.js`.
- Run images through an optimiser before adding them.
- Confirm permission to use every photo before publishing.

## Styling and layout

All styles live in `assets/styles.css`.

- Design tokens are CSS custom properties at the top.
- Layout uses CSS Grid and Flexbox.
- Breakpoints: 1020px, 760px, 480px, 430px.
- The menu is a ledger-style list, intentionally not a card grid.
- Fonts are local WOFF2 files. There are no Google Fonts requests.
- Motion is limited to the hero steam animation; `prefers-reduced-motion` is respected.

## SEO and metadata

- Each page has a title, description, Open Graph tags and Twitter card tags.
- `site.js` injects `Bakery` JSON-LD with the menu, prices and phone number.
- `robots.txt` allows crawling.
- There is no canonical URL or sitemap yet because no domain is connected. Add both when the domain is known.
- Social preview images use a relative path. An absolute URL improves previews once a domain exists.

## Accessibility

- Skip link on every page.
- Semantic landmarks (`header`, `nav`, `main`, `footer`).
- Visible focus styles.
- Alt text for every photo.
- Native `<details>` for the FAQ.
- Reduced-motion support.
- Mobile tap targets sized through the pill component.

After layout changes, test keyboard navigation and the FAQ with a screen reader or browser accessibility tools.

## Local development

```powershell
# Python is already installed on most machines
python -m http.server 8080
```

Useful checks:

- Open `/` and click every nav link.
- Open `/halwa.html?id=walnut-soan`.
- Open `/halwa.html?id=does-not-exist` and confirm the not-found state appears.
- Open `/404.html`.
- Click an Order button and confirm WhatsApp shows the correct item and price.
- Check the layout at 1440px and 390px.

## Deployment

### GitHub Pages

1. Push the repository.
2. Open **Settings > Pages**.
3. Set the source to the branch root.
4. Keep `.nojekyll` in place.
5. Add the published URL to the README and, when available, use it for canonical and social metadata.

### Netlify or Vercel

- Publish directory: repository root
- Build command: none
- Output directory: `.`

### Shared hosting

Upload the contents of the repository to the web root. Keep the folder structure intact, especially `assets/`.

## Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| Menu is empty | `assets/data.js` has a syntax error, or `site.js` failed to load |
| Price shows `Rs NaN` | `price` is not a number |
| Product page shows not found | `?id=` does not match any `halwas[].id` |
| Photo does not appear | `img` path is wrong, or the file name has different casing |
| WhatsApp opens with the wrong item | `orderMessage` lost `{name}` or `{price}`, or the wrong item object was edited |
| Layout breaks after an image change | `imgW` / `imgH` values do not match the new image |
| Footer number is stale | Static fallback links in the HTML were not updated |
| FAQ answer is blank | A `null` answer no longer matches the `deliver` or `visit` keyword |

## Guides for humans

- `GUIDE.md`: step-by-step instructions for a non-technical shop owner.
- `DESIGN.md`: design tokens, page map and content rules.
- `PRODUCT.md`: product context and launch checklist.

## Ownership

Code, copy and brand assets in this repository belong to TK SON HALWA. Confirm image rights before public launch.
