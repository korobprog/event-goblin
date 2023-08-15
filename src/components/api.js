const [table, dead, lost] = ['table', 'dead', 'lost'].map((id) =>
  document.getElementById(id));
const cells = table.querySelectorAll('td');
const audio = new Audio(
  'https://www.rajastore.ru/wp-content/uploads/2023/08/10691.mp3');
const idInterval = null;

export class Api {

  table = table;
  dead = dead;
  lost = lost;
  cells = cells;
  audio = audio;
  idInterval = idInterval;

  apiPars() {
    this.table;
    this.dead;
    this.lost;
    this.cells;
    this.audio;
    this.idInterval;
  }
}
