import { Api } from "./api";
import { Stop } from "./stop";

let api = new Api()
let stop = new Stop()

export class Logic {

  rand(n) {
    return Math.floor(Math.random() * n);
  }

  cls(elem) {
    elem.classList.add('hole');
    setTimeout(() => elem.classList.remove('hole'), 500);
  }

  shot(e) {
    if (e.target.classList.contains('hole')) {
      api.dead.innerText = Number(api.dead.innerText) + 1;
      api.audio.play();
    } else {
      api.lost.innerText = Number(api.lost.innerText) + 1;
      api.audio.play();
    }

    if (Number(api.dead.innerText) === 10) stop('выиграли');
    if (Number(api.lost.innerText) === 10) stop('проиграли');
  }
}
