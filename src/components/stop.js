import { Api } from "../components/api"
import { Start } from "../components/start"
import { Logic } from "./logic";

let api = new Api();
let start = new Start()
let logic = new Logic()
let idInterval = null;

export class Stop {

   stop(m) {
      setTimeout(() => {
         if (confirm(`Вы ${m}. Ещё раз?`)) start.start();
         api.dead.innerText = api.lost.innerText = 0;
      });
      api.table.removeEventListener('click', logic.shot());
      clearInterval(idInterval);
   }
}
