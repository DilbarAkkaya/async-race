import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';

function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main';
  parent.append(main);
  return main;
}
export function renderGarageMain() {
  const main = createGarageMain();
  const containerButtons = createNewElement('div', { class: 'btn-container' });
  main.append(containerButtons);
  const raceButton = createButtonElement({ class: 'btn btn-ptimary' }, 'RACE');
  containerButtons.append(raceButton);
  return main;
}
