import { icon, on } from "../util.js";
import { renderGovBar, renderScamBanner, renderDashHeader, renderSidebar } from "../components/chrome.js";
import { tasks, interactions, credits, journeys } from "../data.js";

function renderAttention() {
  const taskRows = tasks.map((t) => `
    <div class="task-row">
      <span class="ds-tag ds-tag--${t.tagColor === "red" ? "red" : "yellow"}">${t.due}</span>
      <div style="flex:1">
        <div class="task-row__title">${t.title}</div>
        <div class="task-row__detail">${t.detail}</div>
      </div>
    </div>`).join("");

  const interactionItems = interactions.map((it) => `
    <div class="interaction-item">
      <div class="interaction-rail">
        <span class="interaction-dot"></span>
        ${it.hasLine ? `<span class="interaction-line"></span>` : ""}
      </div>
      <div>
        <div class="interaction-item__title">${it.title}</div>
        <div class="interaction-item__date">${it.date}</div>
      </div>
    </div>`).join("");

  return `
    <div class="attention-grid">
      <div>
        <h2 class="h2-block">For your attention</h2>
        <div class="stat-cards">
          <div class="ds-card stat-card">
            <span class="icon-tile">${icon("mail")}</span>
            <span class="stat-card__label">Mail pending action</span>
            <span class="stat-card__count">2</span>
          </div>
          <div class="ds-card stat-card">
            <span class="icon-tile">${icon("file-text")}</span>
            <span class="stat-card__label">Applications pending action</span>
            <span class="stat-card__count">3</span>
          </div>
        </div>
        <div class="ds-card">
          <div class="tasks-card__head">${icon("triangle-alert")}Complete these soon</div>
          <div class="task-list">${taskRows}</div>
        </div>
      </div>
      <div>
        <h2 class="interaction-h2">Recent interaction</h2>
        <div class="interaction-list">${interactionItems}</div>
      </div>
    </div>`;
}

function renderBenefits() {
  const creditCards = credits.map((cr) => `
    <div class="credit-card">
      <div class="credit-card__label">${cr.label}</div>
      <div class="credit-card__box">
        <div class="credit-card__amount">$ ${cr.amount}</div>
        <div class="credit-card__note">${cr.note}</div>
      </div>
    </div>`).join("");

  return `
    <div class="benefits-block">
      <div class="benefits-head">
        <h2 class="h2-block" style="margin:0">Your benefits</h2>
        <button class="ds-btn ds-btn--secondary ds-btn--small">View all benefits and credits</button>
      </div>
      <div class="ds-card benefits-card">
        <div class="benefits-caption">Estimated benefits for 2026</div>
        <div class="benefits-amount">$10,000</div>
        <div class="benefits-divider"></div>
        <div class="credits-head">Government issues credits</div>
        <div class="credits-grid">${creditCards}</div>
      </div>
    </div>`;
}

function renderRecommender() {
  const cards = journeys.map((j) => `
    <div class="journey-card">
      <div class="journey-reason" style="color:${j.color};background:rgba(23,104,190,0.1)">${icon("sparkles")}${j.reason}</div>
      <div class="journey-head">
        ${icon(j.icon, `background-color:${j.color}`)}
        <div class="journey-head__title">${j.title}</div>
      </div>
      <div class="journey-desc">${j.desc}</div>
    </div>`).join("");

  return `
    <div class="rec-block">
      <div style="margin-top:36px;padding:28px 30px;border-radius:16px;border:1px solid rgba(23,104,190,0.28);background:rgba(23,104,190,0.06)">
        <div class="rec-eyebrow" style="color:#1768BE;background:rgba(23,104,190,0.12)">${icon("sparkles")}Our recommender</div>
        <h2 class="rec-title">Discover these journey</h2>
        <p class="rec-subtitle">Suggested based on recent activity and what others similar to your profile are embarking on</p>
        <div class="journeys-grid">${cards}</div>
      </div>
    </div>`;
}

export function render() {
  return `
    <div class="app-shell">
      ${renderGovBar()}
      ${renderScamBanner()}
      ${renderDashHeader()}
      <div class="dash-layout">
        ${renderSidebar("dashboard")}
        <main class="dash-main dash-main--dashboard">
          <h1 class="dash-h1">Hi Joshua,</h1>
          ${renderAttention()}
          ${renderBenefits()}
          ${renderRecommender()}
          <div class="dash-illustration-band">
            <img src="assets/illustrations/dashboard-illustration.png" alt="">
          </div>
        </main>
      </div>
    </div>`;
}

export function mount(root) {
  root.innerHTML = render();
  on(root, "[data-action='close-scam']", "click", () => {
    root.querySelector("[data-scam-banner]").style.display = "none";
  });
}
