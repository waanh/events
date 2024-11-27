import Goblin from './Goblin';

export default class Game {
  constructor(board, scoreElement, missElement) {
    this.board = board;
    this.scoreElement = scoreElement;
    this.missElement = missElement;
    this.cells = Array.from(board.children);
    this.goblin = new Goblin(this.cells);
    this.score = 0;
    this.misses = 0;
    this.timer = null;
    this.init();
  }

  init() {
    this.cells.forEach((cell) =>
      cell.addEventListener('click', (event) => this.hit(event))
    );
    this.start();
  }

  start() {
    this.timer = setInterval(() => this.nextTurn(), 1000);
  }

  nextTurn() {
    if (this.goblin.currentCellIndex !== null) {
      this.misses++;
      this.updateMisses();
    }

    if (this.misses >= 5) {
      this.gameOver();
      return;
    }

    this.goblin.spawn();
  }

  hit(event) {
    const cell = event.target;
    if (cell.classList.contains('goblin')) {
      this.score++;
      this.updateScore();
      this.goblin.remove();
    }
  }

  updateScore() {
    this.scoreElement.textContent = this.score;
  }

  updateMisses() {
    this.missElement.textContent = this.misses;
  }

  gameOver() {
    clearInterval(this.timer);
    alert('Game Over!');
  }
}
