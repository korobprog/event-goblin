import { Api } from "../components/api"

let a = new Api();
let idInterval = null;

export class Stop {

   stop(m) {
      setTimeout(() => {
         if (confirm(`Вы ${m}. Ещё раз?`)) start();
         dead.innerText = lost.innerText = 0;
      });
      a.table.removeEventListener('click', shot);
      clearInterval(idInterval);
   }
}
