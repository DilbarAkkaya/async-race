import { createNewElement } from '../utils';

export function createInput(idOfInput, typeOfInput, classNameOfInput) {
  const parent = new DocumentFragment();
  const input = createNewElement('input', { class: `input ${classNameOfInput}`, id: idOfInput, type: typeOfInput });
  if (typeOfInput === 'color') {
    input.setAttribute('disabled', 'true');
  }
  parent.append(input);
  return input;
}
