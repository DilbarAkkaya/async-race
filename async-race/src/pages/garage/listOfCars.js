import { getCars } from '../../api/api';
import { Car } from './classCar';
import { store } from '../../state/store';
import { updateState } from '../../state/updateStateGarage';
// import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../common/utils';
import { LIMIT_CARS_ON_PAGE } from '../../common/constants';

const prev = createNewElement('button', { class: 'btn btn-primary', id: 'prev', disabled: true }, 'prev');
const next = createNewElement('button', { class: 'btn btn-primary', id: 'next', disabled: true }, 'next');
const paginationContainer = createNewElement('div', { class: 'pagination-container row' });

export function renderPaginationButtons(selector) {
  const parentSelector = document.querySelector(selector);
  paginationContainer.append(prev);
  paginationContainer.append(next);
  parentSelector.append(paginationContainer);
  return paginationContainer;
}

export async function renderCarsAndCount(parentSelector, page) {
  const response = await getCars(page);
  store.dataApi.items = response.items;
  store.dataApi.count = response.count;
  store.dataApi.items.forEach((item) => new Car(item.name, item.id, item.color, parentSelector).renderCar());
  const countCars = document.querySelector('.count');
  countCars.innerHTML = store.dataApi.count;
  renderPaginationButtons('.title-wrapper');
  updateState('next', 'prev', store.carsPage, LIMIT_CARS_ON_PAGE, store.dataApi.count);
}
