import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { renderForm } from '../../components/form';
import { red, renderCars, rendertitleGarage, renderTotalCountCars, title } from './listOfCars';
import { getCars } from '../../api/api';

function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.className = 'main column';
  parent.append(main);
  return main;
}
export async function renderGarageMain() {
  const main = createGarageMain();
  const carCreateForm = renderForm('form-create', 'name-create', 'text', 'create');
  const carUpdateForm = renderForm('form-update', 'name-update', 'text', 'update');
  const containerButtons = createNewElement('div', { class: 'btn-container' });
  const raceButton = createButtonElement({ class: 'btn btn-ptimary' }, 'race');
  const resetButton = createButtonElement({ class: 'btn btn-ptimary' }, 'reset');
  const generateCarsButton = createButtonElement({ class: 'btn btn-ptimary' }, 'generate cars'); 
  const titleGarage = createNewElement('h1', { class: 'title' }, 'GARAGE  ');
  const listOfCars = createNewElement('ul', { class: 'list-cars' });
  main.prepend(carCreateForm);
  main.append(carUpdateForm);
  main.append(containerButtons);
 // const maintitle = renderTotalCountCars();
 main.append(titleGarage)
  titleGarage.append(await renderTotalCountCars());
  //titleGarage.append(renderTotalCountCars());

  main.append(listOfCars);
  renderCars('.list-cars');
  containerButtons.append(raceButton);
  containerButtons.append(resetButton);
  containerButtons.append(generateCarsButton);

  return main;
}
