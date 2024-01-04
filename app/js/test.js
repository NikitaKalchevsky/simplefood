//burger menu
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".menu");
  const menuTopImg = document.querySelector(".burger-close");
  const bodyLock = document.querySelector("body");

  const catalogProductBurger = document.querySelector(
    ".catalog-product__burger"
  );
  const catalogProductBox = document.querySelector(".catalog-product__box");
  const catalogProductBurgerClose = document.querySelector(
    ".catalog-product__burger-close"
  );

  // Код для Mobile Menu и для блокировки от прокрутки
  burger.addEventListener("click", (e) => {
    if (e.target !== catalogProductBurger) {
      mobileMenu.classList.toggle("menu--active");
      if (mobileMenu.classList.contains("menu--active")) {
        bodyLock.classList.add("lock");
        bodyLock.classList.add("lock");
      } else {
        bodyLock.classList.remove("lock");
      }
    }
  });

  //закрытие меню
  menuTopImg.addEventListener("click", () => {
    mobileMenu.classList.remove("menu--active");
    bodyLock.classList.remove("lock");
  });
  //закрытие меню по клику
  document.addEventListener("click", function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove("menu--active");
      bodyLock.classList.remove("lock");
    }
  });

  // Код для Catalog Product Menu open menu
  catalogProductBurger.addEventListener("click", () => {
    catalogProductBurger.classList.toggle("catalog-product__burger--active");
    catalogProductBox.classList.toggle("catalog-product__box--active");
  });
  // closed menu
  catalogProductBurgerClose.addEventListener("click", () => {
    catalogProductBurger.classList.remove("catalog-product__burger--active");
    catalogProductBox.classList.remove("catalog-product__box--active");
  });
});
