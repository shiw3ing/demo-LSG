import { icon, on } from "../util.js";
import { renderGovBar, renderScamBanner, renderFooter } from "../components/chrome.js";
import { langLabels, chipDefs, popular, moments, topics, lifeMenu, topicsMenu } from "../data.js";

const CARD_W = 340;
const GAP = 24;
const STEP = CARD_W + GAP;

function renderHeader() {
  return `
    <header class="site-header">
      <div class="site-header__row">
        <a href="#/" class="brand-logo dash-brand" style="font-size:24px">Life<span>SG</span></a>
        <nav class="nav-desktop">
          <a href="#/" class="nav-link">Home</a>
          <button class="nav-btn" data-menu-btn="life">Life moments ${icon("chevron-down")}</button>
          <button class="nav-btn" data-menu-btn="topics">Topics ${icon("chevron-down")}</button>
          <button class="nav-search-btn" aria-label="Search">${icon("search")}</button>
          <button class="ds-btn ds-btn--secondary ds-btn--small lsg-download-top" data-action="go-dashboard" style="font-weight:700">Log in</button>
        </nav>
        <button class="hamburger" data-action="toggle-mobile-nav" aria-label="Menu">${icon("menu")}</button>
      </div>

      <div class="nav-dropdown" data-dropdown hidden>
        <div class="nav-dropdown__grid" data-dropdown-items></div>
      </div>

      <div class="mobile-menu" data-mobile-menu>
        <a href="#/" class="mobile-menu__link mobile-menu__link--home">Home</a>
        <a href="#" class="mobile-menu__link">Life moments${icon("chevron-right")}</a>
        <a href="#" class="mobile-menu__link">Topics${icon("chevron-right")}</a>
        <a href="#" class="mobile-menu__search">${icon("search")}Search</a>
        <div class="mobile-menu__cta"><button class="ds-btn ds-btn--full">Download the app</button></div>
      </div>
    </header>`;
}

function renderHero() {
  const tabs = langLabels.map((label, i) => `<button class="lang-tab ${i === 0 ? "is-active" : ""}" data-lang="${label}">${label}</button>`).join("");
  const chips = chipDefs.map((c) => `
    <a href="#" class="chip">${c.label}${c.isNew ? `<span class="chip__new">NEW</span>` : ""}</a>
  `).join("");

  return `
    <section class="hero">
      <div class="hero__container">
        <div class="lang-tabs">${tabs}</div>
        <div class="hero__inner">
          <h1 class="hero__title">Singapore government services and information in one place</h1>
          <div class="search-row">
            <div class="search-field">
              ${icon("search")}
              <input type="text" placeholder="Search all of LifeSG">
            </div>
            <button class="ds-btn">Search</button>
          </div>
          <div class="chips">${chips}</div>
        </div>
      </div>
      <img src="assets/illustrations/hero-band.svg" alt="" class="illustration-band">
      <img src="assets/illustrations/hero-band-tablet.svg" alt="" class="illustration-band--tablet">
      <img src="assets/illustrations/hero-band-mobile.svg" alt="" class="illustration-band--mobile">
    </section>`;
}

function renderPopular() {
  const items = popular.map((p) => `
    <a href="#" class="popular-item">
      <span class="lsg-link popular-item__label">${p}</span>
      ${icon("chevron-right")}
    </a>`).join("");
  return `
    <section class="section">
      <h2 class="section-h2">Popular on LifeSG</h2>
      <p class="section-sub">Find information and services for different life moments and situations.</p>
      <div class="popular-grid">${items}</div>
    </section>`;
}

function renderMoments() {
  const cards = moments.map((m) => `
    <a href="#" class="moment-card">
      ${icon(m.icon, `background-color:${m.color}`)}
      <div class="moment-card__title">${m.title}</div>
      <div class="moment-card__desc">${m.desc}</div>
    </a>`).join("");
  return `
    <section class="moments-section">
      <div class="moments-head">
        <div>
          <h2 class="section-h2">Life moments</h2>
          <p class="section-sub" style="margin:0">Find information and services for different life moments and situations.</p>
        </div>
        <a href="#" class="lsg-link moments-head__more">See more life moments${icon("chevron-right")}</a>
      </div>
      <div class="moments-viewport" data-carousel>
        <div class="moments-track" data-track>${cards}</div>
      </div>
      <div class="carousel-controls">
        <button class="carousel-btn" data-action="prev-moment" aria-label="Previous">${icon("chevron-left")}</button>
        <div class="carousel-dots" data-dots></div>
        <button class="carousel-btn" data-action="next-moment" aria-label="Next">${icon("chevron-right")}</button>
      </div>
    </section>`;
}

