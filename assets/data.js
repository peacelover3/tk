/* ============================================================
   TK SON HALWA · Site data
   ------------------------------------------------------------
   Everything a small shop normally needs to edit lives in this
   file: prices, names, photos, phone number, message template,
   delivery line, hours, FAQ. Change the text between the
   quotes and the whole site follows. No coding needed.
   ============================================================ */

window.TK = {

  /* ---------- Brand ---------- */
  brand: {
    name: "TK SON HALWA",
    kicker: "Soan halwa, Multani style"
  },

  /* ---------- WhatsApp ordering ----------
     The number below is in international format with no plus or
     spaces so wa.me can use it. Display version is what humans
     see. The message template: {name} and {price} are filled in
     automatically. Change the words only if you must; keep the
     {name} and {price} parts, or the order message breaks. */
  whatsappTo: "923365505467",
  whatsappDisplay: "+92 336 5505467",
  orderMessage: "Hello there, I wanted to order {name} from your website, it's {price} on website. Can I get more details on this?",

  /* ---------- Small print the visitor reads ----------
     These lines are drafts: replace with your real wording. */
  priceNote: "All prices are per kilogram, in Pakistani rupees. The final count is confirmed on WhatsApp before anything is packed.",
  deliveryNote: "We deliver around our own area and nearby, and we agree on the exact charge in the chat. Address and date go on WhatsApp.",
  shopHours: "Open daily, 9 in the morning till 9 at night",
  standinNote: "Station photos for now: our own degh shots replace these through data.js.",

  /* ---------- Hero facts (small caps line under the hero) ---------- */
  heroFacts: [
    "Made every morning",
    "Sold by the kilo",
    "Ordered in one chat"
  ],

  /* ---------- The halwas (menu + detail pages) ----------
     price is per kilogram in PKR.
     img points at the photo; the owner swaps the filename here. */
  halwas: [
    {
      id: "walnut-soan",
      name: "Multani Walnut Soan",
      short: "Thick walnut through every cut, the Multan-style disc.",
      long: "The Multani-style disc: pulled thin, layered, and thick with walnut, finished in desi ghee so the flakes stay separate when it is cut. One degh of this goes out most mornings, and it sells while it is still warm.",
      price: 1200,
      chips: ["Walnut", "Almond", "Desi ghee"],
      img: "assets/img/halwa-hero.jpg",
      imgW: 1200,
      imgH: 1202,
      imgAlt: "Round walnut-topped soan halwa disc seen from above",
      specs: {
        amounts: "Half kilo and one kilo packs; bigger orders by message.",
        shelfLife: "Tastes best within a week of the pull. Keep it sealed, somewhere cool and dry.",
        ingredients: "Wheat, sugar, desi ghee, walnut, almond.",
        packing: "Wrapped per half kilo, boxed for travel."
      }
    },
    {
      id: "pista-soan",
      name: "Pista Badam Soan",
      short: "The wet-style one, glossy with pista and almond.",
      long: "Cooked down until it stays slightly wet, then folded through with pista and almond. It looks different from dry soan papdi because it is: darker, glossier, and closer to the old Multan finish.",
      price: 950,
      chips: ["Pista", "Almond", "Wet style"],
      img: "assets/img/halwa-multani.jpg",
      imgW: 1400,
      imgH: 1062,
      imgAlt: "Glossy soan piece dressed with pista and almond flakes",
      specs: {
        amounts: "Half kilo and one kilo packs; bigger orders by message.",
        shelfLife: "Tastes best within 4 to 5 days. Cool, dry place, sealed pack.",
        ingredients: "Wheat, sugar, desi ghee, pista, almond.",
        packing: "Wrapped per half kilo, boxed on request."
      }
    },
    {
      id: "classic-papdi",
      name: "Classic Soan Papdi",
      short: "Everyday golden flakes, light and flaky, in half-kilo wraps.",
      long: "The household one. Besan cooked into flakes, layered, and cut into squares. It pulls apart in threads the way you hope, and it stays light even after days.",
      price: 500,
      chips: ["Besan", "Flaky", "Desi ghee"],
      img: "assets/img/halwa-papdi.jpg",
      imgW: 1026,
      imgH: 909,
      imgAlt: "Golden flaky soan papdi squares with almond slivers",
      specs: {
        amounts: "Half kilo and one kilo packs; bigger orders by message.",
        shelfLife: "Sealed, it keeps about three weeks.",
        ingredients: "Gram flour (besan), wheat, sugar, desi ghee.",
        packing: "Wrapped per half kilo."
      }
    },
    {
      id: "cream-patisa",
      name: "Cream Patisa",
      short: "Soft cream-coloured cubes with cardamom through the fold.",
      long: "A softer bake beside the classic. Cream-coloured, cardamom folded through, cut into cubes that disappear on trays at offices and hospital visits.",
      price: 550,
      chips: ["Cardamom", "Soft bite"],
      img: "assets/img/halwa-papdi-plate.jpg",
      imgW: 1200,
      imgH: 800,
      imgAlt: "Cream-coloured patisa cubes with cardamom served on a plate",
      specs: {
        amounts: "Half kilo and one kilo packs; bigger orders by message.",
        shelfLife: "Sealed, it keeps about two weeks.",
        ingredients: "Gram flour, sugar, desi ghee, cardamom.",
        packing: "Half-kilo folds in plain packs."
      }
    },
    {
      id: "chocolate-papdi",
      name: "Chocolate Soan Papdi",
      short: "The flaky one with a cocoa fold, cashew on top.",
      long: "Usual flaky layers with a cocoa fold worked through, cashew and raisin set on top. For the young cousins who skip mithai until chocolate is offered.",
      price: 700,
      chips: ["Cocoa", "Cashew", "Raisin"],
      img: "assets/img/halwa-chocolate.jpg",
      imgW: 1280,
      imgH: 853,
      imgAlt: "Three soan papdi pieces: chocolate, yellow and cream with cashew",
      specs: {
        amounts: "Half kilo and one kilo packs; bigger orders by message.",
        shelfLife: "Sealed, it keeps about two weeks.",
        ingredients: "Gram flour, sugar, desi ghee, cocoa, cashew, raisin.",
        packing: "Wrapped per half kilo."
      }
    }
  ],

  /* ---------- Batch strip (morning to plate) ----------
     Photos are stand-ins; swap the filenames when your own shots
     are ready. Keep the captions close to what the photo shows. */
  strip: [
    {
      n: "01",
      title: "Leaving the degh",
      line: "Cooked down in ghee until it half glows.",
      img: "assets/img/halwa-multani.jpg",
      imgAlt: "Glossy fresh soan dressed with dry fruit"
    },
    {
      n: "02",
      title: "Pulled into flakes",
      line: "Layers pulled thin enough to hold light.",
      img: "assets/img/halwa-papdi.jpg",
      imgAlt: "Golden flaky soan layers close up"
    },
    {
      n: "03",
      title: "Cut for the tray",
      line: "Blocks cut plain, cardamom through the fold.",
      img: "assets/img/halwa-papdi-plate.jpg",
      imgAlt: "Cream patisa cubes cut and dressed on a plate"
    },
    {
      n: "04",
      title: "Priced per kilo",
      line: "Weighed, wrapped, and the tag says what it costs.",
      img: "assets/img/halwa-stack.jpg",
      imgAlt: "Wrapped soan papdi blocks stacked at a counter with a per-kg price sign"
    }
  ],

  /* ---------- How to order (four steps) ---------- */
  steps: [
    {
      n: "01",
      t: "Walk the price plate",
      d: "Scroll the list above, pick your halwa and your kilo."
    },
    {
      n: "02",
      t: "Tap order",
      d: "WhatsApp opens with your choice already typed. Send it."
    },
    {
      n: "03",
      t: "We confirm the count",
      d: "Weight, delivery charge and total agreed in the chat."
    },
    {
      n: "04",
      t: "Halwa out the door",
      d: "You pay when it arrives, cash or whatever we agreed."
    }
  ],

  /* ---------- Customer lines (drafts: swap for real notes) ---------- */
  quotes: [
    {
      q: "Walnut soan that tastes like the shops we remember from Multan, and it travels without falling apart.",
      who: "Atif, regular customer"
    },
    {
      q: "Five kilos for Eid, packed proper and delivered on time. The whole shop lives in one WhatsApp chat.",
      who: "Sana, Eid order"
    },
    {
      q: "The chocolate one never survives till morning.",
      who: "Bilal, family dinners"
    }
  ],

  /* ---------- FAQ ---------- */
  faq: [
    {
      q: "How fresh is the halwa I get?",
      a: "The counter sells through the day's degh before anything sits overnight. Classic soan papdi keeps about three weeks in a sealed pack; the walnut and pista soan taste best inside the first week. Keep it somewhere cool and dry."
    },
    {
      q: "Do you deliver, and what is the charge?",
      a: null /* filled with deliveryNote below */
    },
    {
      q: "Can I order in bulk for Eid or a wedding?",
      a: "Yes. Message the flavour, the number of kilos and the date. We confirm what the week's pulls can cover and quote you a total."
    },
    {
      q: "How do I pay?",
      a: "Cash on delivery is the usual. Anything else gets agreed on WhatsApp first."
    },
    {
      q: "Can I visit the counter?",
      a: null /* filled with shopHours below */
    }
  ],

  /* ---------- Story section ---------- */
  story: {
    title: "The shop",
    lead: "TK SON HALWA is a small family counter that keeps one copper degh of soan halwa going every morning. The recipe is Multani-style: the same pull, the same cut, the same price written per kilo.",
    body: "Nothing waits in a cold store. If today's stock runs out, we say so and book you with the next morning's pull. That honesty is the whole shop.",
    board: [
      { k: "Degh", v: "one, copper" },
      { k: "Batch", v: "before dawn" },
      { k: "Sold by", v: "the kilo" },
      { k: "Price", v: "printed, no games" },
      { k: "Packing", v: "fresh wrap, boxes for travel" },
      { k: "Stock", v: "whatever today's pull allows" }
    ]
  },

  /* ---------- Photo credits (stand-ins) ----------
     These open-license photos from Wikimedia Commons carry the
     real orders until the owner's photos replace them. Keep the
     credits visible while any stand-in is on the site. */
  credits: [
    { file: "halwa-hero.jpg", src: "Sohan Halwa.JPG", author: "Miansari66", license: "public domain", url: "https://commons.wikimedia.org/wiki/File:Sohan_Halwa.JPG" },
    { file: "halwa-multani.jpg", src: "Multani-sohan-halwa.jpg", author: "Bhutta1984", license: "CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Multani-sohan-halwa.jpg" },
    { file: "halwa-papdi.jpg", src: "Sohan papdi.jpg", author: "Pamri", license: "public domain", url: "https://commons.wikimedia.org/wiki/File:Sohan_papdi.jpg" },
    { file: "halwa-papdi-plate.jpg", src: "Soan sohan papdi India Festive Sweets.jpg", author: "Abigail Batchelder", license: "CC BY 2.0", url: "https://commons.wikimedia.org/wiki/File:Soan_sohan_papdi_India_Festive_Sweets.jpg" },
    { file: "halwa-chocolate.jpg", src: "Chocolate and vanila Sohan Papdi.jpg", author: "Reshmi R S", license: "CC BY-SA 4.0", url: "https://commons.wikimedia.org/wiki/File:Chocolate_and_vanila_Sohan_Papdi.jpg" },
    { file: "halwa-stack.jpg", src: "Sohan_papdi2.JPG", author: "Randhirreddy", license: "GFDL and CC BY-SA 3.0", url: "https://commons.wikimedia.org/wiki/File:Sohan_papdi2.JPG" }
  ]
};

/* Resolve the FAQ entries whose answers come from the draft lines above. */
(function () {
  TK.faq.forEach(function (item) {
    if (item.a === null) {
      if (item.q.indexOf("deliver") > -1) item.a = TK.deliveryNote + " Distance decides the charge, and we agree on it in the chat before sending.";
      if (item.q.indexOf("visit") > -1) item.a = "Walk in during counter hours: " + TK.shopHours + ". For anything else, the chat is fastest.";
    }
  });
})();
