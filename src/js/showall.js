document.addEventListener("DOMContentLoaded", function () {
  const ShowAll = document.querySelector(".showall");
  const hiddenItems = document.querySelectorAll(".slider__hidden, .slider__hidden-2");
  const linkText = ShowAll.querySelector(".showall__link");
  const expandIcon = ShowAll.querySelector("img");

  ShowAll.addEventListener("click", function (e) {
    e.preventDefault();

    const isExpanded = ShowAll.classList.toggle("expanded");

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






