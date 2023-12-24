const headerEl = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    headerEl.classList.add("header-menu");
  } else {
    headerEl.classList.remove("header-menu");
  }
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

// const swiperReviews = new Swiper(".reviews__slider", {
//   direction: "horizontal",
//   speed: 700,
//   navigation: {
//     nextEl: ".swiper-button-right",
//     prevEl: ".swiper-button-left",
//   },

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   keyboard: {
//     enabled: true,
//   },
// });

// const restaurantsSwiper = new Swiper(".restaurants-swiper", {
//   direction: "horizontal",
//   slidesPerView: 1,
//   speed: 400,
//   pagination: {
//     el: ".swiper-pagination-3",
//     clickable: true,
//   },
//   keyboard: {
//     enabled: true,
//   },
// });

window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const destroySwiper = function () {
      if (swiper !== undefined) {
        swiper.destroy(true, true);
        swiper = undefined;
      }
    };

    const togglePaginationVisibility = function (visible) {
      const paginationElement = document.querySelector(
        swiperSettings.pagination.el
      );
      if (paginationElement) {
        paginationElement.style.display = visible ? "block" : "none";
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        enableSwiper(swiperClass, swiperSettings);
        togglePaginationVisibility(true);
      } else {
        destroySwiper();
        togglePaginationVisibility(false);
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** Swiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 1200px)", ".restaurants-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    speed: 700,
    pagination: {
      el: ".swiper-pag",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
  });

  resizableSwiper("(max-width: 5000px)", ".reviews__slider", {
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
  });
});

var mixer = mixitup(".popular-category__list");
