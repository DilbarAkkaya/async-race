import { getWinners } from '../../api/api';
import { store } from '../../state/store';
import { updateState } from '../../state/updateStateGarage';
import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../common/utils';
import { Winner } from './classWinner';
import { LIMIT_WINNERS_ON_PAGE } from '../../common/constants';

const prev = createButtonElement('btn btn-primary', 'prev-win', 'prev');
prev.setAttribute('disabled', 'true');
const next = createButtonElement('btn btn-primary', 'next-win', 'next');
prev.setAttribute('disabled', 'true');
const paginationContainer = createNewElement('div', { class: 'pagination-win row' });

export function renderPaginationButtons(selector) {
  const parentSelector = document.querySelector(selector);
  paginationContainer.append(prev);
  paginationContainer.append(next);
  parentSelector.append(paginationContainer);
  return paginationContainer;
}

export async function writeWinnersToStore() {
  const response = await getWinners(store.sort, store.order, store.winnersPage);
  store.dataWinners.items = response.items;
  store.dataWinners.count = response.count;
  return store;
}

export async function renderWinnersAndCount(parent) {
  const countWinners = document.querySelector('.count-win');
  const { items, count } = store.dataWinners;
  countWinners.innerHTML = count;
  items.forEach((item, i) => {
    new Winner((i + 1), item.car.color, item.car.name, item.wins, item.time, item.id, parent).renderWinner();
  });
  renderPaginationButtons('.title-win');
  updateState('next-win', 'prev-win', store.winnersPage, LIMIT_WINNERS_ON_PAGE, count);
}
