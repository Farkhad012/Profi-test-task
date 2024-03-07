let burgerMenuIcon = document.querySelector(".burger__menu-icon");
let headerMenu = document.querySelector(".header__menu");
let menuHeader = document.querySelector(".menu__header");
let menuItem = document.querySelectorAll(".menu__item");

burgerMenuIcon.addEventListener("click", function (e) {
  headerMenu.classList.toggle("open");

  e.stopPropagation(); // Остановка всплытия события, чтобы не срабатывал document.click
});

// Обработчик события для каждого элемента .menu__item
menuItem.forEach(function(item) {
  item.addEventListener("click", function() {
    headerMenu.classList.remove("open");
  });
});

document.addEventListener("click", function (e) {
  if (!burgerMenuIcon.contains(e.target) && !headerMenu.contains(e.target)) {
    headerMenu.classList.remove("open");
  }
});

