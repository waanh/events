import Game from './Game';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const scoreElement = document.querySelector('.score');
    const missElement = document.querySelector('.misses');
  
    const game = new Game(board, scoreElement, missElement);
  });