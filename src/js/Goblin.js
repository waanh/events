export default class Goblin {
    constructor(cells) {
      this.cells = cells;
      this.currentCellIndex = null;
    }
  
    spawn() {
      if (this.currentCellIndex !== null) {
        this.cells[this.currentCellIndex].classList.remove('goblin');
      }
      this.currentCellIndex = Math.floor(Math.random() * this.cells.length);
      this.cells[this.currentCellIndex].classList.add('goblin');
    }
  
    remove() {
      if (this.currentCellIndex !== null) {
        this.cells[this.currentCellIndex].classList.remove('goblin');
        this.currentCellIndex = null;
      }
    }
  }
  