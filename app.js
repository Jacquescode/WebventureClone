const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const i = document.querySelector(".fas");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  i.classList.toggle("fa-times");
});
