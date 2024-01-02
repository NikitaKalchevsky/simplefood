(function ($) {
  $(function () {
    $(".select-style").styler();
  });
})(jQuery);

var $range = $(".js-range-slider"),
  $inputFrom = $(".js-input-from"),
  $inputTo = $(".js-input-to"),
  instance,
  min = 0,
  max = 1200,
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

const headerEl = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    headerEl.classList.add("header-menu");
  } else {
    headerEl.classList.remove("header-menu");
  }
});

//burger menu
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".menu");
  const menuTopImg = document.querySelector(".burger-close");
  const bodyLock = document.querySelector("body");

  const catalogProductBurger = document.querySelector(
    ".catalog-product__burger"
  );
  const catalogProductBurgerClose = document.querySelector(
    ".catalog-product__burger-close"
  );
  const catalogProductBox = document.querySelector(".catalog-product__box");

  // Код для Mobile Menu
  burger.addEventListener("click", (e) => {
    if (e.target !== catalogProductBurger) {
      mobileMenu.classList.toggle("menu--active");
      if (mobileMenu.classList.contains("menu--active")) {
        bodyLock.classList.add("lock");
      } else {
        bodyLock.classList.remove("lock");
      }
    }
  });

  menuTopImg.addEventListener("click", () => {
    mobileMenu.classList.remove("menu--active");
    bodyLock.classList.remove("lock");
  });

  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove("menu--active");
      bodyLock.classList.remove("lock");
    }
  });

  // Код для Catalog Product Menu
  catalogProductBurger.addEventListener("click", () => {
    catalogProductBurger.classList.toggle("catalog-product__burger--active");
    catalogProductBox.classList.toggle("catalog-product__box--active");
  });

  catalogProductBurgerClose.addEventListener("click", () => {
    catalogProductBurger.classList.remove("catalog-product__burger--active");
    catalogProductBox.classList.remove("catalog-product__box--active");
  });
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

var mixer = mixitup(".popular-category");
