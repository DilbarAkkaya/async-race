import { createTable } from './table';
import { store } from '../../state/store';
import { createNewElement } from '../../common/utils';
import { renderWinnersAndCount } from './listOfWinners';

function createWinnersMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main';
  parent.append(main);
  return main;
}

const main = createWinnersMain();
const table = createTable();
const titleWinners = createNewElement('h1', { class: 'title' }, 'Winners  ');
const countWinners = createNewElement('span', { class: 'count-win' }, store.dataWinners.count);
const pageWinners = createNewElement('h2', { class: 'subtitle' }, 'Page  ');
const pageNumber = createNewElement('span', { class: 'page-win' }, store.winnersPage);
const tableBody = createNewElement('tbody', { class: 'winner-tbody' });
const subtitleWrapper = createNewElement('div', { class: 'title-win row' });

function createMainElement() {
  titleWinners.append(countWinners);
  pageWinners.append(pageNumber);
  main.append(titleWinners);
  main.append(subtitleWrapper);
  subtitleWrapper.append(pageWinners);
  table.append(tableBody);
  main.append(table);
  return main;
}

export function renderWinnersMain() {
  createMainElement();
  renderWinnersAndCount('.winner-tbody');
  return main;
}
