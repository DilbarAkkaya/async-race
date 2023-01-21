import { store } from './store';
import { renderCarsAndCount } from '../pages/garage/listOfCars';
import { COLORS } from '../constants';

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

export async function updateStateGarage() {
  updateGarageView();
  renderCarsAndCount('.list-cars', store.carsPage);
  updatePageNumber();
}
