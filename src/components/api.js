class Api {
  constructor() {
    const [table, dead, lost] = ['table', 'dead', 'lost'].map((id) =>
      document.getElementById(id));

    this.table = table;
    this.dead = dead;
    this.lost = lost;

    this.cells = this.table.querySelectorAll('td');

    this.audio = new Audio(
      'https://www.rajastore.ru/wp-content/uploads/2023/08/10691.mp3');

    this.idInterval = null;

  }

}

export { Api };