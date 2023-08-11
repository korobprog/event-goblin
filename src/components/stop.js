import { Api } from "../components/api"
import { Start } from "../components/start"

let a = new Api();
let b = new Start()
let idInterval = null;


export class Stop {

   stop(m) {
      setTimeout(() => {
         if (confirm(`Вы ${m}. Ещё раз?`)) b.start();
         dead.innerText = lost.innerText = 0;
      });
      a.table.removeEventListener('click', shot);
      clearInterval(idInterval);
   }
}
