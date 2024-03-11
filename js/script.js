let burgerMenuIcon = document.querySelector(".burger__menu-icon");
let headerMenu = document.querySelector(".header__menu");
let menuHeader = document.querySelector(".menu__header");
let menuItem = document.querySelectorAll(".menu__item");

burgerMenuIcon.addEventListener("click", function (e) {
  headerMenu.classList.toggle("open");

  e.stopPropagation(); // Остановка всплытия события, чтобы не срабатывал document.click
});

// Обработчик события для каждого элемента .menu__item
menuItem.forEach(function (item) {
  item.addEventListener("click", function () {
    headerMenu.classList.remove("open");
  });
});

document.addEventListener("click", function (e) {
  if (!burgerMenuIcon.contains(e.target) && !headerMenu.contains(e.target)) {
    headerMenu.classList.remove("open");
  }
});

// Выкатываем заголовок при загрузке страницы

document.addEventListener("DOMContentLoaded", function () {
  // Сохраняем ссылки на элементы
  var title = document.querySelector('.title');
  var aboutSteps = document.querySelector('.about__steps');
  var btnBlack = document.querySelector('.btn__black');
  var menuHeader = document.querySelector('.menu__header');

  // Отображаем анимированный заголовок и другие элементы после загрузки страницы
  setTimeout(function () {
    animateElement(title, 'left', '0');
    animateElement(title, 'opacity', '1');

    animateElement(aboutSteps, 'left', '0');
    animateElement(aboutSteps, 'opacity', '1');

    animateElement(btnBlack, 'opacity', '1');

    // animateElement(menuHeader, 'opacity', '1');
    
  }, 500);

  // Функция для анимации элемента
  function animateElement(element, property, value) {
    element.style[property] = value;
  }

});
  


