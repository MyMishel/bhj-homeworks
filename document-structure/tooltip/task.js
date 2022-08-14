"use strict";

const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach(item => item.addEventListener("click", function (event) {
   event.preventDefault();

   const tooltipList = document.querySelectorAll(".tooltip");
   if (tooltipList[i].classList.contains("tooltip_active")) {
      tooltipList[i].classList.remove("tooltip_active");
   } else {
      tooltipList[i].classList.add("tooltip_active");

      let place = hasTooltip[i].getBoundingClientRect();

      tooltipList[i].style.left = place.left + "px";
      tooltipList[i].style.top = place.top + 20 + "px";
   }
}));

