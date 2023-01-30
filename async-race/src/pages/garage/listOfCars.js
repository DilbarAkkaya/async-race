import { getCars } from '../../api/api';
import { Car } from './classCar';
import { store } from '../../state/store';
import { updateStateGarage } from '../../state/updateStateGarage';
import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';

/* export async function saveFetchCarsAndCountToStore(page) {
  const res = await getCars(page);
  console.log('this is savefetch', res)
  store.dataApi.items = res.items;
  store.dataApi.count = res.count;
} */
/* export async function setStoreCars(page) {
  const res = await getCars(page);
  console.log(res)
  store.dataApi.items = res.items;
  store.dataApi.count = res.count;
  return store.dataApi;
} */
const prev = createButtonElement({ class: 'btn btn-primary', id: 'prev', disabled: true }, 'prev');
const next = createButtonElement({ class: 'btn btn-primary', id: 'next', disabled: true }, 'next');
const paginationContainer = createNewElement('div', { class: 'pagination-container row' });
// const main = document.querySelector('main');

// main.append(paginationContainer);

export function renderPaginationButtons(selector) {
  const parentSelector = document.querySelector(selector);
  paginationContainer.append(prev);
  paginationContainer.append(next);
  parentSelector.append(paginationContainer);
  return paginationContainer;
}

export async function renderCarsAndCount(parentSelector, page) {
  // await setStoreCars(1);
  // await getCars(page);
  // await saveFetchCarsAndCountToStore(page);
  const res = await getCars(page);
  store.dataApi.items = res.items;
  store.dataApi.count = res.count;
  // console.log(store)
  store.dataApi.items.forEach((item) => new Car(item.name, item.id, item.color, parentSelector).renderCar());
  const countCars = document.querySelector('.count');
  countCars.innerHTML = store.dataApi.count;
  renderPaginationButtons('.title-wrapper');
  updateStateGarage('next', 'prev');
}
