import { Api } from "./api"
import { Logic } from "./logic";

class Start {
   constructor() {
      this.api = new Api();
      this.logic = new Logic();
   }

   start() {
      this.api.idInterval = setInterval(() => this.logic.cls(this.api.cells[this.logic.rand(this.api.cells.length)]), 1000);
      api.table.addEventListener('click', this.logic.shot);
   }
}


export { Start };