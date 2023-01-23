import { createTable } from '../../components/table';

export function createWinnersMain() {
  const parent = new DocumentFragment();
  // const winnersPage = createNewElement('body', 'div', {class: 'winners', id: 'winners'});
  const main = document.createElement('main');
  main.innerText = 'Winners';
  parent.append(main);
  return main;
}

const main = createWinnersMain();
console.log(main)
const table = createTable();

export function renderWinnersMain() {
  main.append(table);
  return main;

}