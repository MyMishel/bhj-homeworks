"use strict";

const links = document.querySelectorAll(".menu__link");//поиск всех элементов с классом

links.forEach((link) => {
   link.onclick = function (event) {
      const elem = document.querySelector(".menu_active");//для закрытия меню
      if (elem) {
         elem.classList.remove("menu_active");
      }
      if (link.closest(".menu__item").querySelector(".menu_sub")) {//обход элементов вверху по DOM дереву.
         link.closest(".menu__item").querySelector(".menu_sub").classList.toggle("menu_active");//распахивание меню
         return false;//отменяет поведение по умолчанию
      }
   };
});
