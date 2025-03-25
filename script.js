if (window.innerWidth < 768) {
  new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const swiper_css = document.querySelector(
  'link[href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"]'
);

function switcherCSS() {
  if (window.innerWidth > 768) {

    swiper_css.disabled = true; // Отлючил
  } else {
    swiper_css.disabled = false; // Включил CSS
  }
}

window.addEventListener("DOMContentLoaded", switcherCSS);

window.addEventListener("resize", switcherCSS);

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-wrapper", {
    slidesPerView: auto,
    spaceBetween: 20,
    freeMode: true,
    resistance: true,
    resistanceRatio: 0.5,
    centeredSlides: false,
    mousewheel: {
      forceToAxis: true,
    },
  });
});

//показать все-скрыть
document.addEventListener("DOMContentLoaded", function () {
  const mainShowAll = document.querySelector(".main__showall");
  const hiddenItems = document.querySelectorAll(".main__hidden");
  const linkText = mainShowAll.querySelector(".main__link");
  const expandIcon = mainShowAll.querySelector("img");

  mainShowAll.addEventListener("click", function (e) {
    e.preventDefault();

    const isExpanded = mainShowAll.classList.toggle("expanded");

    hiddenItems.forEach((item) => {
      item.style.display = isExpanded ? "flex" : "none";
    });

    linkText.textContent = isExpanded ? "Скрыть" : "Показать все";

    if (window.swiper) {
      setTimeout(() => {
        window.swiper.update();
      }, 100);
    }
  });
});
