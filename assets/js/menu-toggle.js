const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

console.log(toggle);

function setNavOpen(isOpen) {
  toggle.classList.toggle("menu-toggle-active", isOpen);
  nav.classList.toggle("nav-active", isOpen);
  main.classList.toggle("nav-open", isOpen);
}

toggle.addEventListener("click", function () {
  setNavOpen(!nav.classList.contains("nav-active"));
});

nav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    setNavOpen(false);
  });
});
