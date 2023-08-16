/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/image/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/GamePlay.js

class GamePlay {
  constructor() {
    this.gameEls = {
      hits: null,
      skip: null,
      gameBoard: null,
      startBtn: null,
      gameMessage: null,
      goblin: null
    };
    this.startBtnListeners = [];
    this.gameBoardListeners = [];
    this.boardSize = 4;
    this.cells = [];
    this.audio = new Audio("https://www.rajastore.ru/wp-content/uploads/2023/08/10691.mp3");
  }
  init() {
    this.gameEls.startBtn = document.querySelector('.start');
    this.gameEls.startBtn.addEventListener('click', this.onStartBtnClick.bind(this));
    this.gameEls.hits = document.querySelector('.hits');
    this.gameEls.skip = document.querySelector('.skip');
    this.gameEls.gameBoard = document.querySelector('.game-board');
    this.gameEls.gameBoard.addEventListener('click', this.onGameBoardClick.bind(this));
    this.gameEls.gameMessage = document.querySelector('.game-message');
    this.createGoblin();
    this.drawBoard();
  }
  onStartBtnClick() {
    this.startBtnListeners.forEach(callback => callback());
  }
  onGameBoardClick(event) {
    this.gameBoardListeners.forEach(callback => {
      callback(event.target);
      this.audio.play();
    });
  }
  setInitialValues(skipCount) {
    this.gameEls.hits.textContent = '0';
    this.gameEls.skip.textContent = `${skipCount}`;
  }
  setHitsValue(value) {
    this.gameEls.hits.textContent = `${value}`;
  }
  setSkipValue(value) {
    this.gameEls.skip.textContent = `${value}`;
  }
  showGameMessage() {
    this.gameEls.gameMessage.classList.remove('hidden');
  }
  hideGameMessage() {
    this.gameEls.gameMessage.classList.add('hidden');
  }
  drawBoard() {
    for (let i = 0; i < this.boardSize ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.cells.push(cell);
    }
    this.gameEls.gameBoard.append(...this.cells);
  }
  createGoblin() {
    this.gameEls.goblin = document.createElement('img');
    this.gameEls.goblin.classList.add('goblin');
    this.gameEls.goblin.classList.add('custom-cursor');
    this.gameEls.goblin.src = goblin_namespaceObject;
  }
  showGoblin() {
    this.gameEls.goblin.classList.remove('hidden');
  }
  hideGoblin() {
    this.gameEls.goblin.classList.add('hidden');
  }
  moveGoblin(position) {
    this.cells[position].append(this.gameEls.goblin);
  }
}
;// CONCATENATED MODULE: ./src/js/Position.js
class Position {
  constructor() {
    this.prevRandomPosition = 0;
  }
  getRandomPosition() {
    let randomPosition;
    do randomPosition = Math.floor(Math.random() * 16); while (this.prevRandomPosition === randomPosition);
    this.prevRandomPosition = randomPosition;
    return randomPosition;
  }
}
;// CONCATENATED MODULE: ./src/js/GameController.js

class GameController {
  constructor(gamePlay) {
    this.gamePlay = gamePlay;
    this.isGameRunning = false;
    this.goblinDelay = 1000;
    this.position = new Position();
    this.try = {
      success: false
    };
    this.hits = 0;
    this.skip = {
      maxCount: 5,
      currentCount: undefined
    };
  }
  init() {
    this.gamePlay.init();
    this.gamePlay.startBtnListeners.push(this.onStartBtnClick.bind(this));
    this.gamePlay.gameBoardListeners.push(this.onGameBoardClick.bind(this));
    this.gamePlay.setInitialValues(this.skip.maxCount);
  }
  onStartBtnClick() {
    if (this.isGameRunning) return;
    this.isGameRunning = true;
    this.gamePlay.setInitialValues(this.skip.maxCount);
    this.hits = 0;
    this.skip.currentCount = this.skip.maxCount;
    this.gamePlay.hideGameMessage();
    setTimeout(() => {
      this.gamePlay.showGoblin();
      this.gamePlay.moveGoblin(this.position.getRandomPosition());
      const intervalID = setInterval(() => {
        if (!this.try.success) {
          this.skip.currentCount -= 1;
          this.gamePlay.setSkipValue(this.skip.currentCount);
          if (this.skip.currentCount === 0) {
            clearInterval(intervalID);
            this.gamePlay.hideGoblin();
            this.gamePlay.showGameMessage();
            this.isGameRunning = false;
          }
        }
        this.try.success = false;
        this.gamePlay.moveGoblin(this.position.getRandomPosition());
      }, this.goblinDelay);
    }, this.goblinDelay);
  }
  onGameBoardClick(target) {
    if (!this.isGameRunning) return;
    if (this.try.success) return;
    if (target.classList.contains('goblin')) {
      this.try.success = true;
      this.hits += 1;
      this.gamePlay.setHitsValue(this.hits);
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const gamePlay = new GamePlay();
const gameCtrl = new GameController(gamePlay);
gameCtrl.init();
;// CONCATENATED MODULE: ./src/index.js



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
/******/ })()
;