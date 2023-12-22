const headerEl = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    headerEl.classList.add("header-menu");
  } else {
    headerEl.classList.remove("header-menu");
  }
});

new Swiper(".swiper", {
  direction: "horizontal",
  speed: 700,
  navigation: {
    nextEl: ".swiper-button-right",
    prevEl: ".swiper-button-left",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  //Mobile Menu
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".menu");

  const bodyLock = document.querySelector("body");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu--active");
    if (mobileMenu.classList.contains("menu--active")) {
      burger.classList.add("burger--active");

      bodyLock.classList.add("lock");
    } else {
      burger.classList.remove("burger--active");
      bodyLock.classList.remove("lock");
    }
  });
});

var mixer = mixitup(".popular-category__list");
