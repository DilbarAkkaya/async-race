import { createLinkElement } from '../../components/link';
import { createHeader } from '../../components/header';
import { route } from '../../router/router';

const garageButton = createLinkElement({ class: 'btn btn-primary', href: '/' }, 'To Garage');
const winnerButton = createLinkElement({ class: 'btn btn-primary', href: '/winners' }, 'To Winners');

export function renderGarageView() {
  const { body } = document;
  const header = createHeader();
  header.append(garageButton);
  header.append(winnerButton);
  body.prepend(header);
}

garageButton.addEventListener('click', route);
winnerButton.addEventListener('click', route);
