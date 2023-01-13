import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { createCarForm } from './carCreateForm';
import { updateCarForm } from './carUpdateForm';

function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main';
  parent.append(main);
  return main;
}
export function renderGarageMain() {
  const main = createGarageMain();
  const carCreateForm = createCarForm('form-create');
  const carUpdateForm = updateCarForm('form-update');
  const containerButtons = createNewElement('div', { class: 'btn-container' });
  const raceButton = createButtonElement({ class: 'btn btn-ptimary' }, 'RACE');
  const resetButton = createButtonElement({ class: 'btn btn-ptimary' }, 'RESET');
  const generateCarsButton = createButtonElement({ class: 'btn btn-ptimary' }, 'GENERATE CARS');
  main.prepend(carCreateForm);
  main.append(carUpdateForm);
  main.append(containerButtons);
  containerButtons.append(raceButton);
  containerButtons.append(resetButton);
  containerButtons.append(generateCarsButton);
  return main;
}
