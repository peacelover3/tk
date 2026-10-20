/* ============================================================
   TK SON HALWA · Site renderer
   Reads window.TK (assets/data.js) and fills the static pages.
   No frameworks; works from plain file:// too.
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
      .replace("{price}", fmtPrice(price) + " per kg");
    return "https://wa.me/" + TK.whatsappTo + "?text=" + encodeURIComponent(msg);
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
     HOME (index.html)
     ============================================================ */
  function paintHome() {
    var first = TK.halwas[0];

    /* hero stamp + basics */
    fill(qs("#stamp-price"), fmtPrice(first.price));
    qs("#hero-order").href = waLink(first.name, first.price);
    qs("#bar-order").href = waLink(first.name, first.price);

    fill(qs("#facts"), TK.heroFacts.map(function (f) {
      return "<span>" + esc(f) + "</span>";
    }).join(""));

    fill(qs("#price-note"), esc(TK.priceNote));
    fill(qs("#standin-note"), esc(TK.standinNote));

    /* the price plate: ledger rows, deliberately not cards */
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

    /* batch strip */
    fill(qs("#strip"), TK.strip.map(function (s) {
      return '' +
        '<figure class="strip-cell">' +
          '<span class="stepnum">' + esc(s.n) + '</span>' +
          '<img class="strip-photo" src="' + esc(s.img) + '" alt="' + esc(s.imgAlt) + '" decoding="async">' +
          '<figcaption><div class="strip-title">' + esc(s.title) + '</div><p class="strip-line">' + esc(s.line) + "</p></figcaption>" +
        "</figure>";
    }).join(""));

    /* story */
    var st = TK.story;
    fill(qs("#story-h"), esc(st.title));
    fill(qs("#story-lead"), esc(st.lead));
    fill(qs("#story-body"), esc(st.body));
    fill(qs("#story-board"), st.board.map(function (b) {
      return '<div class="board-row"><span class="board-k">' + esc(b.k) + '</span><span class="board-v">' + esc(b.v) + "</span></div>";
    }).join(""));

    /* steps */
    fill(qs("#steps"), TK.steps.map(function (s) {
      return '' +
        '<div class="step">' +
          '<div class="n" aria-hidden="true">' + esc(s.n) + "</div>" +
          '<div class="t">' + esc(s.t) + "</div>" +
          '<p class="d">' + esc(s.d) + "</p>" +
        "</div>";
    }).join(""));
    qs("#bill-order").href = waLink(first.name, first.price);

    /* quotes */
    fill(qs("#lines"), TK.quotes.map(function (q) {
      return '' +
        '<blockquote class="line">' +
          '<span class="mark" aria-hidden="true">&ldquo;</span>' +
          '<p class="q">' + esc(q.q) + "</p>" +
          '<span class="who">' + esc(q.who) + "</span>" +
        "</blockquote>";
    }).join(""));

    /* FAQ */
    fill(qs("#faq-list"), TK.faq.map(function (f) {
      return '' +
        '<details class="faq-item">' +
          '<summary>' + esc(f.q) + '<span class="x" aria-hidden="true">+</span></summary>' +
          '<p class="a">' + esc(f.a) + "</p>" +
        "</details>";
    }).join(""));

    paintChrome("index", first);
  }

  /* ============================================================
     DETAIL (halwa.html?id=)
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
      var och = qs("#crumbs");
      if (och) och.hidden = true;
      document.title = "TK SON HALWA";
      paintChrome("halwa", null);
      return;
    }

    qs("#notfound").hidden = true;
    detailFill(h);
    paintChrome("halwa", h);
  }

  function detailFill(h) {
    document.title = h.name + " · TK SON HALWA";
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
    qs("#bar-order").href = waLink(h.name, h.price);
    qs("#d-call").href = "tel:+" + TK.whatsappTo;
    qst("#d-call-num", TK.whatsappDisplay);

    var sp = h.specs;
    fill(qs("#d-specs"),
      '<div class="spec-row"><span class="k">Amounts</span><span class="v">' + esc(sp.amounts) + "</span></div>" +
      '<div class="spec-row"><span class="k">Shelf life</span><span class="v">' + esc(sp.shelfLife) + "</span></div>" +
      '<div class="spec-row"><span class="k">Ingredients</span><span class="v">' + esc(sp.ingredients) + "</span></div>" +
      '<div class="spec-row"><span class="k">Packing</span><span class="v">' + esc(sp.packing) + "</span></div>" +
      '<div class="spec-row"><span class="k">Order path</span><span class="v">One WhatsApp message, we confirm the weight and total.</span></div>');

    /* more from the plate */
    fill(qs("#d-others"), TK.halwas.filter(function (x) { return x.id !== h.id; }).map(function (o) {
      return '' +
        '<a class="other-row" href="halwa.html?id=' + esc(o.id) + '">' +
          '<span class="o-name">' + esc(o.name) + "</span>" +
          '<span class="o-price">' + fmtPrice(o.price) + " / kg" + '<span class="arrow" aria-hidden="true">&rarr;</span></span>' +
        "</a>";
    }).join(""));

    /* chips near the name */
    fill(qs("#d-chips"), h.chips.map(function (c) { return '<span class="chip">' + esc(c) + "</span>"; }).join(""));
  }

  function qst(sel, text) { var el = qs(sel); if (el) el.textContent = text; }

  /* ============================================================
     Shared paint once both pages call it
     ============================================================ */
  function paintChrome(page, h) {
    /* footer contact */
    var ftel = qs("#f-tel");
    if (ftel) { ftel.href = "tel:+" + TK.whatsappTo; ftel.textContent = TK.whatsappDisplay; }
    var fhrs = qs("#f-hours");
    if (fhrs) fhrs.textContent = TK.shopHours;
    var fdel = qs("#f-delivery");
    if (fdel) fdel.textContent = TK.deliveryNote;
    var fwa = qs("#f-wa");
    if (fwa) {
      fwa.href = h
        ? waLink(h.name, h.price)
        : "https://wa.me/" + TK.whatsappTo + "?text=" + encodeURIComponent("Hello there, I wanted to order TK SON HALWA from your website. Can I get more details on this?");
    }
    var fy = qs("#f-year");
    if (fy) fy.textContent = new Date().getFullYear();

    /* photo credits */
    var cl = qs("#credits");
    if (cl) {
      fill(cl, TK.credits.map(function (c) {
        return "<li>" + esc(c.file) + ": <a href=\"" + esc(c.url) + "\" target=\"_blank\" rel=\"noopener\">" + esc(c.src) +
          "</a> by " + esc(c.author) + ", " + esc(c.license) + ", from Wikimedia Commons</li>";
      }).join(""));
    }
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    if (body.getAttribute("data-page") === "home") paintHome();
    if (body.getAttribute("data-page") === "halwa") paintDetail();
  });
})();
