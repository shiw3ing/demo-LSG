import { icon } from "../util.js";

export function renderGovBar({ hideHint = false } = {}) {
  return `
    <div class="govbar">
      <div class="govbar__row">
        ${icon("flag", "width:16px;height:16px;background-color:var(--brand-50)")}
        <span>A Singapore Government Agency Website</span>
        <a href="#" class="lsg-link govbar__hint" style="${hideHint ? "display:none" : ""}">How to identify
          ${icon("chevron-down", "width:14px;height:14px")}
        </a>
      </div>
    </div>`;
}

export function renderScamBanner() {
  return `
    <div class="scam-banner" data-scam-banner>
      <div class="scam-banner__row">
        ${icon("triangle-alert", "width:22px;height:22px;margin-top:1px")}
        <div class="scam-banner__body">
          <div class="scam-banner__title">Beware of impersonation scams</div>
          <div class="scam-banner__desc">Government officials will never ask you to transfer money or disclose bank log-in details. If you're unsure, please call the 24/7 ScamShield Helpline at 1799 or visit the <a href="#" class="lsg-link" style="font-weight:600">ScamShield website</a>.</div>
        </div>
        <button class="scam-banner__close" data-action="close-scam" aria-label="Dismiss">
          ${icon("x", "width:18px;height:18px;background-color:#6b6b6b")}
        </button>
      </div>
    </div>`;
}

export function renderDashHeader() {
  return `
    <header class="dash-header">
      <div class="dash-header__row">
        <a href="#/dashboard" class="dash-brand">My Life<span>SG</span></a>
        <div class="dash-header__right">
          <a href="#/" class="lsg-link" style="font-size:16px;font-weight:600">Return to LifeSG home</a>
          <div class="dash-divider"></div>
          <span class="bell-wrap">
            ${icon("bell")}
            <span class="bell-badge">8</span>
          </span>
          <span class="ds-avatar">M</span>
        </div>
      </div>
    </header>`;
}

export function renderSidebar(active) {
  const link = (route, label, iconName, key, extra = "") => `
    <a href="#/${route}" class="side-link ${active === key ? "is-active" : ""}">
      ${icon(iconName)}${label}${extra}
    </a>`;
  return `
    <nav class="dash-sidebar">
      ${link("dashboard", "Dashboard", "layout-grid", "dashboard")}
      <div class="side-divider"></div>
      <div class="side-label">Action centre</div>
      ${link("mails", "Your mails", "mail", "mails", `<span class="side-badge">8</span>`)}
      ${link("applications", "Application status", "file-text", "applications", `<span class="side-dot"></span>`)}
      <div class="side-divider"></div>
      <div class="side-label">For you</div>
      ${link("dashboard", "Your benefits", "heart", "__none")}
      ${link("dashboard", "Your records", "file-text", "__none")}
    </nav>`;
}

