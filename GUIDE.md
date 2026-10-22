# Owner's guide: how to change the website

This guide is for changing the shop details without knowing how to code. You will mostly edit one file.

Take it slowly. Change one thing, save, and check the website. Then change the next thing.

## Before you start

1. **Make a backup.** Copy the whole website folder to your Desktop or a USB drive. If anything goes wrong, you can restore the copy.
2. **Use a plain text editor.** On Windows, right-click the file and choose **Open with > Notepad**. Do not use Microsoft Word.
3. **Do not rename files.** Keep names like `data.js`, `index.html` and `halwa.html` exactly as they are.

## The one file you need most of the time

Almost everything is in:

```text
assets/data.js
```

It contains the menu, prices, descriptions, photos, phone number, opening hours, delivery note, story and FAQ.

To open it:

1. Open File Explorer and go to the website folder.
2. Open the `assets` folder.
3. Right-click `data.js`.
4. Choose **Open with > Notepad**.
5. Make your change.
6. Press **Ctrl+S** to save.
7. Open `index.html` in your browser and press **Ctrl+F5** to refresh.

## Three simple rules

1. **Only change the words between the quote marks.** For example, change `"Multani Walnut Soan"` to `"Multani Walnut Soan Special"`. Keep the quote marks.
2. **Keep the commas and braces.** Do not delete `{`, `}`, `[`, `]`, `:` or `,`.
3. **Never change `{name}` or `{price}`.** Those two words are filled in automatically when a customer taps Order.

If the page goes blank after a change, you probably removed a quote or a comma. Press **Ctrl+Z** in Notepad, save again, and refresh.

## Change a price

Prices are per kilogram.

1. Open `assets/data.js`.
2. Press **Ctrl+F** and search for the halwa name, for example:

```text
Multani Walnut Soan
```

3. A few lines below it you will see:

```js
price: 1200,
```

4. Change `1200` to the new price, for example:

```js
price: 1350,
```

5. Do not add `Rs`, commas or spaces. Write `1350`, not `Rs 1,350`.
6. Save and refresh the page.

The new price appears on the menu, on the product page, on the order button and in the WhatsApp message.

## Change a product name

Find the product in `assets/data.js`. Change the text after `name:`.

```js
name: "Multani Walnut Soan",
```

For example:

```js
name: "Multani Walnut Soan Special",
```

Keep the comma at the end and keep the quote marks.

## Change a short or long description

Each product has two descriptions:

```js
short: "A thick Multani-style disc with walnut in every cut.",
long: "We pull the soan thin, layer it, and finish it in desi ghee...",
```

- `short` is the one line shown on the menu.
- `long` is the full paragraph on the product page.

Change only the words between the quotes.

## Change the flavour tags

The small pills next to each product are called chips:

```js
chips: ["Walnut", "Almond", "Desi ghee"],
```

You can change the words, add a new tag, or remove one. Keep the quote marks and commas.

Example:

```js
chips: ["Walnut", "Almond", "Desi ghee", "Gift box"],
```

## Change a photo

### Easiest way: replace the file

1. Open `assets/img`.
2. Find the photo you want to replace, for example `halwa-hero.jpg`.
3. Give your new photo the **same file name** and the **same file type**.
4. Replace the old file with the new one.
5. Refresh the website with **Ctrl+F5**.

The website will use the new photo automatically.

### If the new photo has a different name

1. Put the new photo in `assets/img`.
2. Use a short name with no spaces, for example `walnut-new.jpg`.
3. Open `assets/data.js` and find the product.
4. Change the `img` line:

```js
img: "assets/img/walnut-new.jpg",
```

5. Update the size lines to match the new photo:

```js
imgW: 1200,
imgH: 900,
```

To find the size on Windows: right-click the photo, choose **Properties > Details**, and look for **Width** and **Height**. Use the numbers only, without `px`.

6. Update the description of the photo:

```js
imgAlt: "Round walnut soan halwa on a plate",
```

7. Save and refresh.

### Photo tips

- Use JPG files.
- Around 1200 pixels on the long side is enough.
- Try to keep each file under 300 KB so the site stays fast on mobile.
- Use a photo you took or one you have permission to use.
- Keep the main subject in the centre. The site crops photos to fit.

## Change the WhatsApp number

The number appears in two formats.

Open `assets/data.js` and find:

```js
whatsappTo: "923365505467",
whatsappDisplay: "+92 336 5505467",
```

- `whatsappTo` is the number used by WhatsApp. Use the country code, digits only, with no plus sign and no spaces. For example: `923001234567`.
- `whatsappDisplay` is the number customers see. Keep the plus sign and spaces. For example: `+92 300 1234567`.

### Also update the backup links

The website has a few backup links in the HTML files. They are used if JavaScript is still loading or turned off. Change the old number in these files too:

- `index.html`
- `halwa.html`
- `404.html`

In each file, use **Ctrl+H** (Find and Replace):

1. Replace `923365505467` with your new digits-only number.
2. Replace `+92 336 5505467` with your new display number.
3. Save each file.

Without this step, some buttons may still open the old number.

## Change opening hours, delivery and price note

Open `assets/data.js` and look for:

```js
priceNote: "All prices are per kilogram in Pakistani rupees...",
deliveryNote: "We deliver in our area and nearby towns...",
shopHours: "Open daily, 9:00 am to 9:00 pm",
```

Change the words between the quotes. These lines also appear in the footer and in the FAQ.

## Change the hero text on the home page

The big text at the top of the home page is in `index.html`.

1. Open `index.html` with Notepad.
2. Press **Ctrl+F** and search for:

```text
Fresh soan halwa
```

3. Change the headline text inside the `<h1>` tags.
4. Search for:

