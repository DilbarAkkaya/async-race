import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { renderForm } from '../../components/form';
import { renderCarsAndCount } from './listOfCars';
import { store } from '../../state/store';
import { inputName, updateGarageView, updateStateGarage } from '../../state/updateStateGarage';
import { clickCreate, clickNext, clickPrev } from './uiGarage';

function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main column';
  parent.append(main);
  return main;
}

const main = createGarageMain();
const listOfCars = createNewElement('ul', { class: 'list-cars' });
//const paginationContainer = createNewElement('div', { class: 'pagination-container' });
const titleGarage = createNewElement('h1', { class: 'title' }, 'GARAGE  ');
const countCars = createNewElement('span', { class: 'count' });
const pageGarage = createNewElement('h2', { class: 'subtitle' }, 'Page  ');
const pageNumber = createNewElement('span', { class: 'page' }, store.carsPage);
const carCreateForm = renderForm('form-create', 'name-create', 'text', 'create', 'input-create');
const carUpdateForm = renderForm('form-update', 'name-update', 'text', 'update', 'input-update');
const containerButtons = createNewElement('div', { class: 'btn-container' });
const raceButton = createButtonElement({ class: 'btn btn-ptimary' }, 'race');
const resetButton = createButtonElement({ class: 'btn btn-ptimary' }, 'reset');
const generateCarsButton = createButtonElement({ class: 'btn btn-ptimary' }, 'generate cars');
/* const prev = createButtonElement({ class: 'btn btn-primary', id: 'prev', disabled: true }, 'prev');
const next = createButtonElement({ class: 'btn btn-primary', id: 'next', disabled: true }, 'next'); */

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
 // main.append(paginationContainer);
  return main;
}


export function renderGarageMain() {
  renderFormsButtons();
  updateGarageView();
  renderCarsAndCount('.list-cars', store.carsPage, document.querySelector('.main'));
  //renderPaginationButtons();
 //updateStateGarage()
  return main;
}
