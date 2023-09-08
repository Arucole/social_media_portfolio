const header = document.querySelector("header");
const navlist = document.querySelector(".navlist");
const item = document.querySelector(".items");
const listDisplay = document.querySelector(".list");
const dropdown = document.querySelector(".dropdown");

window.addEventListener("scroll", function () {
  hamburger.classList.remove("active");
  navlist.classList.remove("active");
});

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 200);
});
const hamburger = document.querySelector(".hambuger-menu");
// hambuger menu
const hamburgerHandler = function () {
  hamburger.classList.toggle("active");
  navlist.classList.toggle("active");
};

hamburger.addEventListener("click", hamburgerHandler);

// item.addEventListener("click", function () {
//   hamburger.classList.remove("active");
//   navlist.classList.remove("active");
// });

listDisplay.addEventListener("click", function () {
  dropdown.classList.add("active");
});
