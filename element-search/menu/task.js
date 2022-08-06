"use strict";

const links = document.querySelectorAll(".menu__link");//поиск всех элементов с классом

links.forEach((link) => {
   link.onclick = function (event) {
      if (link.closest(".menu__item").querySelector(".menu_sub")) {//обход элементов вверху по DOM дереву.
         link.closest(".menu__item").querySelector(".menu_sub").classList.toggle("menu_active");//распахивание меню
         return false;//отменяет поведение по умолчанию
      }
   };
});