function renderTopics() {
  const items = topics.map((t) => `
    <a href="#" class="topic-item">
      <div>
        <div class="lsg-link topic-item__title">${t.title}</div>
        <div class="topic-item__desc">${t.desc}</div>
      </div>
      ${icon("chevron-right")}
    </a>`).join("");
  return `
    <section class="topics-section">
      <div class="topics-container">
        <h2 class="section-h2">Topics</h2>
        <p class="section-sub">Find information and services based on topics</p>
        <div class="topics-grid">${items}</div>
        <p class="topics-more">More topics coming soon...</p>
      </div>
      <img src="assets/illustrations/topics-band.svg" alt="" class="illustration-band">
      <img src="assets/illustrations/topics-band-tablet.svg" alt="" class="illustration-band--tablet">
      <img src="assets/illustrations/topics-band-mobile.svg" alt="" class="illustration-band--mobile">
    </section>`;
}

export function render() {
  return `
    <div class="app-shell">
      ${renderGovBar()}
      ${renderScamBanner()}
      ${renderHeader()}
      ${renderHero()}
      ${renderPopular()}
      ${renderMoments()}
      ${renderTopics()}
      ${renderFooter()}
    </div>`;
}

export function mount(root) {
  root.innerHTML = render();

  // Scam banner dismiss
  on(root, "[data-action='close-scam']", "click", () => {
    root.querySelector("[data-scam-banner]").style.display = "none";
  });

  // Language tabs
  on(root, ".lang-tab", "click", (el) => {
    root.querySelectorAll(".lang-tab").forEach((t) => t.classList.remove("is-active"));
    el.classList.add("is-active");
  });

  // Nav dropdowns (Life moments / Topics)
  const dropdown = root.querySelector("[data-dropdown]");
  const dropdownItems = root.querySelector("[data-dropdown-items]");
  function closeDropdown() {
    dropdown.hidden = true;
    root.querySelectorAll("[data-menu-btn]").forEach((b) => b.classList.remove("is-open"));
  }
  on(root, "[data-menu-btn]", "click", (el) => {
    const key = el.dataset.menuBtn;
    const isOpen = !dropdown.hidden && el.classList.contains("is-open");
    closeDropdown();
    if (isOpen) return;
    const items = key === "life" ? lifeMenu : topicsMenu;
    dropdownItems.innerHTML = items.map((label) => `<a href="#" class="nav-dropdown__item">${label}${icon("chevron-right")}</a>`).join("");
    dropdown.hidden = false;
    el.classList.add("is-open");
  });
  document.addEventListener("click", (e) => {
    if (!root.isConnected) return;
    if (!e.target.closest("[data-menu-btn]") && !e.target.closest("[data-dropdown]")) closeDropdown();
  });

  // Mobile menu
  const mobileMenu = root.querySelector("[data-mobile-menu]");
  const hamburger = root.querySelector(".hamburger .icon");
  on(root, "[data-action='toggle-mobile-nav']", "click", () => {
    const open = mobileMenu.classList.toggle("is-open");
    const url = `assets/icons/${open ? "x" : "menu"}.svg`;
    hamburger.style.webkitMaskImage = `url(${url})`;
    hamburger.style.maskImage = `url(${url})`;
  });

  // Log in -> dashboard
  on(root, "[data-action='go-dashboard']", "click", () => { window.location.hash = "#/dashboard"; });

  // Life moments carousel
  const viewport = root.querySelector("[data-carousel]");
  const dotsWrap = root.querySelector("[data-dots]");
  let moment = 0;

  function metrics() {
    const vw = viewport.clientWidth || 1152;
    const perView = Math.max(1, Math.floor((vw + GAP) / STEP));
    const maxIndex = Math.max(0, moments.length - perView);
    const trackWidth = moments.length * CARD_W + (moments.length - 1) * GAP;
    const maxScroll = Math.max(0, trackWidth - vw);
    return { maxIndex, maxScroll };
  }

  function renderDots() {
    const { maxIndex } = metrics();
    let html = "";
    for (let i = 0; i <= maxIndex; i++) {
      html += `<button class="carousel-dot ${i === moment ? "is-active" : ""}" data-dot="${i}"><span></span></button>`;
    }
    dotsWrap.innerHTML = html;
  }

  function goTo(idx) {
    const { maxIndex, maxScroll } = metrics();
    moment = Math.max(0, Math.min(maxIndex, idx));
    viewport.scrollTo({ left: Math.min(moment * STEP, maxScroll), behavior: "smooth" });
    renderDots();
  }

  on(root, "[data-action='prev-moment']", "click", () => goTo(moment - 1));
  on(root, "[data-action='next-moment']", "click", () => goTo(moment + 1));
  on(root, "[data-dot]", "click", (el) => goTo(Number(el.dataset.dot)));

  let scrollSyncTimer;
  viewport.addEventListener("scroll", () => {
    clearTimeout(scrollSyncTimer);
    scrollSyncTimer = setTimeout(() => {
      moment = Math.round(viewport.scrollLeft / STEP);
      renderDots();
    }, 80);
  });

  window.addEventListener("resize", renderDots);
  renderDots();
}
