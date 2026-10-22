/* ============================================================
   TK SON HALWA · Page renderer
   Reads window.TK from assets/data.js and fills the static pages.
   No frameworks, no build step, works on any static host.
   ============================================================ */
(function () {
  "use strict";
  var TK = window.TK;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtPrice(n) { return "Rs " + Number(n).toLocaleString("en-IN"); }
  function waLink(name, price) {
    var msg = TK.orderMessage
      .replace("{name}", name)
      .replace("{price}", fmtPrice(price));
    return "https://wa.me/" + TK.whatsappTo + "?text=" + encodeURIComponent(msg);
  }
  function genericLink() {
    return "https://wa.me/" + TK.whatsappTo + "?text=" + encodeURIComponent(TK.genericMessage);
  }
  function byId(id) {
    for (var i = 0; i < TK.halwas.length; i++) {
      if (TK.halwas[i].id === id) return TK.halwas[i];
    }
    return null;
  }
  function fill(el, html) { if (el) el.innerHTML = html; }
  function qs(sel) { return document.querySelector(sel); }

  /* ============================================================
     HOME
     ============================================================ */
  function paintHome() {
    var first = TK.halwas[0];

    fill(qs("#stamp-price"), fmtPrice(first.price));
    qs("#hero-order").href = waLink(first.name, first.price);
    if (qs("#bar-order")) qs("#bar-order").href = genericLink();

    fill(qs("#facts"), TK.heroFacts.map(function (f) {
      return "<span>" + esc(f) + "</span>";
    }).join(""));

    fill(qs("#price-note"), esc(TK.priceNote));

    /* Menu rows */
    fill(qs("#plate-rows"), TK.halwas.map(function (h, i) {
      var pad = (i + 1) < 10 ? "0" + (i + 1) : "" + (i + 1);
      return '' +
        '<article class="plate-row">' +
          '<div class="row-num" aria-hidden="true">' + pad + '</div>' +
          '<a class="row-photo" href="halwa.html?id=' + esc(h.id) + '" aria-label="' + esc(h.name) + ', details">' +
            '<img class="row-photo-img" src="' + esc(h.img) + '" alt="' + esc(h.imgAlt) + '" width="' + h.imgW + '" height="' + h.imgH + '" loading="lazy" decoding="async">' +
          '</a>' +
          '<div class="row-info">' +
            '<h3 class="row-name"><a href="halwa.html?id=' + esc(h.id) + '">' + esc(h.name) + '</a></h3>' +
            '<div class="chips">' + h.chips.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join("") + '</div>' +
          '</div>' +
          '<p class="row-desc">' + esc(h.short) + '</p>' +
          '<div class="row-price">' +
            '<span class="price">' + fmtPrice(h.price) + '</span>' +
            '<span class="per">per kilo</span>' +
            '<div class="row-links">' +
              '<a class="order-link" href="' + waLink(h.name, h.price) + '" aria-label="Order ' + esc(h.name) + ' on WhatsApp">Order on WhatsApp</a>' +
              '<a class="details-link" href="halwa.html?id=' + esc(h.id) + '">Details</a>' +
            '</div>' +
          '</div>' +
        '</article>';
    }).join(""));

    /* Batch strip */
    fill(qs("#strip"), TK.strip.map(function (s) {
      return '' +
        '<figure class="strip-cell">' +
          '<span class="stepnum">' + esc(s.n) + '</span>' +
          '<img class="strip-photo" src="' + esc(s.img) + '" alt="' + esc(s.imgAlt) + '" width="' + s.imgW + '" height="' + s.imgH + '" loading="lazy" decoding="async">' +
          '<figcaption><div class="strip-title">' + esc(s.title) + '</div><p class="strip-line">' + esc(s.line) + "</p></figcaption>" +
        "</figure>";
    }).join(""));

    /* Story */
    var st = TK.story;
    fill(qs("#story-h"), esc(st.title));
    fill(qs("#story-lead"), esc(st.lead));
    fill(qs("#story-body"), esc(st.body));
    fill(qs("#story-board"), st.board.map(function (b) {
      return '<div class="board-row"><span class="board-k">' + esc(b.k) + '</span><span class="board-v">' + esc(b.v) + "</span></div>";
    }).join(""));

    /* Order steps */
    fill(qs("#steps"), TK.steps.map(function (s) {
      return '' +
        '<div class="step">' +
          '<div class="n" aria-hidden="true">' + esc(s.n) + "</div>" +
          '<div class="t">' + esc(s.t) + "</div>" +
          '<p class="d">' + esc(s.d) + "</p>" +
        "</div>";
    }).join(""));
    qs("#bill-order").href = genericLink();

    /* FAQ */
    fill(qs("#faq-list"), TK.faq.map(function (f) {
      return '' +
        '<details class="faq-item">' +
          '<summary>' + esc(f.q) + '<span class="x" aria-hidden="true">+</span></summary>' +
          '<p class="a">' + esc(f.a) + "</p>" +
        "</details>";
    }).join(""));

    paintChrome("home", null);
  }

  /* ============================================================
     DETAIL PAGE
     ============================================================ */
  function paintDetail() {
    var params = new URLSearchParams(window.location.search);
    var h = byId(params.get("id"));

    if (!h) {
      var nf = qs("#notfound");
      if (nf) nf.hidden = false;
      var grid = qs("#detail-grid");
      if (grid) grid.hidden = true;
      var ob = qs("#others-block");
      if (ob) ob.hidden = true;
      var crumbs = qs("#crumbs");
      if (crumbs) crumbs.hidden = true;
      document.title = "Halwa not found | TK SON HALWA";
      paintChrome("halwa", null);
      return;
    }

    qs("#notfound").hidden = true;
    detailFill(h);
    paintChrome("halwa", h);
  }

  function detailFill(h) {
    document.title = h.name + " | TK SON HALWA";
    qst("#crumb-name", h.name);
    fill(qs("#d-name"), esc(h.name));
    fill(qs("#d-long"), esc(h.long));

    var ph = qs("#d-photo");
    ph.innerHTML =
      '<img src="' + esc(h.img) + '" alt="' + esc(h.imgAlt) + '" width="' + h.imgW + '" height="' + h.imgH + '"' +
      ' style="aspect-ratio:' + h.imgW + " / " + h.imgH + '" loading="eager" decoding="async">';
    qst("#d-stamp", fmtPrice(h.price));
    qst("#d-per-price", fmtPrice(h.price));
    qs("#d-order").href = waLink(h.name, h.price);
    qs("#bar-order").href = genericLink();
    qs("#d-call").href = "tel:+" + TK.whatsappTo;
    qst("#d-call-num", TK.whatsappDisplay);

    var sp = h.specs;
    fill(qs("#d-specs"),
      '<div class="spec-row"><span class="k">Amounts</span><span class="v">' + esc(sp.amounts) + "</span></div>" +
      '<div class="spec-row"><span class="k">Shelf life</span><span class="v">' + esc(sp.shelfLife) + "</span></div>" +
      '<div class="spec-row"><span class="k">Ingredients</span><span class="v">' + esc(sp.ingredients) + "</span></div>" +
      '<div class="spec-row"><span class="k">Packing</span><span class="v">' + esc(sp.packing) + "</span></div>" +
      '<div class="spec-row"><span class="k">Order path</span><span class="v">One WhatsApp message. We confirm the weight and total.</span></div>');

    /* More halwas */
    fill(qs("#d-others"), TK.halwas.filter(function (x) { return x.id !== h.id; }).map(function (o) {
      return '' +
        '<a class="other-row" href="halwa.html?id=' + esc(o.id) + '">' +
          '<span class="o-name">' + esc(o.name) + "</span>" +
          '<span class="o-price">' + fmtPrice(o.price) + " / kg" + '<span class="arrow" aria-hidden="true">&rarr;</span></span>' +
        "</a>";
    }).join(""));

    fill(qs("#d-chips"), h.chips.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join(""));
  }

  function qst(sel, text) { var el = qs(sel); if (el) el.textContent = text; }

  /* ============================================================
     SHARED CHROME AND STRUCTURED DATA
     ============================================================ */
  function paintChrome(page, h) {
    var bar = qs("#bar-order");
    if (bar) bar.href = h ? waLink(h.name, h.price) : genericLink();

    var nfOrder = qs("#nf-order");
    if (nfOrder) nfOrder.href = genericLink();

    var ftel = qs("#f-tel");
    if (ftel) { ftel.href = "tel:+" + TK.whatsappTo; ftel.textContent = TK.whatsappDisplay; }
    var fhrs = qs("#f-hours");
    if (fhrs) fhrs.textContent = TK.shopHours;
    var fdel = qs("#f-delivery");
    if (fdel) fdel.textContent = TK.deliveryNote;
    var fwa = qs("#f-wa");
    if (fwa) fwa.href = h ? waLink(h.name, h.price) : genericLink();
    var fy = qs("#f-year");
    if (fy) fy.textContent = new Date().getFullYear();

    injectStructuredData();
  }

  function injectStructuredData() {
    var old = document.getElementById("site-structured-data");
    if (old) old.remove();

    var assetBase = window.location.href.split("#")[0].split("?")[0];
    var prices = TK.halwas.map(function (h) { return Number(h.price); });
    var data = {
      "@context": "https://schema.org",
      "@type": "Bakery",
      "name": TK.brand.name,
      "description": "Family-run counter selling Multani-style soan halwa by the kilo.",
      "telephone": TK.whatsappDisplay,
      "priceRange": fmtPrice(Math.min.apply(null, prices)) + " to " + fmtPrice(Math.max.apply(null, prices)) + " per kg",
      "servesCuisine": "Pakistani",
      "paymentAccepted": "Cash",
      "currenciesAccepted": "PKR",
      "url": new URL("index.html", assetBase).href,
      "image": new URL("assets/img/halwa-hero.jpg", assetBase).href,
      "hasMenu": {
        "@type": "Menu",
        "hasMenuSection": [{
          "@type": "MenuSection",
          "name": "Halwa by the kilo",
          "hasMenuItem": TK.halwas.map(function (h) {
            return {
              "@type": "MenuItem",
              "name": h.name,
              "description": h.short,
              "image": new URL(h.img, assetBase).href,
              "offers": {
                "@type": "Offer",
                "price": Number(h.price),
                "priceCurrency": "PKR",
                "availability": "https://schema.org/InStock"
              }
            };
          })
        }]
      }
    };

    var script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "site-structured-data";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    if (page === "home") paintHome();
    else if (page === "halwa") paintDetail();
    else paintChrome(page || "static", null);
  });
})();
