# Design and build notes

## Direction

TK SON HALWA sells one product family the way a small shop presents it: a short menu, clear per-kilo prices, and a direct WhatsApp order. The design uses a warm paper ground, deep walnut ink and one saffron accent. The menu reads like a shop ledger rather than a grid of product cards.

The tone is plain and local. No hype, no invented awards, no fake urgency.

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#F5EEDF` | Page background |
| `--paper-2` | `#EDE3CC` | Batch section background |
| `--card` | `#FCF7EB` | Cards, image frames |
| `--ink` | `#3B2A18` | Main text and primary buttons |
| `--ink-2` | `#64513A` | Secondary text |
| `--ink-3` | `#7C6440` | Muted labels |
| `--saff` | `#B8770D` | Accent rules, marks, buttons |
| `--saff-deep` | `#96610A` | Prices and links |
| `--hair` | `rgba(59, 42, 24, .16)` | Light rules |
| `--hair-2` | `rgba(59, 42, 24, .3)` | Strong rules |
| Card radius | `16px` | Cards and frames |
| Pill radius | `999px` | Buttons and chips |

## Typography

- Display and prices: Bricolage Grotesque, served locally from `assets/fonts/`.
- Body: Figtree, served locally from `assets/fonts/`.
- Prices use tabular numerals so columns line up.
- Fonts are preloaded and use `font-display: swap`.

## Page map

### `index.html`

1. Sticky top bar with brand, section links and an order button.
2. Hero with a two-line headline, short explanation and two calls to action.
3. Menu and prices: five ledger rows with photo, name, flavour chips, short description, per-kilo price and order link.
4. How we make it: four-step photo strip.
5. Our shop: short story and a small counter summary.
6. How to order: four steps and a closing order row.
7. FAQ using native `<details>` and `<summary>`.
8. Dark footer with contact details and WhatsApp link.

### `halwa.html?id=...`

1. Breadcrumb.
2. Large product photo with a per-kilo stamp.
3. Product name, chips, description, price, order and call buttons.
4. Spec rows: amounts, shelf life, ingredients, packing and order path.
5. Links to the other menu items.
6. A not-found state when the `id` does not match a product.

### `404.html`

Static not-found page for the hosting provider. It uses the same header, footer and contact details.

## Data contract

All shop content lives in `assets/data.js`. `assets/site.js` only renders it.

The data object contains:

- `brand`: shop name and hero kicker.
- `whatsappTo`, `whatsappDisplay`: order number in two formats.
- `orderMessage`: item-specific WhatsApp message with `{name}` and `{price}` placeholders.
- `genericMessage`: general WhatsApp enquiry.
- `priceNote`, `deliveryNote`, `shopHours`: small print used across the site.
- `heroFacts`: three short lines under the hero.
- `halwas`: menu items, prices, photos, descriptions and specs.
- `strip`: four batch photos and captions.
- `steps`: how-to-order steps.
- `faq`: question and answer pairs. Answers set to `null` reuse `deliveryNote` or `shopHours`.
- `story`: story copy and the counter summary rows.

`site.js` also builds `Bakery` structured data from the same object, so menu prices and phone numbers are not duplicated in JSON-LD.

## Order flow

Every order action opens:

```text
https://wa.me/<whatsappTo>?text=<encoded message>
```

The item message uses:

```text
Hello, I want to order {name} from the website. It is listed at {price} per kg. Please confirm availability and delivery.
```

`{price}` is formatted as `Rs 1,200`; the message template adds `per kg`. The header and footer use the generic enquiry message.

## Content rules

- Prices are in PKR and always per kilogram.
- Use plain sentences. Avoid hype and invented claims.
- Keep the product `id` values unique and stable once links are shared.
- Keep `imgW` and `imgH` equal to the real image dimensions.
- Alt text should describe the photo, not repeat the product name only.
- Do not add external fonts, scripts or tracking without a reason.

## Accessibility and performance

- Skip link, visible focus states and semantic landmarks.
- Native `<details>` for the FAQ.
- All images have width and height attributes to reduce layout shift.
- Below-the-fold images use `loading="lazy"`.
- Hero image and fonts are preloaded.
- `prefers-reduced-motion` disables the steam animation and smooth scrolling.
- No frameworks, no external CDN requests, no build step.
- Mobile breakpoints: 1020px, 760px, 480px and 430px.
- Test at 1440px and 390px after layout changes.

## Deployment

Upload the repository as static files. No build command is needed.

- GitHub Pages: publish the root folder. `.nojekyll` is included.
- Netlify or Vercel: use the root folder as the publish directory.
- Shared hosting: upload everything to `public_html` or the web root.

`robots.txt` and `site.webmanifest` are included. A sitemap and canonical URLs can be added once a real domain is connected.
