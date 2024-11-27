import Game from './Game';
import '../css/styles.css';

const board = document.querySelector('.board');
const scoreElement = document.querySelector('.score');
const missElement = document.querySelector('.misses');

const game = new Game(board, scoreElement, missElement);
