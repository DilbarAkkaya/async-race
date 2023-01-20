import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { renderForm, inputName } from '../../components/form';
import { renderCarsAndCount } from './listOfCars';
import { renderPagination } from './pagination';
import { store } from '../../state/store';

function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main column';
  parent.append(main);
  return main;
}

const main = createGarageMain();
const listOfCars = createNewElement('ul', { class: 'list-cars' });
const paginationContainer = createNewElement('div', { class: 'pagination-container' });
const titleGarage = createNewElement('h1', { class: 'title' }, 'GARAGE  ');
const countCars = createNewElement('span', { class: 'count' });
const pageGarage = createNewElement('h2', { class: 'subtitle' }, 'Page  ');
const pageNumber = createNewElement('span', { class: 'page' }, store.carsPage);
const carCreateForm = renderForm('form-create', 'name-create', 'text', 'create', inputName);
const carUpdateForm = renderForm('form-update', 'name-update', 'text', 'update', inputName);
const containerButtons = createNewElement('div', { class: 'btn-container' });
const raceButton = createButtonElement({ class: 'btn btn-ptimary' }, 'race');
const resetButton = createButtonElement({ class: 'btn btn-ptimary' }, 'reset');
const generateCarsButton = createButtonElement({ class: 'btn btn-ptimary' }, 'generate cars');

export function renderFormsButtons() {
  main.prepend(carCreateForm);
  main.append(carUpdateForm);
  main.append(containerButtons);
  containerButtons.append(raceButton);
  containerButtons.append(resetButton);
  containerButtons.append(generateCarsButton);
  main.append(titleGarage);
  titleGarage.append(countCars);
  main.append(pageGarage);
  pageGarage.append(pageNumber);
  main.append(listOfCars);
  main.append(paginationContainer);
  return main;
}

export function renderGarageMain() {
  renderFormsButtons();
  renderCarsAndCount('.list-cars', store.carsPage);
  //main.append(renderPagination());
  return main;
}
