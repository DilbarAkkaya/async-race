import { getWinners, getCar } from '../../api/api';
import { store } from '../../state/store';
import { updateStateGarage } from '../../state/updateStateGarage';
import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { Winner } from './classWinner';

const prev = createButtonElement({ class: 'btn btn-primary', id: 'prev-win', disabled: true }, 'prev');
const next = createButtonElement({ class: 'btn btn-primary', id: 'next-win', disabled: true }, 'next');
const paginationContainer = createNewElement('div', { class: 'pagination-container' });

export function renderPaginationButtons(selector) {
  const parentSelector = document.querySelector(selector);
  paginationContainer.append(prev);
  paginationContainer.append(next);
  parentSelector.append(paginationContainer);
  return paginationContainer;
}

export async function renderWinnersAndCount(parent, page) {
  const res = await getWinners(page);
  store.dataWinners.items = res.items;
  store.dataWinners.count = res.count;
  //const car = await getCar(store.dataWinners.items.id)
  console.log(store)
  const { items } = store.dataWinners;
  items.forEach((item, i) => new Winner((i + 1), item.carImg, item.carName, item.wins, item.bestTime, parent).renderCar());
  const countWinners = document.querySelector('.count-win');
  countWinners.innerHTML = store.dataWinners.count;
  renderPaginationButtons('.main');
 // updateStateGarage('next', 'prev');
}
