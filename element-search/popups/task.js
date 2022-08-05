"use strict";

const main = document.getElementById("modal_main");
const success = document.getElementById("modal_success");
const close = Array.from(document.getElementsByClassName("modal__close"));
const show = Array.from(document.getElementsByClassName("show-success"));

main.classList = "modal modal_active";

for (let i = 0; i < close.length; i++)
   close[i].onclick = () => {
      close[i].closest(".modal").className = "modal";
      if (close[i] === show[0])
         success.className = "modal modal_active";
   }

