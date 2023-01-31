import { getWinners } from '../../api/api';
import { store } from '../../state/store';
import { updateState } from '../../state/updateStateGarage';
import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../common/utils';
import { Winner } from './classWinner';
import { LIMIT_WINNERS_ON_PAGE } from '../../common/constants';

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
  const res = await getWinners(store.sort, store.order, page);
  store.dataWinners.items = res.items;
  store.dataWinners.count = res.count;
  const { items } = store.dataWinners;
  items.forEach((item, i) => {
    new Winner((i + 1), item.car.color, item.car.name, item.wins, item.time, item.id, parent).renderWinner();
  });
  const countWinners = document.querySelector('.count-win');
  countWinners.innerHTML = store.dataWinners.count;
  renderPaginationButtons('.title-win');
  updateState('next-win', 'prev-win', store.winnersPage, LIMIT_WINNERS_ON_PAGE, store.dataWinners.count);
}
