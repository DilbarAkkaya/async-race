import { createButtonElement } from '../../components/button';
import { createNewElement, disableFormElements } from '../../common/utils';
import { renderForm } from '../../components/form';
import { renderCarsAndCount } from './listOfCars';
import { store } from '../../state/store';

const mainTag = createNewElement('main', { class: 'main column' });
export function renderFormsButtons() {
  const listOfCars = createNewElement('ul', { class: 'list-cars' });
  const titleGarage = createNewElement('h1', { class: 'title' }, 'GARAGE  ');
  const countCars = createNewElement('span', { class: 'count' });
  const pageGarage = createNewElement('h2', { class: 'subtitle' }, 'Page  ');
  const pageNumber = createNewElement('span', { class: 'page' }, store.carsPage);
  const carCreateForm = renderForm('form-create', 'name-create', 'text', 'create', 'input-create');
  const carUpdateForm = renderForm('form-update', 'name-update', 'text', 'update', 'input-update');
  const subtitleWrapper = createNewElement('div', { class: 'title-wrapper row' });
  disableFormElements(carUpdateForm);
  const containerButtons = createNewElement('div', { class: 'btn-container' });
  const raceButton = createButtonElement('btn btn-ptimary move enabled', 'race', 'race');
  const resetButton = createButtonElement('btn btn-ptimary move', 'reset', 'reset');
  const generateBn = createButtonElement('btn btn-ptimary move enabled', 'generate-btn', 'generate cars');
  const mainGarage = document.querySelector('.main-garage');
  mainGarage.append(mainTag);
  mainTag.prepend(carCreateForm);
  mainTag.append(carUpdateForm);
  mainTag.append(containerButtons);
  containerButtons.append(raceButton);
  containerButtons.append(resetButton);
  containerButtons.append(generateBn);
  mainTag.append(titleGarage);
  titleGarage.append(countCars);
  subtitleWrapper.append(pageGarage);
  pageGarage.append(pageNumber);
  mainTag.append(subtitleWrapper);
  mainTag.append(listOfCars);
}
export function renderGarageMain() {
  if (store.isAnimated === false) {
    renderFormsButtons();
    renderCarsAndCount('.list-cars');
  }
  return mainTag;
}
