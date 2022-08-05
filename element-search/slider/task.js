"use strict";

const slider = document.querySelectorAll(".slider__item");// слайды (фото)
const previousSlide = document.getElementsByClassName("slider__arrow_prev")[0];//предыдущий слайд
const nextSlide = document.getElementsByClassName("slider__arrow_next")[0];//следующий слайд

let index = 0;//Начальное положение

function activeSlide() {
   slider[index].className = "slider__item slider__item_active";
}

previousSlide.onclick = function () {//Функция переключения на след. слайд
   slider[index].className = "slider__item";
   index--;
   if (index < 0) {
      index = slider.length - 1;
   }
   activeSlide();
}

nextSlide.onclick = function () {//Функция переключения на предыдущ. слайд
   slider[index].className = "slider__item";
   index++;
   if (index >= slider.length) {
      index = 0;
   }
   activeSlide();
}
