const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const mobileNavQuery = window.matchMedia("(max-width: 678px)");

console.log(toggle);

function setNavOpen(isOpen) {
  toggle.classList.toggle("menu-toggle-active", isOpen);
  nav.classList.toggle("nav-active", isOpen);
  main.classList.toggle("nav-open", isOpen);
  updateNavAccessibility(isOpen);
}

function updateNavAccessibility(isOpen = nav.classList.contains("nav-active")) {
  const isCollapsed = mobileNavQuery.matches;
  toggle.setAttribute("aria-expanded", isCollapsed ? isOpen : true);
  nav.setAttribute("aria-hidden", isCollapsed && !isOpen);
  nav.inert = isCollapsed && !isOpen;
}

updateNavAccessibility();
mobileNavQuery.addEventListener("change", function () {
  updateNavAccessibility();
});

toggle.addEventListener("click", function () {
  setNavOpen(!nav.classList.contains("nav-active"));
});

toggle.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggle.click();
  }
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    setNavOpen(false);
  });
});
