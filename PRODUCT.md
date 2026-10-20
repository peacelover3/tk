# TK SON HALWA - Product Context

## What this is
A small static showcase website for "TK SON HALWA", a Pakistani soan halwa
(mithai) business based in Pakistan. The site displays the halwa varieties
with per-kilogram prices. There is no online checkout: ordering happens over
WhatsApp. Every "Order" action opens wa.me with a prefilled message to
+92 336 5505467.

## Audience and scene
Local Pakistani customers, often on mobile data, many arriving from a
WhatsApp forward or Instagram bio link. They scan a menu, check a price,
and want to message the shop in one tap. English-only copy, simple tone.
The site must feel like a real, trustworthy local sweet shop, not a
startup template.

## Business model
Inquiry-based: the visitor picks a halwa, taps order, WhatsApp opens with
"Hello there, I wanted to order {name} from your website, it's {price} on
website. Can I get more details on this?" (message template lives in
data.js so the owner can edit it). Prices are per kilogram in PKR, easily
editable by the owner in one data file.

## Pages
- index.html: home. Hero, menu grid (all halwas with prices), photo strip,
  short story, how-to-order steps, a few customer lines, FAQ, footer.
- halwa.html: one detail page template driven by ?id= - big photo,
  description, price, specs (options, shelf life, ingredients, packaging),
  and the WhatsApp order CTA.

## Hard constraints from the owner
- Static files only. No build step. Cheap free hosting.
- All editable content (prices, names, photos, phone number, message
  template) lives in assets/data.js so tiny changes never need code edits.
- Written copy must read like a human local shop wrote it: no AI-tell
  phrases, no em-dashes in any user-visible text, no fake credentials
  (no invented awards, years, or certifications).
- Photos: owner will replace with real shots of their halwa. Until then
  use verified open-license photos, each swappable through data.js.

## Success
A first-time visitor understands within seconds: this is TK SON HALWA,
they sell soan halwa by the kilo, prices are visible, and the big action
is WhatsApp ordering. On mobile the order tap is effortless.
