import { Api } from "../components/api";
import { Start } from "../components/start";
import { Logic } from "./logic";

class Stop {
   constructor() {
      this.api = new Api();
      this.start = new Start();
      this.logic = new Logic();
   }

   stop(m) {
      setTimeout(() => {
         if (confirm(`Вы ${m}. Ещё раз?`)) {
            this.start.start();
         }
         this.api.dead.innerText = this.api.lost.innerText = 0;
      }, 0);

      this.api.table.removeEventListener('click', this.logic.shot);
      clearInterval(this.api.idInterval);
   }
}

export { Stop };