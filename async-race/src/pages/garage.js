import { createLinkElement } from '../components/link';
import { createHeader } from '../components/header';
// import { createNewElement } from '../utils';
// import { createGarageMain } from './garageMain';
import { route } from '../router/router';

const garageButton = createLinkElement({ class: 'btn btn-primary', href: '/' }, 'To Garage');
const winnerButton = createLinkElement({ class: 'btn btn-primary', href: '/winners' }, 'To Winners');

export function renderGarageView() {
  const { body } = document;
  const header = createHeader();
  // const main = createGarageMain();
  // const mainPage = createNewElement('body', 'div', { class: 'main-page', id: 'main-page' });
  header.append(garageButton);
  header.append(winnerButton);
  body.prepend(header);
  // mainPage.append(main);
  // body.append(garagePage);
}

garageButton.addEventListener('click', route);
winnerButton.addEventListener('click', route);
