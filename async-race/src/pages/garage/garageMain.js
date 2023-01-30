import { createButtonElement } from '../../components/button';
import { createNewElement, setAttributeForFormUpdate } from '../../utils';
import { renderForm } from '../../components/form';
import { renderCarsAndCount } from './listOfCars';
import { store } from '../../state/store';
import { updateGarageView } from '../../state/updateStateGarage';
import { createWinnerPopap } from '../winners/winnersPopap';

function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main column';
  parent.append(main);
  return main;
}

const main = createGarageMain();
const listOfCars = createNewElement('ul', { class: 'list-cars' });
// const paginationContainer = createNewElement('div', { class: 'pagination-container' });
const titleGarage = createNewElement('h1', { class: 'title' }, 'GARAGE  ');
const countCars = createNewElement('span', { class: 'count' });
const pageGarage = createNewElement('h2', { class: 'subtitle' }, 'Page  ');
const pageNumber = createNewElement('span', { class: 'page' }, store.carsPage);
const carCreateForm = renderForm('form-create', 'name-create', 'text', 'create', 'input-create');
const carUpdateForm = renderForm('form-update', 'name-update', 'text', 'update', 'input-update');
const subtitleWrapper = createNewElement('div', { class: 'title-wrapper row' });

setAttributeForFormUpdate(carUpdateForm);
const containerButtons = createNewElement('div', { class: 'btn-container' });
const raceButton = createButtonElement({ class: 'btn btn-ptimary move enabled', id: 'race' }, 'race');
const resetButton = createButtonElement({ class: 'btn btn-ptimary move', id: 'reset' }, 'reset');
const generateCarsButton = createButtonElement({ class: 'btn btn-ptimary move enabled', id: 'generate-btn' }, 'generate cars');
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
  subtitleWrapper.append(pageGarage);
  pageGarage.append(pageNumber);
  main.append(subtitleWrapper);
  main.append(listOfCars);
  // main.append(paginationContainer);
  return main;
}

export function renderGarageMain() {
  if (store.isAnimated === false) {
    renderFormsButtons();
    updateGarageView();
    renderCarsAndCount('.list-cars', store.carsPage);
    // renderPaginationButtons();
    // updateStateGarage()
  }
  return main;
}
