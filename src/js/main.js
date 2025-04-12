document.addEventListener("DOMContentLoaded", function () {
  const ShowAll = document.querySelector(".showall-2");
  const hiddenItems = document.querySelectorAll(".hidden2");
  const linkText = ShowAll.querySelector(".showall-2__link");
  const expandIcon = ShowAll.querySelector(".showall-2__img");

  ShowAll.addEventListener("click", function (e) {
    e.preventDefault();

    const isExpanded = ShowAll.classList.toggle("expanded");

    hiddenItems.forEach((item) => {
      item.style.display = isExpanded ? "flex" : "none";
    });

    linkText.textContent = isExpanded ? "Скрыть" : "Читать далее";

    if (window.swiper) {
      setTimeout(() => {
        window.swiper.update();
      }, 100);
    }
  });
});






