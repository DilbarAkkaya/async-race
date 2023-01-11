import { createButtonElement } from '../components/button';
import { createHeader } from '../components/header';

export function renderGarageView() {
  const { body } = document;
  const toGarageButton = createButtonElement({ class: 'btn btn-primary' }, 'To Garage');
  const toWinnerButton = createButtonElement({ class: 'btn btn-primary' }, 'To Winners');
  const header = createHeader();
  header.append(toGarageButton);
  header.append(toWinnerButton);
  body.append(header);
}
