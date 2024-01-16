(function ($) {
  $(function () {
    $(".select-style, .product__buy-num").styler();
  });
})(jQuery);

var $range = $(".js-range-slider"),
  $inputFrom = $(".js-input-from"),
  $inputTo = $(".js-input-to"),
  instance,
  min = 60,
  max = 1100,
  from = 0,
  to = 0;

$range.ionRangeSlider({
  skin: "round",
  type: "double",
  min: min,
  max: max,
  from: 100,
  to: 1000,
  onStart: updateInputs,
  onChange: updateInputs,
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
  from = data.from;
  to = data.to;

  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");

  // validate
  if (val < min) {
    val = min;
  } else if (val > to) {
    val = to;
  }

  instance.update({
    from: val,
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  //carusel
  const myCarousel = new Carousel(document.querySelector("myCarousel"), {
    preload: 2,
    Dots: false,
  });
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,
    closeButton: "top",
    Carousel: {
      Dots: true,
      on: {
        change: (that) => {
          myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
            friction: 0,
          });
        },
      },
    },
  });

  // validate
  if (val < from) {
    val = from;
  } else if (val > max) {
    val = max;
  }

  instance.update({
    to: val,
  });
});
//click tabs
$(".reviews-tabs__top-item").on("click", function (e) {
  e.preventDefault();
  $(".reviews-tabs__top-item").removeClass("reviews-tabs__top-item--active");
  $(this).addClass("reviews-tabs__top-item--active");

  $(".reviews-tabs__content-item").removeClass(
    "reviews-tabs__content-item--active"
  );
  $($(this).attr("href")).addClass("reviews-tabs__content-item--active");
});

//star rate
$(".star").rateYo({
  starWidth: "17px",
  spacing: "6px",
  normalFill: "#C1C1C1",
  ratedFill: "#FFB800",
  readOnly: true, //фиксинг рейтинга
  starSvg:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 17">' +
    '<path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/>' +
    "</svg>",
});
//star fix rate
$(".star-nofix").rateYo({
  starWidth: "17px",
  spacing: "6px",
  normalFill: "#C1C1C1",
  ratedFill: "#FFB800",

  starSvg:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 17 17">' +
    '<path d="M0.0229731 6.16432C0.0780973 5.9946 0.224753 5.87091 0.401315 5.84529L5.36139 5.12451L7.57966 0.629933C7.6586 0.469933 7.82157 0.368652 7.99997 0.368652C8.17841 0.368652 8.34135 0.469933 8.42032 0.629933L10.6387 5.12451L15.5987 5.84529C15.7752 5.87091 15.9219 5.9946 15.977 6.16429C16.0322 6.334 15.9862 6.52028 15.8584 6.64481L12.2694 10.1434L13.1165 15.0834C13.1467 15.2593 13.0744 15.437 12.9301 15.5419C12.8484 15.6012 12.7517 15.6314 12.6545 15.6314C12.5799 15.6314 12.505 15.6136 12.4365 15.5776L8 13.2451L3.56374 15.5775C3.40577 15.6606 3.21443 15.6467 3.07009 15.5419C2.92574 15.437 2.8534 15.2593 2.88356 15.0834L3.73096 10.1434L0.141566 6.64478C0.0138168 6.52028 -0.0322151 6.334 0.0229731 6.16432Z"/>' +
    "</svg>",
});
//navbar
const headerEl = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    headerEl.classList.add("header-menu");
  } else {
    headerEl.classList.remove("header-menu");
  }
});

//swiper
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

  resizableSwiper("(max-width: 768px)", ".restaurants-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    speed: 700,
    pagination: {
      el: ".restaurants__pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
  });
  resizableSwiper("(max-width: 768px)", ".discounts-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    speed: 700,
    pagination: {
      el: ".discounts__pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
  });

  resizableSwiper("(max-width: 15000px)", ".product__slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    direction: "horizontal",
    speed: 700,
    navigation: {
      nextEl: ".product__button-right",
      prevEl: ".product__button-left",
    },
    pagination: {
      el: ".swiper-pagination4",
      clickable: true,
    },
  });

  resizableSwiper("(max-width: 15000px)", ".reviews__slider", {
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

  resizableSwiper("(max-width: 15000px)", ".exclusive-products__swiper", {
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
    breakpoints: {
      200: {
        slidesPerView: 2,
        spaceBetween: 5,
        slidesPerGroup: 5,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
});

//burger
document.addEventListener("DOMContentLoaded", (e) => {
  const bodyLock = document.querySelector("body");
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".menu");
  const burgerClose = document.querySelector(".burger-close");
  const catalogBtn = document.querySelector(".catalog-product__burger");
  const filterMenu = document.querySelector(".catalog-product__box");
  const close = document.querySelector(".catalog-product__burger-close");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("menu--active");
    if (mobileMenu.classList.contains("menu--active")) {
      bodyLock.classList.add("lock");
    }
  });

  burgerClose.addEventListener("click", () => {
    mobileMenu.classList.remove("menu--active");
    bodyLock.classList.remove("lock");
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove("menu--active");
      bodyLock.classList.remove("lock");
    }
  });

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  catalogBtn.addEventListener("click", () => {
    filterMenu.classList.toggle("catalog-product__box--active");
    if (filterMenu.classList.contains("catalog-product__box--active")) {
      catalogBtn.classList.add("catalog-product__burger--active");
      bodyLock.classList.add("lock-catalog");
    }
    close.addEventListener("click", () => {
      filterMenu.classList.remove("catalog-product__box--active");
      bodyLock.classList.remove("lock-catalog");
    });
  });

  document.addEventListener("click", function (e) {
    if (e.target !== catalogBtn && e.target !== filterMenu) {
      catalogBtn.classList.remove("catalog-product__burger--active");
      filterMenu.classList.remove("catalog-product__box--active");
      bodyLock.classList.remove("lock-catalog");
    }
  });
});
//var
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".popular-category")) {
    var mixer = mixitup(".popular-category");
  }
});
