/*mobile view: show and hide menu*/
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

/* mobile view: hide/close menu on any menu-item click */
const allMenuItems = document.querySelectorAll(".nav-link");
// console.log(allMenuItems) //NodeList: a.nav-link[]

const linkAction = () => {
  if (navMenu) navMenu.classList.remove("show-menu");
};

allMenuItems.forEach((node) => node.addEventListener("click", linkAction));

/* swiper*/
const swiper = new Swiper(".home-swiper", {
  loop: true,
  slidesPreview: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
