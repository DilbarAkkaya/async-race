import { createLinkElement } from '../components/link';
import { createHeader } from '../components/header';
import { createNewElement } from '../utils';
import { createGarageMain } from './garageMain';
import { route } from '../router/router';

const toGarageButton = createLinkElement({ class: 'btn btn-primary', href: '/' }, 'To Garage');
const toWinnerButton = createLinkElement({ class: 'btn btn-primary', href: '/winners' }, 'To Winners');

export function renderGarageView() {
  const { body } = document;
  const garagePage = createNewElement('body', 'div', {class: 'garage-page', id: 'garage-page'});
  const header = createHeader();
  const main = createGarageMain();
  header.append(toGarageButton);
  header.append(toWinnerButton);
  body.prepend(header);
  garagePage.append(main);
  
  //body.append(garagePage);
}

toGarageButton.addEventListener('click', route);
toWinnerButton.addEventListener('click', route);