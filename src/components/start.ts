import { Api } from "./api";
import { Logic } from "./logic";

export class Start {

   private api: Api;
   private logic: Logic;
   private idInterval: NodeJS.Timer | null;

   constructor(api: Api, logic: Logic) {
      this.api = api;
      this.logic = logic;
      this.idInterval = null;
   }

   start() {
      this.idInterval = setInterval(() => {
         this.logic.cls(this.api.cells[this.logic.rand(this.api.cells.length)]);
      }, 1000);

      this.api.table.addEventListener('click', (e: any) => {
         this.logic.shot(e);
      });
   }

}