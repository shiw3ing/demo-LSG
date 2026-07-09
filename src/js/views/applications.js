import { icon, on } from "../util.js";
import { renderGovBar, renderDashHeader, renderSidebar } from "../components/chrome.js";
import { appDefs, statusTone, SEG_TOTAL } from "../data.js";

const state = { filter: "all", openId: null };

function withIds() {
  return appDefs.map((a, i) => ({ ...a, id: i }));
}

function chip(key, label, active) {
  return `<button class="filter-chip ${active ? "is-active" : ""}" data-filter="${key}">${label}</button>`;
}

function segments(filled) {
  let html = "";
  for (let i = 0; i < SEG_TOTAL; i++) html += `<span class="app-segment ${i < filled ? "is-filled" : ""}"></span>`;
  return html;
}

function renderList() {
  const all = withIds();
  const actionCount = all.filter((a) => !!a.due || a.status === "Draft").length;
  const matches = (a) =>
    state.filter === "action" ? (!!a.due || a.status === "Draft")
    : state.filter === "active" ? a.group === "active"
    : state.filter === "completed" ? a.group === "completed"
    : true;
  const filtered = all.filter(matches);

  const cards = filtered.map((a) => {
    const tone = statusTone[a.status] || statusTone.Draft;
    return `
    <div class="app-card" data-open-app="${a.id}">
      <button class="app-card__cta" data-open-app="${a.id}">${a.cta}</button>
      ${a.due ? `<span class="app-due">${a.due}</span>` : ""}
      <div class="app-title-row">
        <div class="app-title">${a.title}</div>
        <span class="app-status-pill" style="border-color:${tone.border}">${a.status}</span>
      </div>
      <div class="app-expires">${a.expires || ""}</div>
      ${a.mode === "progress" ? `
        <div class="app-progress">
          <span class="app-progress__icon">${icon("megaphone")}</span>
          <div>
            <div class="app-progress__label">Your progress</div>
            <div class="app-segments">${segments(a.progressFilled || 0)}</div>
          </div>
        </div>` : `<p class="app-body">${a.body}</p>`}
    </div>`;
  }).join("");

  return `
    <h1 class="list-page__title" style="margin-bottom:8px">Application status</h1>
    <p class="list-page__sub">Track the applications and requests you've submitted across government services.</p>
    <div class="filter-row">
      ${chip("all", "All", state.filter === "all")}
      ${chip("active", "In progress", state.filter === "active")}
      ${chip("action", `Action required (${actionCount})`, state.filter === "action")}
      ${chip("completed", "Completed", state.filter === "completed")}
    </div>
    <div class="app-list">${cards}</div>`;
}

function renderDetail() {
  const a = withIds().find((x) => x.id === state.openId);
  const steps = a.steps.map((st, i) => {
    const hasLine = i < a.steps.length - 1;
    const dotStyle = st.state === "done"
      ? "background:var(--bg-success-strong)"
      : st.state === "current"
      ? "background:var(--bg-primary);box-shadow:0 0 0 4px var(--bg-primary-subtlest)"
      : "background:#fff;border:2px solid var(--border)";
    const color = st.state === "todo" ? "#8a8a8a" : "var(--text)";
    const weight = st.state === "todo" ? 400 : 700;
    return `
      <div class="timeline-step">
        <div class="timeline-rail">
          <span style="flex-shrink:0;width:14px;height:14px;border-radius:999px;${dotStyle}"></span>
          ${hasLine ? `<span class="timeline-line"></span>` : ""}
        </div>
        <div class="timeline-body">
          <div class="timeline-step__label" style="color:${color};font-weight:${weight}">${st.label}</div>
          <div class="timeline-step__date">${st.date}</div>
        </div>
      </div>`;
  }).join("");

  return `
    <a href="#" class="lsg-link back-link" data-action="back">${icon("chevron-left")}Back to all applications</a>
    <div class="app-detail">
      <div class="app-detail__top">
        <span class="app-detail__agency">${a.agency}</span>
        <span class="app-status-pill">${a.status}</span>
      </div>
      <h1 class="app-detail__title">${a.title}</h1>
      <div class="app-detail__meta">Ref ${a.ref} &middot; ${a.dateLabel}${a.expires ? ` &middot; ${a.expires}` : ""}</div>
      <p class="app-detail__body">${a.body}</p>
      <div class="timeline">${steps}</div>
      ${a.actionable ? `<button class="ds-btn">${a.cta}</button>` : ""}
    </div>`;
}

function renderMain() {
  return state.openId != null ? renderDetail() : renderList();
}

export function render() {
  return `
    <div class="app-shell">
      ${renderGovBar()}
      ${renderDashHeader()}
      <div class="dash-layout">
        ${renderSidebar("applications")}
        <main class="dash-main dash-main--flat" data-main>${renderMain()}</main>
      </div>
    </div>`;
}

export function mount(root) {
  root.innerHTML = render();
  const main = root.querySelector("[data-main]");
  const rerender = () => { main.innerHTML = renderMain(); };

  on(root, "[data-filter]", "click", (el) => { state.filter = el.dataset.filter; rerender(); });
  on(root, "[data-open-app]", "click", (el) => { state.openId = Number(el.dataset.openApp); rerender(); });
  on(root, "[data-action='back']", "click", () => { state.openId = null; rerender(); });
}
