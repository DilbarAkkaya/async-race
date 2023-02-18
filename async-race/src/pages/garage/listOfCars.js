import { getCars } from '../../api/api';
import { Car } from './classCar';
import { store } from '../../state/store';
import { updateState } from '../../state/updateStateGarage';
import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../common/utils';
import { LIMIT_CARS_ON_PAGE } from '../../common/constants';

const prev = createButtonElement('btn btn-ptimary', 'prev', 'prev');
prev.setAttribute('disabled', 'true');
const next = createButtonElement('btn btn-ptimary', 'next', 'next');
next.setAttribute('disabled', 'true');
const paginationContainer = createNewElement('div', { class: 'pagination-container row' });

export function renderPaginationButtons(selector) {
  const parentSelector = document.querySelector(selector);
  paginationContainer.append(prev);
  paginationContainer.append(next);
  parentSelector.append(paginationContainer);
  return paginationContainer;
}
export async function writeCarsToStore() {
  const response = await getCars(store.carsPage);
  store.dataApi.items = response.items;
  store.dataApi.count = response.count;
  return store;
}

export async function renderCarsAndCount(parentSelector) {
  const { items, count } = store.dataApi;
  renderPaginationButtons('.title-wrapper');
  items.forEach((item) => new Car(item.name, item.id, item.color, parentSelector).renderCar());
  const countCars = document.querySelector('.count');
  countCars.innerHTML = count;
  updateState('next', 'prev', store.carsPage, LIMIT_CARS_ON_PAGE, store.dataApi.count);
}
