import { Api } from "./api";

let api = new Api()

export class Logic {

  rand(n) {
    return Math.floor(Math.random() * n);
  }

  cls(elem) {
    if (elem) {
      api.cells.classList.add("hole");
      setTimeout(() => api.cells.classList.remove("hole"), 500);
    }

  }

  shot(e) {
    if (e) {
      if (api.target.classList.contains('hole')) {
        api.dead.innerText = Number(api.dead.innerText) + 1;
        api.audio.play();
      } else {
        api.lost.innerText = Number(api.lost.innerText) + 1;
        api.audio.play();
      }
    }


    if (Number(api.dead.innerText) === 10) stop('выиграли');
    if (Number(api.lost.innerText) === 10) stop('проиграли');
  }
}
