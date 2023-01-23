import { store } from './store';
import { COLORS, LIMIT_CARS_ON_PAGE } from '../constants';

export function updateGarageView() {
  const carItems = document.querySelectorAll('.car-item');
  carItems.forEach((item) => item.remove());
}

export function inputCreateListener() {
  const inputName = document.querySelector('.input-create');
  const inputColor = document.querySelector('.input-color');
  const createButton = document.getElementById('create');
  const createColor = document.getElementById('color-name-create');
  document.addEventListener('input', (event) => {
    if (event.target === inputName) {
      createButton.disabled = false;
      createColor.disabled = false;
      store.inputName = inputName.value;
    }
    if (event.target === inputColor) {
      store.inputColor = inputColor.value;
    }
  });
}
export function inputUpdateListener() {
  const inputName = document.querySelector('.input-update');
  const inputColor = document.querySelector('#color-name-update');
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

export const updateStateGarage = (idNextButton, idPrevButton) => {
  const next = document.getElementById(idNextButton);
  const prev = document.getElementById(idPrevButton);

  if (store.carsPage * LIMIT_CARS_ON_PAGE < store.dataApi.count) {
    next.disabled = false;
  } else {
    next.disabled = true;
  }
  if (store.carsPage > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }
};
