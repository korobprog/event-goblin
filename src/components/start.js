import { Api } from "./api"

let a = new Api();

export class Start {

   start() {
      a.idInterval = setInterval(() => cls(cells[rand(cells.length)]), 1000);
      a.table.addEventListener('click', shot);
   }
}
