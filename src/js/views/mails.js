import { icon, on } from "../util.js";
import { renderGovBar, renderDashHeader, renderSidebar } from "../components/chrome.js";
import { mailDefs } from "../data.js";

const state = { filter: "all", openId: null, read: {} };

function withIds() {
  return mailDefs.map((m, i) => ({ ...m, id: i, unread: m.unread && !state.read[i] }));
}

function chip(key, label, active) {
  return `<button class="filter-chip ${active ? "is-active" : ""}" data-filter="${key}">${label}</button>`;
}

function renderList() {
  const all = withIds();
  const unreadCount = all.filter((m) => m.unread).length;
  const pendingCount = all.filter((m) => m.pending).length;
  const filtered = all.filter((m) => (state.filter === "pending" ? m.pending : state.filter === "unread" ? m.unread : true));

  const rows = filtered.map((m) => `
    <a href="#" class="mail-row ${m.unread ? "mail-row--unread" : "mail-row--read"}" data-open-mail="${m.id}">
      <span class="mail-unread-dot ${m.unread ? "mail-unread-dot--on" : "mail-unread-dot--off"}"></span>
      <div class="mail-row__content">
        <div class="mail-row__agency">${m.agency}</div>
        <div class="mail-row__subject ${m.unread ? "mail-row__subject--unread" : "mail-row__subject--read"}">${m.subject}</div>
        <div class="mail-row__preview">${m.preview}</div>
      </div>
      <div class="mail-row__meta">
        ${m.pending ? `<span class="ds-pill ds-pill--warning">Action needed</span>` : ""}
        <span class="mail-row__date">${m.date}</span>
      </div>
    </a>`).join("");

  return `
    <h1 class="list-page__title">Your mails</h1>
    <p class="list-page__sub">Official letters and notices from government agencies. You have <strong style="color:var(--text)">${unreadCount} unread</strong> mails.</p>
    <div class="filter-row">
      ${chip("all", "All mails", state.filter === "all")}
      ${chip("unread", `Unread (${unreadCount})`, state.filter === "unread")}
      ${chip("pending", `Action needed (${pendingCount})`, state.filter === "pending")}
    </div>
    <div class="mail-list">${rows}</div>`;
}

function renderDetail() {
  const m = withIds().find((x) => x.id === state.openId);
  return `
    <a href="#" class="lsg-link back-link" data-action="back">${icon("chevron-left")}Back to all mails</a>
    <div class="mail-detail">
      <div class="mail-detail__top">
        <span class="mail-detail__agency">${m.agency}</span>
        ${m.pending ? `<span class="ds-pill ds-pill--warning">Action needed</span>` : ""}
      </div>
      <h1 class="mail-detail__subject">${m.subject}</h1>
      <div class="mail-detail__meta">Received ${m.date}</div>
      <p class="mail-detail__body">${m.body}</p>
      ${m.attachment ? `
        <a href="#" class="attachment-card">
          <span class="attachment-card__icon">${icon("file-text")}</span>
          <span class="attachment-card__name">${m.attachment}</span>
          ${icon("download", "width:20px;height:20px;background-color:#5b5b5b")}
        </a>` : ""}
      ${m.pending ? `<button class="ds-btn">Take action</button>` : ""}
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
        ${renderSidebar("mails")}
        <main class="dash-main dash-main--flat" data-main>${renderMain()}</main>
      </div>
    </div>`;
}

export function mount(root) {
  root.innerHTML = render();
  const main = root.querySelector("[data-main]");
  const rerender = () => { main.innerHTML = renderMain(); };

  on(root, "[data-filter]", "click", (el) => { state.filter = el.dataset.filter; rerender(); });
  on(root, "[data-open-mail]", "click", (el) => {
    const id = Number(el.dataset.openMail);
    state.openId = id;
    state.read[id] = true;
    rerender();
  });
  on(root, "[data-action='back']", "click", () => { state.openId = null; rerender(); });
}