```text
Made in small batches
```

5. Change the paragraph below the headline.
6. Save and refresh.

The three small lines under the buttons are in `assets/data.js`:

```js
heroFacts: [
  "Made every morning",
  "Sold by the kilo",
  "Order on WhatsApp"
],
```

## Change the story section

Open `assets/data.js` and find:

```js
story: {
  title: "Our shop",
  lead: "TK SON HALWA is a family-run counter...",
  body: "We do not keep stock in cold storage...",
  board: [
    { k: "Degh", v: "one, copper" },
    ...
  ]
},
```

- `lead` is the larger paragraph.
- `body` is the smaller paragraph.
- `board` is the small "On the counter" list. Change the `k` (label) and `v` (value) text.

## Change the order steps

Open `assets/data.js` and find `steps:`. Each step has:

```js
{
  n: "01",
  t: "Choose your halwa",
  d: "Check the menu and note the quantity you need."
}
```

- `n` is the step number.
- `t` is the title.
- `d` is the description.

Keep the quotes and commas.

## Change the FAQ

Open `assets/data.js` and find `faq:`. Each question looks like:

```js
{
  q: "How fresh is the halwa?",
  a: "We make one batch each morning..."
}
```

- `q` is the question.
- `a` is the answer.

Two answers are set to `null` and filled from other lines:

```js
{
  q: "Do you deliver, and what is the charge?",
  a: null
},
{
  q: "Can I visit the shop?",
  a: null
}
```

The first one uses `deliveryNote`. The second one uses `shopHours`. If you change the question wording, keep the words `deliver` and `visit`, or replace `null` with a normal answer in quotes.

## Add a new halwa

1. Open `assets/data.js`.
2. Find the first product, starting with `{` and `id: "walnut-soan"`.
3. Select the whole product block, from its opening `{` to its closing `},`.
4. Copy it and paste it after the last product.
5. Give the new product a new `id`. Use lowercase letters and hyphens, for example `"pistachio-barfi"`. Each `id` must be different.
6. Change the name, descriptions, price, chips, photo and specs.
7. Make sure there is a comma between product blocks.
8. Save and refresh.

The new item appears in the menu, on its own product page and in the "More from the menu" list automatically.

## Remove a halwa

1. Open `assets/data.js`.
2. Find the product block.
3. Delete the whole block, from its opening `{` to its closing `},`.
4. Check the product above it. It should still end with a comma. The last product in the list should not have a comma after its closing `}`.
5. Save and refresh.
6. If nothing else uses that photo, you can remove the photo file from `assets/img`.

## Change the shop name or logo letters

The shop name appears in several places. This is a more advanced change.

1. In `assets/data.js`, change `brand.name`.
2. In `index.html`, `halwa.html` and `404.html`, use **Ctrl+H** to replace `TK SON HALWA` with the new name.
3. The small logo circle contains the letters `TK`. To change them, search for `>TK</text>` in each HTML file and replace `TK` with your letters.
4. Save all files and refresh.

If you are unsure, ask a developer to do this one.

## What not to edit

You do not need to open these files for normal changes:

- `assets/site.js`: the code that builds the pages.
- `assets/styles.css`: colours, spacing and layout.
- `assets/fonts`: the font files.

If you edit these by accident, restore your backup.

## Publish the website

The website is a set of static files. You can upload it to any static host.

### Netlify Drop (easiest)

1. Go to `https://app.netlify.com/drop`.
2. Drag the whole website folder onto the page.
3. Netlify gives you a free link.
4. Test the link on your phone.
5. When you are ready, connect your own domain in Netlify settings.

### GitHub Pages

1. Put the files in a GitHub repository.
2. Open **Settings > Pages**.
3. Choose the main branch and the root folder.
4. Save. GitHub gives you a link after a minute or two.
5. Keep the `.nojekyll` file in the repository.

### Shared hosting or cPanel

1. Open your hosting file manager.
2. Go to `public_html` or the folder for your domain.
3. Upload the contents of the website folder.
4. Keep the `assets` folder and its subfolders together.
5. Open your domain in a browser and test.

## Test the website after every change

Use this checklist:

- [ ] The home page opens.
- [ ] The menu shows the correct names and prices.
- [ ] Each product photo appears.
- [ ] Clicking a product opens its detail page.
- [ ] The Order button opens WhatsApp with the right item and price.
- [ ] The phone number in the footer is correct.
- [ ] The FAQ opens and closes.
- [ ] The site looks right on a phone.
- [ ] The 404 page opens if you visit a wrong link.

## Common mistakes

| Problem | Fix |
| --- | --- |
| Page is blank or the menu disappears | You removed a quote or a comma. Press Ctrl+Z and save again. |
| Price shows `Rs NaN` | The price is not a number. Use `1200`, not `Rs 1,200`. |
| A photo does not appear | The file name or folder path is wrong. Check `assets/img/` and the `img:` line. |
| The product page says "not listed" | The `id` in the link does not match the `id` in `data.js`. |
| The WhatsApp message has no item name | `{name}` or `{price}` was removed from `orderMessage`. |
| Text has strange curly quotes | You used Word. Re-type the quotes in Notepad. |
| The footer still shows the old number | Update the backup links in the HTML files too. |
| FAQ answer is blank | A `null` answer no longer matches the words `deliver` or `visit`. |

## How to undo a mistake

1. If Notepad is still open, press **Ctrl+Z**.
2. Save the file again.
3. Refresh the browser with **Ctrl+F5**.
4. If you already closed the file, restore the copy from your backup.

## Need help from a developer?

Send them:

- the file name you changed;
- the exact text you changed;
- a screenshot of the problem;
- any error message you see.

That is enough for them to find the issue quickly.
