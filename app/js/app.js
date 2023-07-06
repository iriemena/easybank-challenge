const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  overlay.classList.toggle("open");
  if (!menu.classList.contains("open")) {
    menu.classList.add("open");
    body.classList.add("no-scroll");
  } else {
    menu.classList.remove("open");
    body.classList.remove("no-scroll");
  }
});
