import { createLinkElement } from '../components/link';
import { createHeader } from '../components/header';
import { route } from '../router/router';
import { createNewElement } from '../common/utils';

const garageButton = createLinkElement('/', 'To Garage');
const winnerButton = createLinkElement('/winners', 'To Winners');
const titleApp = createNewElement('span', { class: 'title-app' }, 'ASYNC RACE');
const btnWrapper = createNewElement('div', { class: 'row' });

export function renderCommonView() {
  const { body } = document;
  const header = createHeader();
  btnWrapper.append(garageButton);
  btnWrapper.append(winnerButton);
  header.append(btnWrapper);
  header.append(titleApp);
  body.prepend(header);
}

garageButton.addEventListener('click', route);
winnerButton.addEventListener('click', route);
