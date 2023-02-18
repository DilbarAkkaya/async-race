import { store } from './store';
import { COLORS } from '../common/constants';

export function removeGarage() {
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

export function cleanInputValue(nameInputSelector, colorInputSelector) {
  const inputName = document.querySelector(nameInputSelector);
  const inputColor = document.querySelector(colorInputSelector);
  inputName.value = '';
  inputColor.value = COLORS.white;
}

export function updatePageNumber(pageSelector, storePage) {
  const pageNumber = document.querySelector(pageSelector);
  pageNumber.innerText = storePage;
}

export const updateState = (idNextButton, idPrevButton, page, limit, data) => {
  const next = document.getElementById(idNextButton);
  const prev = document.getElementById(idPrevButton);
  const isNotLastPage = page * limit < data;
  const isNotFirstPage = page > 1;
  const boolean = true;
  next.disabled = isNotLastPage ? !boolean : boolean;
  prev.disabled = isNotFirstPage ? !boolean : boolean;
};

export function removeWinners() {
  const winnerItems = document.querySelectorAll('.winner-item');
  winnerItems.forEach((item) => item.remove());
}
