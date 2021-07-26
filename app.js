const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const i = document.querySelector(".fas");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  i.classList.toggle("fa-times");
});

window.onscroll = () => {
  if (window.pageYOffset > 50) {
    document
      .getElementById("top-header")
      .classList.add("top-header--white-background");
  } else {
    document
      .getElementById("top-header")
      .classList.remove("top-header--white-background");
  }
}