export function renderFooter() {
  const hit = (label, style) => `<a class="footer-hit" href="#" aria-label="${label}" style="${style}"></a>`;
  return `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <img src="assets/illustrations/footer-desktop.svg" alt="LifeSG footer" class="illustration-band">
        <div class="footer-hits illustration-band">
          ${hit("Home", "left:3.19%;top:41.37%;width:3.40%;height:3.98%")}
          ${hit("News and media", "left:21.46%;top:41.37%;width:8.96%;height:3.98%")}
          ${hit("Services", "left:3.13%;top:48.45%;width:4.58%;height:3.98%")}
          ${hit("About us", "left:21.32%;top:48.45%;width:5.07%;height:3.98%")}
          ${hit("Download on the App Store", "left:66.94%;top:48.45%;width:13.82%;height:14.38%")}
          ${hit("Get it on Google Play", "left:82.85%;top:48.45%;width:13.82%;height:14.38%")}
          ${hit("Guides", "left:3.19%;top:55.53%;width:3.89%;height:4.87%")}
          ${hit("Frequently asked questions", "left:21.46%;top:55.53%;width:14.72%;height:4.87%")}
          ${hit("LifeSG app", "left:3.19%;top:62.61%;width:5.90%;height:3.98%")}
          ${hit("Get in touch with us", "left:21.39%;top:62.61%;width:10.83%;height:3.98%")}
          ${hit("Blog", "left:3.19%;top:69.69%;width:2.57%;height:3.98%")}
          ${hit("Sign up for our newsletter", "left:21.39%;top:69.69%;width:14.03%;height:3.98%")}
          ${hit("Privacy Statement", "left:3.19%;top:91.81%;width:7.43%;height:4.87%")}
          ${hit("Terms of Use", "left:11.39%;top:91.81%;width:5.56%;height:4.87%")}
          ${hit("Report Vulnerability", "left:17.85%;top:91.81%;width:9.44%;height:4.87%")}
        </div>

        <img src="assets/illustrations/footer-tablet.svg" alt="LifeSG footer" class="illustration-band--tablet" style="width:100%;height:auto">
        <div class="footer-hits illustration-band--tablet">
          ${hit("Home", "left:2.86%;top:23.48%;width:6.38%;height:3.04%")}
          ${hit("News and media", "left:51.82%;top:23.48%;width:16.80%;height:3.04%")}
          ${hit("Services", "left:2.73%;top:28.89%;width:8.59%;height:3.04%")}
          ${hit("About us", "left:51.69%;top:28.89%;width:9.38%;height:3.04%")}
          ${hit("Guides", "left:2.86%;top:34.29%;width:7.29%;height:3.72%")}
          ${hit("Frequently asked questions", "left:51.82%;top:34.29%;width:27.60%;height:3.72%")}
          ${hit("LifeSG app", "left:2.86%;top:39.70%;width:11.07%;height:3.72%")}
          ${hit("Get in touch with us", "left:51.82%;top:39.70%;width:20.18%;height:3.72%")}
          ${hit("Blog", "left:2.86%;top:45.10%;width:4.82%;height:3.72%")}
          ${hit("Sign up for our newsletter", "left:51.69%;top:45.10%;width:26.30%;height:3.72%")}
          ${hit("Download on the App Store", "left:2.86%;top:59.97%;width:21.22%;height:9.46%")}
          ${hit("Get it on Google Play", "left:25.65%;top:59.97%;width:21.22%;height:9.46%")}
          ${hit("Privacy Statement", "left:2.86%;top:77.53%;width:13.93%;height:3.04%")}
          ${hit("Terms of Use", "left:2.73%;top:82.26%;width:10.42%;height:2.53%")}
          ${hit("Report Vulnerability", "left:2.86%;top:86.66%;width:17.71%;height:3.38%")}
        </div>

        <img src="assets/illustrations/footer-mobile.svg" alt="LifeSG footer" class="illustration-band--mobile" style="width:100%;height:auto">
        <div class="footer-hits illustration-band--mobile">
          ${hit("Home", "left:5.87%;top:20.32%;width:13.07%;height:2.49%")}
          ${hit("News and media", "left:53.87%;top:20.18%;width:34.40%;height:2.78%")}
          ${hit("Services", "left:5.60%;top:25.00%;width:17.60%;height:2.63%")}
          ${hit("About us", "left:53.33%;top:24.85%;width:19.47%;height:2.78%")}
          ${hit("Guides", "left:5.87%;top:29.53%;width:14.93%;height:2.78%")}
          ${hit("Frequently asked questions", "left:53.60%;top:29.53%;width:35.47%;height:6.73%")}
          ${hit("LifeSG app", "left:5.87%;top:34.21%;width:22.67%;height:3.22%")}
          ${hit("Get in touch with us", "left:53.60%;top:37.72%;width:31.47%;height:6.14%")}
          ${hit("Blog", "left:5.87%;top:38.89%;width:9.87%;height:3.22%")}
          ${hit("Sign up for our newsletter", "left:53.60%;top:45.91%;width:22.67%;height:6.29%")}
          ${hit("Download on the App Store", "left:5.87%;top:62.87%;width:43.47%;height:7.46%")}
          ${hit("Get it on Google Play", "left:52.53%;top:62.87%;width:43.47%;height:7.46%")}
          ${hit("Privacy Statement", "left:5.87%;top:77.63%;width:28.53%;height:2.49%")}
          ${hit("Terms of Use", "left:5.60%;top:81.58%;width:21.33%;height:2.19%")}
          ${hit("Report Vulnerability", "left:5.87%;top:85.82%;width:31.47%;height:2.49%")}
        </div>
      </div>
    </footer>`;
}
