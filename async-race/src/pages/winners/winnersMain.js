import { createTable } from './table';
import { store } from '../../state/store';
import { createNewElement } from '../../common/utils';

const mainTag = createNewElement('main', { class: 'main column' });

function createMainElements() {
  const table = createTable();
  const titleWinners = createNewElement('h1', { class: 'title' }, 'Winners  ');
  const countWinners = createNewElement('span', { class: 'count-win' }, store.dataWinners.count);
  const pageWinners = createNewElement('h2', { class: 'subtitle' }, 'Page  ');
  const pageNumber = createNewElement('span', { class: 'page-win' }, store.winnersPage);
  const tableBody = createNewElement('tbody', { class: 'winner-tbody' });
  const subtitleWrapper = createNewElement('div', { class: 'title-win row' });
  const mainWinner = document.querySelector('.main-winner');
  mainWinner.append(mainTag);
  titleWinners.append(countWinners);
  pageWinners.append(pageNumber);
  mainTag.append(titleWinners);
  mainTag.append(subtitleWrapper);
  subtitleWrapper.append(pageWinners);
  table.append(tableBody);
  mainTag.append(table);
}

export function renderWinnersMain() {
  createMainElements();
  return mainTag;
}
