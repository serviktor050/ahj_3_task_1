import Gamefield from './classes/Gamefield.js';
import Game from './classes/Game.js';

const gameField = new Gamefield(4);
gameField.draw();

const game = new Game(gameField);
game.play();
