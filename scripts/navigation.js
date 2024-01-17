let navMenuBackground = document.getElementById("nav-menu__background");
let button = document.getElementById("nav-menu__button");
let navMenu = document.getElementById("nav-menu");

navMenuBackground.addEventListener("click", () => {
  navMenu.classList.add("nav-menu--hidden");
});

button.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu--hidden");
});
