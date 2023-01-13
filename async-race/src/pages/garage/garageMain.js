import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { renderForm } from '../../components/form';

function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main';
  parent.append(main);
  return main;
}
export function renderGarageMain() {
  const main = createGarageMain();
  const carCreateForm = renderForm('form-create', 'name-create', 'text', 'CREATE');
  const carUpdateForm = renderForm('form-update', 'name-update', 'text', 'UPDATE');
  const containerButtons = createNewElement('div', { class: 'btn-container' });
  const raceButton = createButtonElement({ class: 'btn btn-ptimary' }, 'RACE');
  const resetButton = createButtonElement({ class: 'btn btn-ptimary' }, 'RESET');
  const generateCarsButton = createButtonElement({ class: 'btn btn-ptimary' }, 'GENERATE CARS');
  const titleGarage = createNewElement('h1', { class: 'title' }, 'GARAGE  ');
  const countCars = createNewElement('span', { class: 'count' });
  main.prepend(carCreateForm);
  main.append(carUpdateForm);
  main.append(containerButtons);
  main.append(titleGarage);
  containerButtons.append(raceButton);
  containerButtons.append(resetButton);
  containerButtons.append(generateCarsButton);
  titleGarage.append(countCars);

  return main;
}
