/* Langue du site : français par défaut, anglais au choix. */
(function () {
  var LANGS = ["fr", "en"];
  var KEY = "spm-lang";

  function readStored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) { /* stockage indisponible : on ignore */ }
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(fromUrl) > -1) return fromUrl;
    var stored = readStored();
    if (LANGS.indexOf(stored) > -1) return stored;
    return "fr";
  }

  var current = initialLang();
  var listeners = [];

  /* t({fr, en}) -> texte dans la langue courante ; une chaîne simple est rendue telle quelle */
  /* Typographie française : espace insécable avant ? ! : ; » et après « */
  function typo(s) {
    if (current !== "fr") return s;
    return s.replace(/ ([?!:;»])/g, " $1").replace(/« /g, "« ");
  }

  function t(value) {
    if (value == null) return "";
    if (typeof value === "string") return typo(value);
    return typo(value[current] || value.fr || "");
  }

  function ui(key) {
    var entry = window.SITE && window.SITE.ui[key];
    return entry ? t(entry) : key;
  }

  function applyStatic() {
    document.documentElement.lang = current;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = ui(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length === 2) el.setAttribute(parts[0].trim(), ui(parts[1].trim()));
      });
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === current));
    });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) < 0 || lang === current) return;
    current = lang;
    store(lang);
    var url = new URL(location.href);
    if (lang === "fr") url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
    applyStatic();
    listeners.forEach(function (fn) { fn(lang); });
  }

  window.I18N = {
    t: t,
    ui: ui,
    lang: function () { return current; },
    set: setLang,
    onChange: function (fn) { listeners.push(fn); },
    apply: applyStatic,
    /* lien interne qui garde la langue choisie */
    href: function (path) {
      if (current === "fr") return path;
      return path + (path.indexOf("?") > -1 ? "&" : "?") + "lang=" + current;
    }
  };

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang-toggle button");
    if (btn) setLang(btn.getAttribute("data-lang"));
  });
})();
