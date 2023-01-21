import { createNewElement } from '../utils';

export function createInput(idOfInput, typeOfInput, classNameOfInput) {
  const parent = new DocumentFragment();
  const input = createNewElement('input', { class: `input ${classNameOfInput}`, id: idOfInput, type: typeOfInput });
  parent.append(input);
  return input;
}
