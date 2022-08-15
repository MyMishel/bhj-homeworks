"use strict";

const interestCheck = document.querySelectorAll(".interest__check");

for (let interest of interestCheck) {
   const subItems = interest.closest(".interest").querySelectorAll(".interest__check");
   interest.addEventListener("change", () => {
      if (interest.checked) {
         if (subItems) {
            for (let subItem of subItems) {
               subItem.checked = true;
            }
         }
      } else {
         if (subItems) {
            for (let subItem of subItems) {
               subItem.checked = false;
            }
         }
      }
   }
   );
}