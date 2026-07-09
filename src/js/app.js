import * as home from "./views/home.js";
import * as dashboard from "./views/dashboard.js";
import * as mails from "./views/mails.js";
import * as applications from "./views/applications.js";

const routes = {
  "": home,
  "/": home,
  dashboard,
  mails,
  applications,
};

const root = document.getElementById("app");

function currentRoute() {
  return location.hash.replace(/^#\/?/, "");
}

function renderRoute() {
  const view = routes[currentRoute()] || home;
  view.mount(root);
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", renderRoute);
window.addEventListener("DOMContentLoaded", renderRoute);

// Placeholder links (href="#") are decorative in this prototype — stop them
// from resetting the hash router back to home.
document.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (a && (a.getAttribute("href") === "#" || a.getAttribute("href") === "")) {
    e.preventDefault();
  }
});
