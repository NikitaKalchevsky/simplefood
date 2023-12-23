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

new Swiper(".slider-reviews", {
  direction: "horizontal",
  speed: 700,

  pagination: {
    el: ".swiper-pagination-2",
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

// window.addEventListener("DOMContentLoaded", () => {
//   const resizableSwiper = (
//     breakpoint,
//     swiperClass,
//     swiperSettings,
//     callback
//   ) => {
//     let swiper;

//     breakpoint = window.matchMedia(breakpoint);

//     const enableSwiper = function (className, settings) {
//       swiper = new Swiper(className, settings);

//       if (callback) {
//         callback(swiper);
//       }
//     };

//     const checker = function () {
//       if (breakpoint.matches) {
//         return enableSwiper(swiperClass, swiperSettings);
//       } else {
//         if (swiper !== undefined) swiper.destroy(true, true);
//         return;
//       }
//     };

//     breakpoint.addEventListener("change", checker);
//     checker();
//   };

//   const someFunc = (instance) => {
//     if (instance) {
//       instance.on("slideChange", function (e) {
//         console.log("*** Swiper.activeIndex", instance.activeIndex);
//       });
//     }
//   };
//   resizableSwiper("(max-width: 768px)", ".swiper3", {
//     slidesPerView: 1,
//     direction: "horizontal",
//     speed: 700,
//     pagination: {
//       el: ".swiper-pagination-3",
//       clickable: true,
//     },
//   });

//   resizableSwiper("(max-width: 1200px)", ".swiper2", {
//     direction: "horizontal",
//     speed: 700,

//     pagination: {
//       el: ".swiper-pagination-2",
//       clickable: true,
//     },
//   });

//   resizableSwiper("(max-width: 3000px)", ".swiper", {
//     direction: "horizontal",
//     speed: 700,
//     navigation: {
//       nextEl: ".swiper-button-right",
//       prevEl: ".swiper-button-left",
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// });

var mixer = mixitup(".popular-category__list");
