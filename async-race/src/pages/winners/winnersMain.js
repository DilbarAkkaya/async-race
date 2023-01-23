import { createTable } from '../../components/table';
import { store } from '../../state/store';
import { createNewElement } from '../../utils';

export function createWinnersMain() {
  const parent = new DocumentFragment();
  // const winnersPage = createNewElement('body', 'div', {class: 'winners', id: 'winners'});
  const main = document.createElement('main');
  parent.append(main);
  return main;
}

const main = createWinnersMain();
const table = createTable();
const titleWinners = createNewElement('h1', { class: 'title' }, 'Winners  ');
const countWinners = createNewElement('span', { class: 'count' });
const pageWinners = createNewElement('h2', { class: 'subtitle' }, 'Page  ');
const pageNumber = createNewElement('span', { class: 'page' }, store.winnersPage);

export function renderWinnersMain() {
  titleWinners.append(countWinners);
  pageWinners.append(pageNumber);
  main.append(titleWinners);
  main.append(pageWinners);
  main.append(table);
  return main;
}
