import { createNewElement } from '../../utils';

export class Winner {
  constructor(i, carImg, carName, wins, bestTime, parent) {
    this.i = i;
    this.carImg = carImg;
    this.carName = carName;
    this.wins = wins;
    this.bestTime = bestTime;
    this.parent = document.querySelector(parent);
  }

  renderCar() {
    const winnerInstance = createNewElement('tr', { class: 'winner-item' });
    winnerInstance.innerHTML = `
    <td>${this.i}</td>
    <td>${this.carImg}</td>
    <td>${this.carName}</td>
    <td>${this.wins}</td>
    <td>${this.bestTime}</td>
    `;
    this.parent.append(winnerInstance);
}
}