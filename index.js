// mobile view: show and hide menu
const navMenu = document.getElementById("nav-menu");
const navToggleBtn = document.getElementById("nav-toggle");
const navCloseBtn = document.getElementById("nav-close");

// show menu
if (navToggleBtn) {
  navToggleBtn.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// hide menu
if (navCloseBtn) {
  navCloseBtn.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

