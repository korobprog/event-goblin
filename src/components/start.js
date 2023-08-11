import { Api } from "./api"
import { Logic } from "./logic";

let api = new Api();
let logic = new Logic()
let idInterval = null;

export class Start {

   start() {
      idInterval = setInterval(() => logic.cls(api.cells[logic.rand(api.cells.length)]), 1000);
      api.table.addEventListener('click', logic.shot());
   }
}
