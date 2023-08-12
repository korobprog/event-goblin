import { Api } from "./api"; 
import { Start } from "./start";
import { Logic } from "./logic";

export class Stop {

  private api: Api;
  private start: Start;
  private logic: Logic;
  private idInterval: NodeJS.Timer | null;

  constructor(api: Api, start: Start, logic: Logic) {
    this.api = api;
    this.start = start; 
    this.logic = logic;
    this.idInterval = null;
  }

  stop(message: string) {
    setTimeout(() => {
      if (confirm(`Вы ${message}. Ещё раз?`)) {
        this.start.start();
      }
      this.api.dead.innerText = this.api.lost.innerText = '0'; 
    }, 0);

    this.api.table.removeEventListener('click', this.logic.shot); 
    if (this.idInterval) {
      clearInterval(this.idInterval);
    }
  }

}