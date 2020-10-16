export default class Game {
  constructor(game) {
    this.game = game;
    this.killGoblin = 0;
    this.looser = 0;
  }

  play() {
    const quantity = document.getElementById('quantity');
    const looserGoblin = document.getElementById('looser_goblin');

    this.game.gameField.addEventListener('click', (event) => {
      if (event.target.id === 'goblin') {
        this.killGoblin += 1;
        quantity.innerHTML = this.killGoblin;
        const targetElement = event.target;
        targetElement.parentNode.innerHTML = '';
      } else if (event.target.id !== 'goblin') {
        this.looser += 1;
        looserGoblin.innerHTML = this.looser;
      }
      if (this.killGoblin === 10) {
        alert('Вы победили!');
        this.killGoblin = 0;
        this.looser = 0;
        quantity.innerText = 0;
        looserGoblin.innerText = 0;
      }
      if (this.looser > 4) {
        alert('Вы проиграли =(');
        this.killGoblin = 0;
        this.looser = 0;
        quantity.innerText = 0;
        looserGoblin.innerText = 0;
      }
    });
  }
}
