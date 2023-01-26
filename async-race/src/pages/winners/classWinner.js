import { createNewElement } from '../../utils';
import { renderCarImage } from '../garage/carImage';

export class Winner {
  constructor(i, color, name, wins, bestTime, id, parent) {
    this.i = i;
    this.color = color;
    this.name = name;
    this.wins = wins;
    this.bestTime = bestTime;
    this.id = id;
    this.parent = document.querySelector(parent);
  }

  renderWinner() {
    const winnerInstance = createNewElement('tr', { class: 'winner-item' });
    const tdNum = createNewElement('td', { class: 'td-num' }, this.i);
    const tdImg = createNewElement('td', { class: 'td-img' });
    const tdName = createNewElement('td', { class: 'td-name' }, this.name);
    const tdWins = createNewElement('td', { class: 'td-wins' }, this.wins);
    const tdTime = createNewElement('td', { class: 'td-time' }, `${this.bestTime}`);
    winnerInstance.append(tdNum);
    tdImg.append(renderCarImage(this.color, this.id));
    winnerInstance.append(tdImg);
    winnerInstance.append(tdName);
    winnerInstance.append(tdWins);
    winnerInstance.append(tdTime);
    this.parent.append(winnerInstance);
  }
}
