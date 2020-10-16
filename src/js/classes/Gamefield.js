import goblin from '../../img/goblin.png';

export default class Gamefield {
  constructor(size) {
    this.size = size ** 2;
    this.previousIndex = 0;
    this.targetIndex = 0;
    this.missedGoblin = 0;
    this.gameField = document.getElementById('gamefield');
  }

  draw() {
    for (let i = 0; i < this.size; i += 1) {
      const targetGameField = document.createElement('div');
      targetGameField.className = 'field';
      targetGameField.id = `field${i}`;
      this.gameField.appendChild(targetGameField);
    }
    this.movingPicture();
  }

  movingPicture() {
    setInterval(() => {
      do {
        this.targetIndex = Math.floor(Math.random() * this.size);
      } while (this.targetIndex === this.previousIndex);

      if (this.previousIndex >= 0) {
        const previousItemField = document.getElementById(`field${this.previousIndex}`);
        previousItemField.innerHTML = '';
      }
      const targetField = document.getElementById(`field${this.targetIndex}`);
      targetField.innerHTML = `<img id="goblin" src="${goblin}">`;
      this.previousIndex = this.targetIndex;
      this.missedGoblin += 1;

      this.gameField.addEventListener('click', () => {
        this.missedGoblin = 0;
      });

      if (this.missedGoblin > 5) {
        clearInterval();
        alert('Вы проиграли =(');
        this.missedGoblin = 0;
      }
    }, 1000);
  }
}
