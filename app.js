const openMenu = document.querySelector(".toggle-menu");
const nav = document.querySelector(".navbar");
openMenu.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
  openMenu.classList.toggle("nav-active");
});

