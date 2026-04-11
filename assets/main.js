const routes = {
  dashboard: { group: "", title: "仪表盘", src: "./pages/dashboard.html", menuId: "menu-dashboard" },
  "location-layout": { group: "", title: "库位布局", src: "./pages/location-layout.html", menuId: "menu-location-layout" },
  "pallet-list": { group: "", title: "托盘列表", src: "./pages/pallet-list.html", menuId: "menu-pallet-list" },
  "task-list": { group: "任务管理", title: "任务列表", src: "./pages/task-list.html", menuId: "menu-task-list" },
  "process-log": { group: "接口管理", title: "接口日志", src: "./pages/process-log.html", menuId: "menu-process-log" },
  "message-detail": { group: "接口管理", title: "接口消息详情", src: "./pages/message-detail.html" },
  "user-management": { group: "权限管理", title: "用户管理", src: "./pages/user-management.html", menuId: "menu-user-management" },
  "role-permission": { group: "权限管理", title: "角色权限管理", src: "./pages/role-permission.html", menuId: "menu-role-permission" }
};

const frame = document.getElementById("contentFrame");
const headerGroup = document.getElementById("headerGroup");
const headerSlash = document.getElementById("headerSlash");
const headerTitle = document.getElementById("headerTitle");
const tabsList = document.getElementById("tabsList");
const langSwitch = document.getElementById("langSwitch");
const langButtons = [...document.querySelectorAll(".lang-btn[data-lang]")];
const menuLinks = [...document.querySelectorAll(".menu-link")];
const groups = [...document.querySelectorAll("[data-group-toggle]")];
const fixedTabOrder = ["dashboard"];
const openTabs = [...fixedTabOrder];
let activeRouteKey = "dashboard";

function syncFrameLanguage() {
  const lang = window.WMSI18N?.getLanguage?.() || "zh";
  if (frame.contentWindow) {
    frame.contentWindow.postMessage({ type: "set-language", lang }, "*");
  }
}

function renderLanguageSwitch() {
  const lang = window.WMSI18N?.getLanguage?.() || "zh";
  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

function renderTabs() {
  tabsList.innerHTML = "";

  openTabs.forEach((routeKey) => {
    const route = routes[routeKey];
    if (!route) return;

    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "tab-chip";
    tab.dataset.page = routeKey;
    tab.classList.toggle("active", routeKey === activeRouteKey);

    const label = document.createElement("span");
    label.className = "tab-label";
    label.textContent = route.title;
    tab.appendChild(label);

    if (routeKey !== "dashboard") {
      const closeBtn = document.createElement("span");
      closeBtn.className = "tab-close";
      closeBtn.dataset.closeTab = routeKey;
      closeBtn.setAttribute("role", "button");
      closeBtn.setAttribute("aria-label", `关闭${route.title}标签页`);
      closeBtn.textContent = "x";
      tab.appendChild(closeBtn);
    }

    tabsList.appendChild(tab);
  });
}

function updateMenuState(route) {
  menuLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.menuId === route.menuId);
  });
}

function setActiveRoute(routeKey) {
  const route = routes[routeKey];
  if (!route) return;

  activeRouteKey = routeKey;
  frame.src = route.src;
  headerGroup.textContent = route.group;
  headerGroup.hidden = !route.group;
  headerSlash.hidden = !route.group;
  headerTitle.textContent = route.title;
  updateMenuState(route);
  renderTabs();
  syncFrameLanguage();
}

function ensureTab(routeKey) {
  if (!openTabs.includes(routeKey)) {
    openTabs.push(routeKey);
  }
}

function navigate(routeKey) {
  const route = routes[routeKey];
  if (!route) return;

  ensureTab(routeKey);
  setActiveRoute(routeKey);
}

function closeTab(routeKey) {
  const tabIndex = openTabs.indexOf(routeKey);
  if (tabIndex === -1 || routeKey === "dashboard") return;

  openTabs.splice(tabIndex, 1);

  if (activeRouteKey === routeKey) {
    const nextActive = openTabs[tabIndex] || openTabs[tabIndex - 1] || "dashboard";
    setActiveRoute(nextActive);
    return;
  }

  renderTabs();
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => navigate(link.dataset.page));
});

groups.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("open");
  });
});

tabsList.addEventListener("click", (event) => {
  const closeTarget = event.target.closest("[data-close-tab]");
  if (closeTarget) {
    event.stopPropagation();
    closeTab(closeTarget.dataset.closeTab);
    return;
  }

  const tab = event.target.closest(".tab-chip[data-page]");
  if (tab) {
    navigate(tab.dataset.page);
  }
});

window.addEventListener("message", (event) => {
  if (event.data?.type === "navigate" && event.data.page) {
    navigate(event.data.page);
  }
});

langSwitch?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lang]");
  if (!button) return;
  window.WMSI18N?.setLanguage?.(button.dataset.lang);
});

frame.addEventListener("load", syncFrameLanguage);
window.addEventListener("wms-language-change", () => {
  renderLanguageSwitch();
  syncFrameLanguage();
});

renderLanguageSwitch();
renderTabs();
setActiveRoute("dashboard");
