import { createButtonElement } from '../components/button';
import { createHeader } from '../components/header';
import { createNewElement } from '../utils';
import { createGarageMain } from './garageMain';

export function renderGarageView() {
  const { body } = document;
  const garagePage = createNewElement('body', 'div', {class: 'garage-page', id: 'garage-page'});
  const toGarageButton = createButtonElement({ class: 'btn btn-primary' }, 'To Garage');
  const toWinnerButton = createButtonElement({ class: 'btn btn-primary' }, 'To Winners');
  const header = createHeader();
  const main = createGarageMain();
  header.append(toGarageButton);
  header.append(toWinnerButton);
  body.prepend(header);
  garagePage.append(main);
  
  //body.append(garagePage);
}

