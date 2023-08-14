import { Api } from "./api/api";

class Logic {
  private api: Api;

  constructor(api: Api) {
    this.api = api;
  }

  rand(n: number): number {
    return Math.floor(Math.random() * n);
  }

  cls(elem: HTMLElement | undefined) {
    if (elem) {
      elem.classList.add("hole");
      setTimeout(() => {
        elem.classList.remove("hole"); 
      }, 500);
    }
  }

  shot(e: Event) {
    if (e) {
      if (this.api.target.classList.contains('hole')) {
        this.api.dead.innerText = 
          (Number(this.api.dead.innerText) + 1).toString(); 
        this.api.audio.play();
      } else {
        this.api.lost.innerText =
          (Number(this.api.lost.innerText) + 1).toString();
        this.api.audio.play();  
      }
    }
  }
}

export { Logic };