import { createNewElement } from '../utils';

export function createInput(idOfInput, typeOfInput) {
  const parent = new DocumentFragment();
  const input = createNewElement('input', { class: 'input', id: idOfInput, type: typeOfInput });
  parent.append(input);
  return input;
}
