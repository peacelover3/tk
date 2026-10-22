/* ============================================================
   TK SON HALWA · Site content
   ------------------------------------------------------------
   Most shop details live here: menu names, prices, photos,
   phone numbers, opening hours and answers to common questions.

   Edit only the text between the quotes. Keep the commas and
   braces as they are, then save the file and refresh the page.
   GUIDE.md explains every field in plain language.
   ============================================================ */

window.TK = {

  /* ---------- Brand ---------- */
  brand: {
    name: "TK SON HALWA",
    kicker: "Multani style, made daily"
  },

  /* ---------- WhatsApp ordering ----------
     whatsappTo: country code + number, digits only.
     whatsappDisplay: the number shown to customers.
     orderMessage: {name} and {price} are replaced automatically.
     Keep those two placeholders exactly as they are. */
  whatsappTo: "923365505467",
  whatsappDisplay: "+92 336 5505467",
  orderMessage: "Hello, I want to order {name} from the website. It is listed at {price} per kg. Please confirm availability and delivery.",
  genericMessage: "Hello, I want to order TK SON HALWA. Please share the menu, prices and delivery details.",

  /* ---------- Small print ---------- */
  priceNote: "All prices are per kilogram in Pakistani rupees. We confirm the final weight, delivery charge and total on WhatsApp before packing.",
  deliveryNote: "We deliver in our area and nearby towns. The exact charge depends on your address, and we agree it in the chat before sending.",
  shopHours: "Open daily, 9:00 am to 9:00 pm",

  /* ---------- Hero facts ---------- */
  heroFacts: [
    "Made every morning",
    "Sold by the kilo",
    "Order on WhatsApp"
  ],

  /* ---------- The halwas ----------
     price is per kilogram in PKR.
     id must be unique and stay the same once links are shared.
     img points to a file inside assets/img.
     imgW and imgH must match the real photo size. */
  halwas: [
    {
      id: "walnut-soan",
      name: "Multani Walnut Soan",
      short: "A thick Multani-style disc with walnut in every cut.",
      long: "We pull the soan thin, layer it, and finish it in desi ghee with plenty of walnut. It is made in small batches most mornings and is usually still warm when the first orders go out.",
      price: 1200,
      chips: ["Walnut", "Almond", "Desi ghee"],
      img: "assets/img/halwa-hero.jpg",
      imgW: 1200,
      imgH: 1202,
      imgAlt: "Round walnut-topped soan halwa disc seen from above",
      specs: {
        amounts: "Half-kilo and one-kilo packs. For larger orders, message us.",
        shelfLife: "Tastes best within a week. Keep it sealed in a cool, dry place.",
        ingredients: "Wheat, sugar, desi ghee, walnut, almond.",
        packing: "Wrapped per half kilo, boxed for travel."
      }
    },
    {
      id: "pista-soan",
      name: "Pista Badam Soan",
      short: "A softer, glossier soan with pista and almond folded through.",
      long: "This one is cooked a little longer so it stays soft in the middle. Pista and almond go in at the end, which gives it the darker, glossier finish of the old Multan style.",
      price: 950,
      chips: ["Pista", "Almond", "Soft set"],
      img: "assets/img/halwa-multani.jpg",
      imgW: 1400,
      imgH: 1062,
      imgAlt: "Glossy soan piece topped with pista and almond flakes",
      specs: {
        amounts: "Half-kilo and one-kilo packs. For larger orders, message us.",
        shelfLife: "Tastes best within four to five days. Keep it sealed and cool.",
        ingredients: "Wheat, sugar, desi ghee, pista, almond.",
        packing: "Wrapped per half kilo, boxed on request."
      }
    },
    {
      id: "classic-papdi",
      name: "Classic Soan Papdi",
      short: "Light, flaky golden squares for everyday tea.",
      long: "Our everyday soan papdi. Gram flour is cooked into fine flakes, layered, and cut into squares. It stays light and crisp for days when kept sealed.",
      price: 500,
      chips: ["Besan", "Flaky", "Desi ghee"],
      img: "assets/img/halwa-papdi.jpg",
      imgW: 1026,
      imgH: 909,
      imgAlt: "Golden flaky soan papdi squares with almond slivers",
      specs: {
        amounts: "Half-kilo and one-kilo packs. For larger orders, message us.",
        shelfLife: "About three weeks in a sealed pack.",
        ingredients: "Gram flour, wheat, sugar, desi ghee.",
        packing: "Wrapped per half kilo."
      }
    },
    {
      id: "cream-patisa",
      name: "Cream Patisa",
      short: "Soft cream-coloured cubes with cardamom.",
      long: "A softer bite next to the classic. The cubes are cream-coloured, lightly set, and finished with cardamom. They are a common choice for office trays and family visits.",
      price: 550,
      chips: ["Cardamom", "Soft bite"],
      img: "assets/img/halwa-papdi-plate.jpg",
      imgW: 1200,
      imgH: 800,
      imgAlt: "Cream-coloured patisa cubes with cardamom on a plate",
      specs: {
        amounts: "Half-kilo and one-kilo packs. For larger orders, message us.",
        shelfLife: "About two weeks in a sealed pack.",
        ingredients: "Gram flour, sugar, desi ghee, cardamom.",
        packing: "Half-kilo folds in plain packs."
      }
    },
    {
      id: "chocolate-papdi",
      name: "Chocolate Soan Papdi",
      short: "Flaky soan with cocoa, cashew and raisin.",
      long: "The same flaky layers with cocoa worked through, then topped with cashew and raisin. It is the one children reach for first.",
      price: 700,
      chips: ["Cocoa", "Cashew", "Raisin"],
      img: "assets/img/halwa-chocolate.jpg",
      imgW: 1070,
      imgH: 590,
      imgAlt: "Chocolate and cream soan papdi pieces with cashew and raisin",
      specs: {
        amounts: "Half-kilo and one-kilo packs. For larger orders, message us.",
        shelfLife: "About two weeks in a sealed pack.",
        ingredients: "Gram flour, sugar, desi ghee, cocoa, cashew, raisin.",
        packing: "Wrapped per half kilo."
      }
    }
  ],

  /* ---------- Batch strip ----------
     Each item is one photo in the "From the copper degh" row.
     Keep captions short and close to what the photo shows. */
  strip: [
    {
      n: "01",
      title: "Leaving the degh",
      line: "Cooked slowly in desi ghee until it comes together.",
      img: "assets/img/halwa-multani.jpg",
      imgW: 1400,
      imgH: 1062,
      imgAlt: "Glossy fresh soan topped with dry fruit"
    },
    {
      n: "02",
      title: "Pulled into flakes",
      line: "Layered and pulled thin enough to hold light.",
      img: "assets/img/halwa-papdi.jpg",
      imgW: 1026,
      imgH: 909,
      imgAlt: "Golden flaky soan layers close up"
    },
    {
      n: "03",
      title: "Cut for the tray",
      line: "Cut into squares and finished by hand.",
      img: "assets/img/halwa-papdi-plate.jpg",
      imgW: 1200,
      imgH: 800,
      imgAlt: "Cream patisa cubes cut and arranged on a plate"
    },
    {
      n: "04",
      title: "Weighed and wrapped",
      line: "Every order is weighed and packed fresh.",
      img: "assets/img/halwa-hero.jpg",
      imgW: 1200,
      imgH: 1202,
      imgAlt: "Fresh walnut soan halwa ready to be weighed and packed"
    }
  ],

  /* ---------- How to order ---------- */
  steps: [
    {
      n: "01",
      t: "Choose your halwa",
      d: "Check the menu and note the quantity you need."
    },
    {
      n: "02",
      t: "Send a WhatsApp message",
      d: "Tap Order and the message opens ready to send."
    },
    {
      n: "03",
      t: "We confirm your order",
      d: "We reply with the weight, delivery charge and total."
    },
    {
      n: "04",
      t: "Receive your halwa",
      d: "Pay cash on delivery, or as agreed in the chat."
    }
  ],

  /* ---------- FAQ ----------
     An answer set to null is filled from the lines above. */
  faq: [
    {
      q: "How fresh is the halwa?",
      a: "We make one batch each morning and sell it through the day. If it runs out, we take orders for the next morning. Keep the packs sealed in a cool, dry place."
    },
    {
      q: "Do you deliver, and what is the charge?",
      a: null
    },
    {
      q: "Can I order in bulk for Eid or a wedding?",
      a: "Yes. Message us the flavour, the number of kilos and the date. We will confirm what we can make and give you a total."
    },
    {
      q: "How do I pay?",
      a: "Cash on delivery is usual. If you want another arrangement, ask us on WhatsApp first."
    },
    {
      q: "Can I visit the shop?",
      a: null
    }
  ],

  /* ---------- Story section ---------- */
  story: {
    title: "Our shop",
    lead: "TK SON HALWA is a family-run counter. We make Multani-style soan halwa in a copper degh each morning and sell it by the kilo.",
    body: "We do not keep stock in cold storage. When the day's batch is finished, we take orders for the next morning. Message us and we will tell you what is ready.",
    board: [
      { k: "Degh", v: "one, copper" },
      { k: "Batch", v: "every morning" },
      { k: "Sold by", v: "the kilo" },
      { k: "Price", v: "set per kilo" },
      { k: "Packing", v: "fresh wrap and boxes" },
      { k: "Stock", v: "made fresh, sold same day" }
    ]
  }
};

/* Fill the two FAQ answers that reuse the shop details above. */
(function () {
  TK.faq.forEach(function (item) {
    if (item.a !== null) return;
    if (item.q.indexOf("deliver") > -1) {
      item.a = TK.deliveryNote + " We confirm the charge before sending.";
    }
    if (item.q.indexOf("visit") > -1) {
      item.a = "You can visit during counter hours: " + TK.shopHours + ". Message us first if you need a large order.";
    }
  });
})();
