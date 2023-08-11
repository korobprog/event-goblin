import { Api } from "./api";

let a = new Api()
a.apiPars()

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
      a.dead.innerText = Number(dead.innerText) + 1;
      audio.play();
    } else {
      a.lost.innerText = Number(lost.innerText) + 1;
      a.audio.play();
    }

    if (Number(dead.innerText) === 10) stop('выиграли');
    if (Number(lost.innerText) === 10) stop('проиграли');
  }
}
