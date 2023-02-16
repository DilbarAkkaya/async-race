import { createButtonElement } from '../../components/button';
import { createNewElement, disableFormElements } from '../../common/utils';
import { renderForm } from '../../components/form';
import { renderCarsAndCount } from './listOfCars';
import { store } from '../../state/store';
import { removeGarage } from '../../state/updateStateGarage';
import { createErrorMain } from '../error/error';
const mainTag = createNewElement('main', { class: 'main column' });
export function renderFormsButtons() {
  //const mainTag = createNewElement('main', { class: 'main column' });
/*   const mainPage = createNewElement('div', { class: 'main-page', id: 'main-page' });
  const mainGarage = createNewElement('div', { class: 'main-garage', id: 'main-garage' });
  const mainWinner = createNewElement('div', { class: 'main-winner', id: 'main-winner' });
  const mainError = createErrorMain(); */
  // const modal = document.querySelector('.modal');
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
/* 
  document.body.append(mainPage);
  mainPage.append(mainGarage);
  mainPage.append(mainWinner);
  mainPage.append(mainError); */
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
    // createGarageMain();
    // initMain();
    renderFormsButtons();
    // removeGarage();
    renderCarsAndCount('.list-cars');
  }
  return mainTag;
}



/* function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main column';
  parent.append(main);
  return main;
} */

/* export function initMain() {
  createNewElement('main', { class: 'main column' });
  console.log(document.querySelector('.main'))
  createNewElement('div', { class: 'main-page', id: 'main-page' });
  createNewElement('div', { class: 'main-garage', id: 'main-garage' });
  createNewElement('div', { class: 'main-winner', id: 'main-winner' });
  createErrorMain();
  // const modal = document.querySelector('.modal');
  createNewElement('ul', { class: 'list-cars' });
  createNewElement('h1', { class: 'title' }, 'GARAGE  ');
  createNewElement('span', { class: 'count' });
  createNewElement('h2', { class: 'subtitle' }, 'Page  ');
  createNewElement('span', { class: 'page' }, store.carsPage);
  renderForm('form-create', 'name-create', 'text', 'create', 'input-create');
  renderForm('form-update', 'name-update', 'text', 'update', 'input-update');
  createNewElement('div', { class: 'title-wrapper row' });
  createNewElement('div', { class: 'btn-container' });
  createButtonElement('btn btn-ptimary move enabled', 'race', 'race');
  createButtonElement('btn btn-ptimary move', 'reset', 'reset');
  createButtonElement('btn btn-ptimary move enabled', 'generate-btn', 'generate cars');
} */

/*   const mainPage = document.querySelector('.main-page');
  const mainGarage = document.querySelector('.main-garage');
  const mainWinner = document.querySelector('.main-winner');
  const mainError = document.querySelector('.error');
  const mainTag = document.querySelector('.main');
  console.log(mainTag)
  const listOfCars = document.querySelector('.list-cars');
  const titleGarage = document.querySelector('.title');
  const countCars = document.querySelector('.count');
  const pageGarage = document.querySelector('.subtitle');
  const pageNumber = document.querySelector('.page');
  const carCreateForm = document.querySelector('.form-create');
  const carUpdateForm = document.querySelector('.form-update');
  const subtitleWrapper = document.querySelector('.title-wrapper');
  // 
  const containerButtons = document.querySelector('.btn-container');
  const raceButton = document.getElementById('race');
  const resetButton = document.getElementById('reset');
  const generateBn = document.getElementById('generate-btn'); */