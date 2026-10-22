# TK SON HALWA: product context

## What this is

A static website for TK SON HALWA, a family-run Pakistani shop selling Multani-style soan halwa by the kilogram. The site shows the menu with per-kilo prices and sends every order to WhatsApp. There is no cart, account or online payment.

## Audience

Local customers, mostly on mobile, arriving from a WhatsApp forward, Instagram bio link or a search result. They want to check the price, pick a halwa and message the shop quickly. The site should feel like a real neighbourhood sweet counter, not a startup template.

## Business model

Inquiry-based ordering:

1. Visitor checks the menu and price.
2. Visitor taps Order.
3. WhatsApp opens with a prefilled message naming the item and price.
4. The shop confirms weight, delivery charge and total in the chat.
5. Payment is cash on delivery or as agreed.

## Pages

- `index.html`: home, menu, process, story, ordering steps and FAQ.
- `halwa.html?id=...`: one product detail page rendered from `assets/data.js`.
- `404.html`: static not-found page.

## Product constraints

- Static files only. No build step, database or server code.
- All shop-editable content lives in `assets/data.js`.
- Prices are per kilogram in PKR.
- The order flow must always land in WhatsApp, never in a form or checkout.
- Copy should sound like a local shop wrote it: plain, specific and free of hype.
- Photos live in `assets/img` and are served locally. Keep the set consistent and cleared for use.
- Keep the number, prices, hours and delivery area easy to change without touching the layout.

## Success

A first-time visitor understands within seconds:

- this is TK SON HALWA;
- they sell soan halwa by the kilo;
- the price is visible;
- ordering takes one WhatsApp message.

On a phone, the order button should be easy to reach and the menu should be readable without zooming.

## Before launch

- Confirm the WhatsApp number, prices, opening hours and delivery area.
- Confirm permission to use every image in `assets/img`.
- Check every order link opens the correct WhatsApp chat.
- Check the site on a phone and on a desktop.
- Add a real domain to canonical tags, social previews and a sitemap when it is available.
