import { Api } from "./api.js";
import { Stop } from "./stop.js";

class Logic {

  constructor() {
    this.api = new Api()
    this.stop = new Stop()
  }

  rand(n) {
    return Math.floor(Math.random() * n);
  }

  cls(elem) {
    elem.classList.add('hole');
    setTimeout(() => elem.classList.remove('hole'), 500);
  }

  shot(e) {
    if (e.target.classList.contains('hole')) {
      this.api.dead.innerText = Number(this.api.dead.innerText) + 1;
      this.api.audio.play();
    } else {
      this.api.lost.innerText = Number(this.api.lost.innerText) + 1;
      this.api.audio.play();
    }

    if (Number(this.api.dead.innerText) === 10) this.stop('выиграли');
    if (Number(this.api.lost.innerText) === 10) this.stop('проиграли');
  }
}



export { Logic };
