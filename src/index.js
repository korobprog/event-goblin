import './css/styles.css';
import './js/app';

//import { Field } from "./components/Field"


/* const game = new Field();
game.render(); */



/* import { Logic } from './components/logic';
import { Start } from './components/start';
import { Stop } from './components/stop';
import { Api } from './components/api';

const api = new Api(logic.rand(5));
const logic = new Logic(logic.cls(api.cells[0]));
const start = new Start(start.start());
const stop = new Stop(stop.stop('проиграли')); */



/* const [table, dead, lost] = ['table', 'dead', 'lost'].map(id => document.getElementById(id));
const cells = table.querySelectorAll('td');
const audio = new Audio("https://www.rajastore.ru/wp-content/uploads/2023/08/10691.mp3"); 

let idInterval = null;
 
function rand(n) {
    return Math.floor(Math.random() * n);
} 
 
function cls(elem) {
    elem.classList.add('hole');
    setTimeout(() => elem.classList.remove('hole'), 500);
}
 
function shot(e) {
    if(e.target.classList.contains('hole')) {
      dead.innerText = Number(dead.innerText) + 1;
      audio.play();
    } 
    else { 
      lost.innerText = Number(lost.innerText) + 1;
      audio.play();
    }
    
    
    if(Number(dead.innerText) === 10) stop('выиграли');
    if(Number(lost.innerText) === 10) stop('проиграли');   
} 

 function start() {
    idInterval = setInterval(() => cls(cells[rand(cells.length)]), 1000);
    table.addEventListener('click', shot);
}
 
function stop(m) {
    setTimeout(() => {
        if(confirm(`Вы ${m}. Ещё раз?`)) start();
        dead.innerText = lost.innerText = 0;
    });
    table.removeEventListener('click', shot);
    clearInterval(idInterval);      
} 

start() */


