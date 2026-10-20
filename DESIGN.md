# DESIGN.md · TK SON HALWA

## Direction
"From the Degh": the page sells one kilo of halwa the way the shop makes it.
You follow one batch from the copper degh to the price plate. The build
refuses the category-default arrangement (a grid of food cards under a
banner hero): the menu is a **ledger of price-plate rows** with hairline
rules, oversized tabular prices, and a photo strip that tells the batch
story as numbered stations.

## Tokens
| Token | Value | Use |
| --- | --- | --- |
| --paper | #F5EEDF | page ground (wheat paper) |
| --paper-2 | #EDE3CC | batch band ground |
| --card | #FCF7EB | cards and frames (a shade lighter) |
| --ink | #3B2A18 | text and primary controls (deep walnut) |
| --ink-2 / --ink-3 | #64513A / #7C6440 | secondary text |
| --saff | #B8770D | accent fills, rules, marks (saffron gold) |
| --saff-deep | #96610A | prices, links, stamps text (AA-safe gold) |
| --hair / --hair-2 | rgba(59,42,24,.16/.3) | ledger hairlines |
| --card radius | 16px | cards; pills 999px; inputs n/a (no forms by design) |

Type: Bricolage Grotesque (variable, local woff2) for display and prices with
tabular numerals; Figtree (variable, local woff2) for body. Both served
from `assets/fonts/`; no Google Fonts dependency. Prices carry
`font-feature-settings: "tnum" 1, "lnum" 1` so columns of rupee amounts
line up like a ledger.

## Page map
- **index.html** · top bar 68px (brand caps, quiet anchors, Order pill) →
  hero 7/5 (two-line headline, ~20-word subline, two CTAs; rimmed round
  disc photo with pinned Rs-per-kg stamp and slow steam motion) →
  price plate ledger (5 numbered rows: photo, name, chips, one-liner,
  price per kilo, Order link, Details) → batch strip (4 stations, degh to
  plate, honest captions) → story + "On the counter" ledger board →
  how-to-order (4 steps + bill row CTA) → customer lines → FAQ
  (native details/summary) → dark footer with full photo credits.
- **halwa.html?id=** · crumbs → big photo with stamp → name, chips,
  lede, Rs/price, Order + Call CTAs, spec ledger (amounts, shelf life,
  ingredients, packing, order path) → more from the plate (ledger rows)
  → not-found state ("off the plate").

## Data contract
Everything the owner edits lives in `assets/data.js`: brand, WhatsApp
number (`whatsappTo`, `whatsappDisplay`), the message template
(`orderMessage` with `{name}` and `{price}` placeholders), per-kilo
prices, photo paths, strip captions, steps, quotes, FAQ, story, hours,
delivery line, photo credits. `assets/site.js` only renders; no copy
lives there. Prices are owner drafts until confirmed.

## Order flow
Every order action opens `https://wa.me/923365505467?text=...` with:

"Hello there, I wanted to order {name} from your website, it's {price} per
kg on website. Can I get more details on this?"

`{name}` = item name, `{price}` = formatted rupees (e.g. Rs 1,200).
Verified generated links for all 5 items plus generic fallbacks.

## Provenance of every shipping raster
All photos are licensed stand-ins from Wikimedia Commons, to be replaced
by the owner's own shots through data.js. Credits stay visible in the
footer while any stand-in remains.

| File | Source file | Author | License | Edits made |
| --- | --- | --- | --- | --- |
| assets/img/halwa-hero.jpg | Sohan Halwa.JPG | Miansari66 | Public domain | Resized from 2816px original to 1200px JPEG q85 |
| assets/img/halwa-multani.jpg | Multani-sohan-halwa.jpg | Bhutta1984 | CC BY-SA 3.0 | Cropped 13% off the bottom to remove a burned-in datestamp; resized to 1400px |
| assets/img/halwa-papdi.jpg | Sohan papdi.jpg | Pamri | Public domain | none |
| assets/img/halwa-papdi-plate.jpg | Soan sohan papdi India Festive Sweets.jpg | Abigail Batchelder | CC BY 2.0 | Resized from 3504px original to 1200px JPEG q85 |
| assets/img/halwa-chocolate.jpg | Chocolate and vanila Sohan Papdi.jpg | Reshmi R S | CC BY-SA 4.0 | none (small author watermark remains) |
| assets/img/halwa-stack.jpg | Sohan_papdi2.JPG | Randhirreddy | GFDL and CC BY-SA 3.0 | none |

License evidence archived in `.impeccable/lic-*.html` and
`.impeccable/*-page.html` (archived Commons pages).

`assets/img/favicon.svg` and the inline brand roundels are original SVG
(TK into a saffron-rimmed plate), no external material.

## Review record (finish pass)
Screenshot rounds: desktop 1440px, mobile 390px, detail page, not-found
state, plus DOM dump verification of every wa.me link.

Defects found and fixed in the pass:
- hero headline broke into four ragged lines (size + phrasing + nowrap
  phrase glue, no orphans)
- menu names showed default link underlines
- plate-row photo anchor was unsized; mobile grid re-placed with named
  areas
- top bar collided at 390px (compact brand + "Order" pill wording)
- quote marks rendered invisible-small
- hidden not-found section reserved ~400px of blank space
  (global `[hidden]` enforcement)
- footer generic message produced "Rs 0" wording; now uses a real
  generic enquiry line
- hero disc needed a scale-and-origin correction to fill its rim
- all six stand-in photos verified to render; multani datestamp cropped

Verdict: **shipping** within the "From the Degh" contract. Remaining
owner debt: real prices, real delivery area and hours, and the owner's
own photography (stand-ins tagged in footer credits and data.js).
