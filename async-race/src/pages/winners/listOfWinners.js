import { getWinners, getCar } from '../../api/api';
import { store } from '../../state/store';
import { updateStateWinners } from '../../state/updateStateGarage';
import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { Winner } from './classWinner';

const prev = createButtonElement({ class: 'btn btn-primary', id: 'prev-win', disabled: true }, 'prev');
const next = createButtonElement({ class: 'btn btn-primary', id: 'next-win', disabled: true }, 'next');
const paginationContainer = createNewElement('div', { class: 'pagination-win row' });

export function renderPaginationButtons(selector) {
  const parentSelector = document.querySelector(selector);
  paginationContainer.append(prev);
  paginationContainer.append(next);
  parentSelector.append(paginationContainer);
  return paginationContainer;
}

export async function renderWinnersAndCount(parent, page) {
  // console.log(store.order)
  const res = await getWinners(store.sort, store.order, page);
  console.log(store);
  console.log(store.order);
  store.dataWinners.items = res.items;
  store.dataWinners.count = res.count;
  console.log(res);
  const { items } = store.dataWinners;
  items.forEach((item, i) => {
    new Winner((i + 1), item.car.color, item.car.name, item.wins, item.time, item.id, parent).renderWinner();
  });
  const countWinners = document.querySelector('.count-win');
  countWinners.innerHTML = store.dataWinners.count;
  renderPaginationButtons('.title-win');
  updateStateWinners('next-win', 'prev-win');
}
