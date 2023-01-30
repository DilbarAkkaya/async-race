import { store } from './store';
import { COLORS, LIMIT_CARS_ON_PAGE, LIMIT_WINNERS_ON_PAGE } from '../constants';

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

export function cleanInputValue(inputSelector1, inputCSelector2) {
  const inputName = document.querySelector(inputSelector1);
  const inputColor = document.querySelector(inputCSelector2);
  inputName.value = '';
  inputColor.value = COLORS.white;
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

export const updateStateWinners = (idNextButton, idPrevButton) => {
  const next = document.getElementById(idNextButton);
  const prev = document.getElementById(idPrevButton);

  if (store.winnersPage * LIMIT_WINNERS_ON_PAGE < store.dataWinners.count) {
    next.disabled = false;
  } else {
    next.disabled = true;
  }
  if (store.winnersPage > 1) {
    prev.disabled = false;
  } else {
    prev.disabled = true;
  }
}; 
export function updateWinnerView() {
  const winnerItems = document.querySelectorAll('.winner-item');
  winnerItems.forEach((item) => item.remove());
  }
  //const main = document.getElementsByTagName('main');

 // console.log(main)
//winnerItems.forEach((item) => item.remove()); 
