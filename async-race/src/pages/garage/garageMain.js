import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { createForm } from '../../components/form';

function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main';
  parent.append(main);
  return main;
}
export function renderGarageMain() {
  const main = createGarageMain();
  const createCarForm = createForm('form-create');
  const containerButtons = createNewElement('div', { class: 'btn-container' });
  const raceButton = createButtonElement({ class: 'btn btn-ptimary' }, 'RACE');
  const resetButton = createButtonElement({ class: 'btn btn-ptimary' }, 'RESET');
  const generateCarsButton = createButtonElement({ class: 'btn btn-ptimary' }, 'GENERATE CARS');
  main.prepend(createCarForm);
  main.append(containerButtons);
  containerButtons.append(raceButton);
  containerButtons.append(resetButton);
  containerButtons.append(generateCarsButton);
  return main;
}
