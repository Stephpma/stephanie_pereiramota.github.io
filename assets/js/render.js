/* Affiche les contenus de content/site.js et content/projects.js dans les pages. */
(function () {
  var S = window.SITE;
  var P = window.PROJECTS || [];
  var i18n = window.I18N;
  var t = i18n.t, ui = i18n.ui;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel) { return document.querySelector(sel); }
  function fill(sel, html) { var el = $(sel); if (el) el.innerHTML = html; }

  var ICONS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    pin: '<path d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.6 2.5L16 9.5"/>',
    pending: '<circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/><path d="M12 8v4l2.5 1.5"/>',
    play: '<path d="M8 5.5v13l11-6.5z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  function icon(name) {
    return '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICONS[name] + "</svg>";
  }

  function ledgerRows(rows) {
    return rows.map(function (r) {
      return '<li><span class="lbl">' + esc(r[0]) + '</span><span class="dots" aria-hidden="true"></span><span class="val">' + esc(r[1]) + "</span></li>";
    }).join("");
  }
  function ledger(rows, extraClass) {
    return '<ul class="ledger ' + (extraClass || "") + '">' + ledgerRows(rows) + "</ul>";
  }

  /* ---------------- Accueil ---------------- */
  function renderHome() {
    fill("#folio-rows", ledgerRows(S.folio.map(function (f) { return [t(f.label), t(f.value)]; })));

    fill("#register", S.timeline.map(function (e) {
      var note = e.note ? ' <span class="note">· ' + esc(t(e.note)) + "</span>" : "";
      return '<li class="entry" data-kind="' + e.kind + '">' +
        '<span class="keytag">' + esc(e.years) + "</span>" +
        '<span class="node" aria-hidden="true"></span>' +
        '<div class="entry-body"><h3 class="entry-role">' + esc(t(e.chapter || e.role)) + "</h3>" +
        (e.chapter ? '<p class="entry-job">' + esc(t(e.role)) + "</p>" : "") +
        '<p class="entry-place">' + esc(t(e.place)) + note + "</p>" +
        '<ul class="entry-points">' + e.points.map(function (p) { return "<li>" + esc(t(p)) + "</li>"; }).join("") + "</ul></div></li>";
    }).join(""));

    fill("#bridge-list", S.bridge.map(function (b) {
      return '<li class="bridge-item"><h3 class="bridge-row">' +
        '<span class="bridge-from">' + esc(t(b.from)) + "</span>" +
        '<span class="dots" aria-hidden="true"></span>' +
        '<span class="bridge-to">' + esc(t(b.to)) + "</span></h3>" +
        '<p class="bridge-text">' + esc(t(b.text)) + "</p></li>";
    }).join(""));

    fill("#skills-grid", S.skills.map(function (s) {
      return '<div class="skill-col"><h3>' + esc(t(s.title)) + "</h3><ul>" +
        s.items.map(function (i) { return "<li>" + esc(t(i)) + "</li>"; }).join("") + "</ul></div>";
    }).join(""));
    fill("#tools", S.tools.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join(""));
    fill("#languages", ledgerRows(S.languages.map(function (l) { return [t(l.name), t(l.level)]; })));

    fill("#project-list", P.map(function (p) {
      var url = i18n.href("projet.html?id=" + encodeURIComponent(p.id));
      return '<article class="project">' +
        '<a class="project-media" href="' + url + '" tabindex="-1" aria-hidden="true"><img src="' + esc(p.cover) + '" alt="" loading="lazy" width="1600" height="735"></a>' +
        "<div>" +
        "<h3>" + esc(p.title) + ' <span class="project-year">' + esc(p.year) + "</span></h3>" +
        '<p class="project-tagline">' + esc(t(p.tagline)) + "</p>" +
        '<p class="project-summary">' + esc(t(p.summary)) + "</p>" +
        '<ul class="tags">' + p.tags.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" +
        '<a class="btn btn-primary" href="' + url + '">' + esc(ui("projects.open")) + '<span class="visually-hidden"> : ' + esc(p.title) + "</span> " + icon("arrow") + "</a>" +
        "</div></article>";
    }).join(""));

    fill("#edu-list", S.education.map(function (e) {
      return '<li class="edu-item"><span class="edu-years">' + esc(e.years) + "</span><div>" +
        '<h3 class="edu-title">' + esc(t(e.title)) + "</h3>" +
        '<p class="edu-school">' + esc(e.school) + "</p>" +
        (e.note ? '<p class="edu-note">' + esc(t(e.note)) + "</p>" : "") + "</div></li>";
    }).join(""));
    fill("#certs", ledgerRows(S.certifications.map(function (c) { return [t(c.label), c.years]; })));
  }

  /* ---------------- Étude de cas ---------------- */
  function videoHTML(m, wide) {
    var title = esc(t(m.title));
    var poster = '<img src="' + esc(m.poster) + '" alt="" loading="lazy" width="1600" height="735">';
    var inner;
    if (m.file) {
      inner = poster + '<button type="button" class="video-play" data-file="' + esc(m.file) + '" data-poster="' + esc(m.poster) + '" aria-label="' + esc(ui("video.play")) + " : " + title + '">' +
        '<span class="pill">' + icon("play") + esc(ui("video.play")) + "</span></button>";
    } else if (m.youtube) {
      inner = poster + '<button type="button" class="video-play" data-yt="' + esc(m.youtube) + '" aria-label="' + esc(ui("video.play")) + " : " + title + '">' +
        '<span class="pill">' + icon("play") + esc(ui("video.play")) + "</span></button>";
    } else {
      inner = poster + '<div class="video-soon"><span>' + icon("clock") + esc(ui("video.soon")) + "</span></div>";
    }
    return '<figure class="video' + (wide ? " is-wide" : "") + '"><div class="video-frame">' + inner + "</div>" +
      '<figcaption><span class="video-meta"><span>' + title + '</span><span class="dur">' + esc(m.duration || "") + "</span></span>" +
      (m.youtube && !m.file ? '<span class="video-note">' + esc(ui("video.consent")) + "</span>" : "") + "</figcaption></figure>";
  }

  function imageHTML(m) {
    return '<figure class="shot"><a href="' + esc(m.src) + '" data-lightbox aria-label="' + esc(ui("lightbox.open")) + " : " + esc(t(m.alt)) + '">' +
      '<img src="' + esc(m.src) + '" alt="' + esc(t(m.alt)) + '" loading="lazy"></a>' +
      (m.caption ? "<figcaption>" + esc(t(m.caption)) + "</figcaption>" : "") + "</figure>";
  }

  function renderCase() {
    var id = new URLSearchParams(location.search).get("id");
    var p = P.filter(function (x) { return x.id === id; })[0] || (id ? null : P[0]);
    var main = $("#case");
    if (!p) {
      main.innerHTML = '<section class="not-found wrap"><h1>' + esc(ui("case.notFound")) + '</h1><p style="margin-top:1.5rem"><a class="btn btn-primary" href="' + i18n.href("index.html#projets") + '">' + icon("back") + esc(ui("case.back")) + "</a></p></section>";
      return;
    }
    document.title = p.title + " · Stéphanie Pereira Mota";
    var html = "";

    html += '<section class="case-hero"><div class="wrap">' +
      '<a class="back-link" href="' + i18n.href("index.html#projets") + '">' + icon("back") + esc(ui("case.back")) + "</a>" +
      "<h1>" + esc(p.title) + "</h1>" +
      '<p class="case-tagline">' + esc(t(p.tagline)) + "</p>" +
      '<p class="case-context">' + esc(t(p.context)) + "</p></div></section>";

    html += '<section><div class="wrap case-top">' +
      '<figure class="case-cover"><a href="' + esc(p.cover) + '" data-lightbox aria-label="' + esc(ui("lightbox.open")) + " : " + esc(t(p.coverAlt)) + '">' +
      '<img src="' + esc(p.cover) + '" alt="' + esc(t(p.coverAlt)) + '" width="1600" height="735"></a></figure>' +
      '<aside class="folio" aria-labelledby="facts-title"><h2 id="facts-title">' + esc(ui("case.facts")) + "</h2>" +
      ledger(p.facts.map(function (f) { return [t(f.label), t(f.value)]; })) + "</aside></div></section>";

    html += '<section class="section"><div class="wrap case-intro">' +
      '<div><h2>' + esc(ui("case.problem")) + '</h2><div class="prose">' + p.problem.map(function (x) { return "<p>" + esc(t(x)) + "</p>"; }).join("") + "</div></div>" +
      '<div><h2>' + esc(ui("case.solution")) + '</h2><ul class="solution-list">' + p.solution.map(function (s) {
        return "<li><h3>" + esc(t(s.title)) + "</h3><p>" + esc(t(s.text)) + "</p></li>";
      }).join("") + "</ul></div></div></section>";

    p.chapters.forEach(function (c, i) {
      var firstVideo = true;
      html += '<section class="chapter"><div class="wrap">' +
        '<div class="chapter-head"><div class="chapter-title"><span class="keytag">' + (i + 1) + " / " + p.chapters.length + "</span><h2>" + esc(t(c.title)) + "</h2></div>" +
        '<div class="prose">' + c.body.map(function (x) { return "<p>" + esc(t(x)) + "</p>"; }).join("") + "</div></div>" +
        '<div class="media-grid">' + c.media.map(function (m) {
          if (m.type === "video") { var w = firstVideo; firstVideo = false; return videoHTML(m, w); }
          return imageHTML(m);
        }).join("") + "</div></div></section>";
    });

    if (p.decisions && p.decisions.length) {
      html += '<section class="chapter"><div class="wrap"><div class="section-head"><h2>' + esc(ui("case.decisions")) + "</h2></div>" +
        '<ol class="decisions">' + p.decisions.map(function (d) { return "<li><span>" + esc(t(d)) + "</span></li>"; }).join("") + "</ol></div></section>";
    }

    if (p.status && (p.status.done.length || p.status.planned.length)) {
      html += '<section class="chapter"><div class="wrap"><div class="section-head"><h2>' + esc(ui("case.status")) + "</h2></div>" +
        '<div class="status"><div><h3>' + esc(ui("case.done")) + "</h3><ul>" +
        p.status.done.map(function (d) { return "<li>" + icon("check") + "<span>" + esc(t(d)) + "</span></li>"; }).join("") + "</ul></div>" +
        '<div class="planned"><h3>' + esc(ui("case.planned")) + "</h3><ul>" +
        p.status.planned.map(function (d) { return "<li>" + icon("pending") + "<span>" + esc(t(d)) + "</span></li>"; }).join("") + "</ul></div></div></div></section>";
    }

    if (p.stack && p.stack.length) {
      html += '<section class="chapter"><div class="wrap"><div class="section-head"><h2>' + esc(ui("case.stack")) + "</h2></div>" +
        ledger(p.stack.map(function (s) { return [s.name, t(s.role)]; }), "stack-ledger") + "</div></section>";
    }

    main.innerHTML = html;
    var contactTitle = $("#contact-title");
    if (contactTitle) contactTitle.textContent = ui("case.contact");
  }

  /* ---------------- Commun ---------------- */
  function renderContact() {
    document.querySelectorAll("[data-href]").forEach(function (a) {
      var k = a.getAttribute("data-href");
      if (k === "email") a.href = "mailto:" + S.contact.email;
      if (k === "linkedin") a.href = S.contact.linkedin;
      if (k === "cv") a.href = S.contact.cv;
    });
    document.querySelectorAll("[data-email]").forEach(function (el) { el.textContent = S.contact.email; });
    document.querySelectorAll("[data-home]").forEach(function (a) {
      a.href = i18n.href("index.html" + (a.getAttribute("data-home") || ""));
    });
  }

  function renderAll() {
    i18n.apply();
    var page = document.body.getAttribute("data-page");
    if (page === "home") renderHome();
    if (page === "case") renderCase();
    renderContact();
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", ui("meta.description"));
    if (page === "home") document.title = ui("meta.title");
    updateProgress();
  }

  /* Images : agrandissement dans une fenêtre, sans quitter la page */
  var lightbox;
  function openLightbox(link) {
    if (!lightbox) {
      lightbox = document.createElement("dialog");
      lightbox.className = "lightbox";
      lightbox.innerHTML = '<figure class="lightbox-figure"><img alt=""><figcaption></figcaption></figure>' +
        '<button type="button" class="lightbox-close">' +
        '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6 6 18"/></svg>' +
        '<span></span></button>';
      document.body.appendChild(lightbox);
      lightbox.querySelector(".lightbox-close").addEventListener("click", function () { lightbox.close(); });
      /* un clic hors de l'image ferme la fenêtre */
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox || e.target.classList.contains("lightbox-figure")) lightbox.close();
      });
      lightbox.addEventListener("close", function () {
        document.documentElement.classList.remove("has-lightbox");
        if (lightbox._opener) lightbox._opener.focus();
      });
    }
    var thumb = link.querySelector("img");
    var caption = link.parentElement.querySelector("figcaption");
    var big = lightbox.querySelector("img");
    big.src = link.getAttribute("href");
    big.alt = thumb ? thumb.alt : "";
    lightbox.querySelector("figcaption").textContent = caption ? caption.textContent : "";
    lightbox.querySelector(".lightbox-close span").textContent = ui("lightbox.close");
    lightbox.querySelector(".lightbox-close").setAttribute("aria-label", ui("lightbox.close"));
    lightbox._opener = link;
    document.documentElement.classList.add("has-lightbox");
    lightbox.showModal();
  }
  document.addEventListener("click", function (e) {
    var link = e.target.closest("a[data-lightbox]");
    if (!link || e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault();
    openLightbox(link);
  });

  /* Vidéo : rien n'est téléchargé avant le clic */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".video-play");
    if (!btn) return;
    var frame = btn.parentElement;
    if (btn.hasAttribute("data-file")) {
      var video = document.createElement("video");
      video.src = btn.getAttribute("data-file");
      video.poster = btn.getAttribute("data-poster");
      video.controls = true;
      video.playsInline = true;
      video.setAttribute("aria-label", btn.getAttribute("aria-label"));
      frame.innerHTML = "";
      frame.appendChild(video);
      video.play().catch(function () { /* lecture manuelle si l'autoplay est bloqué */ });
      video.focus();
      return;
    }
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(btn.getAttribute("data-yt")) + "?autoplay=1&rel=0";
    iframe.title = btn.getAttribute("aria-label");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    frame.innerHTML = "";
    frame.appendChild(iframe);
    iframe.focus();
  });

  /* Menu mobile */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".menu-button");
    var links = document.querySelector(".nav-links");
    if (btn && links) {
      var open = links.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      return;
    }
    if (links && links.classList.contains("is-open") && e.target.closest(".nav-links a")) {
      links.classList.remove("is-open");
      document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", function (e) {
    var links = document.querySelector(".nav-links");
    if (e.key === "Escape" && links && links.classList.contains("is-open")) {
      links.classList.remove("is-open");
      var btn = document.querySelector(".menu-button");
      btn.setAttribute("aria-expanded", "false");
      btn.focus();
    }
  });

  /* En-tête : filet au défilement ; frise : le fil se colore en avançant */
  var header = document.querySelector(".site-header");
  function updateProgress() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    var reg = document.getElementById("register");
    if (!reg) return;
    var r = reg.getBoundingClientRect();
    var vh = window.innerHeight;
    var p = (vh * 0.75 - r.top) / r.height;
    reg.style.setProperty("--progress", Math.max(0, Math.min(1, p)).toFixed(3));
  }
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { updateProgress(); ticking = false; });
  }, { passive: true });
  window.addEventListener("resize", updateProgress);

  i18n.onChange(renderAll);
  renderAll();
})();
