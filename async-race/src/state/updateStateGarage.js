import { store } from './store';
import { renderCarsAndCount } from '../pages/garage/listOfCars';
import { COLORS, LIMIT_CARS_ON_PAGE } from '../constants';

export function updateGarageView() {
  const carItems = document.querySelectorAll('.car-item');
  carItems.forEach((item) => item.remove());
}

export function inputCreateListener() {
  const inputName = document.querySelector('.input-create');
  const inputColor = document.querySelector('.input-color');
  document.addEventListener('input', (event) => {
    if (event.target === inputName) {
      store.inputName = inputName.value;
    }
    if (event.target === inputColor) {
      store.inputColor = inputColor.value;
    }
  });
}
export function cleanInputValue() {
  const inputName = document.querySelector('.input-create');
  const inputColor = document.querySelector('.input-color');
  inputName.value = '';
  inputColor.value = COLORS.black;
}

export function updatePageNumber() {
  const pageNumber = document.querySelector('.page');
  pageNumber.innerText = store.carsPage;
}

export function incrementPage() {
  store.carsPage++;
}

export function decrementPage() {
  store.carsPage--;
}

/* export async function updateStateGarage() {
  updateGarageView();
  renderCarsAndCount('.list-cars', store.carsPage);
  updatePageNumber();
} */

export const updateStateGarage = () => {
console.log(store);
console.log(store.dataApi)
console.log(store.dataApi.count)
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  if (store.carsPage * LIMIT_CARS_ON_PAGE < store.dataApi.count) {
    console.log(store, '111')
    next.disabled = false;
  } else {
    next.disabled = true;
    console.log(store.dataApi)
  }
  if (store.carsPage > 1) {
    prev.disabled = false;
    console.log(store)
  } else {
    prev.disabled = true;
    console.log(store)
  }
};