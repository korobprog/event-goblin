interface DOMElements {
  table: HTMLTableElement;
  dead: HTMLElement;
  lost: HTMLElement;
  cells: NodeListOf<HTMLTableCellElement>;
  audio: HTMLAudioElement;
}

 class Api {

  private elements: DOMElements;
  target: any;
  dead: any;
  audio: any;
  lost: any;
  table: any;
  cells: any;

  constructor() {
    const ids = ['table', 'dead', 'lost'];

    this.elements = ids.reduce < DOMElements > ((acc: any, id) => {
      acc[id] = document.getElementById(id)!;
      return acc;
    }, {} as DOMElements);

    this.elements.audio = new Audio(
      'https://www.rajastore.ru/wp-content/uploads/2023/08/10691.mp3'
    );

    this.elements.cells = this.elements.table.querySelectorAll('td');
  }

}
export { Api };