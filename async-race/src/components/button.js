import { createNewElement } from '../common/utils';

export function createButtonElement(classSelector, idName, text) {
  const parent = new DocumentFragment();
  const newElement = createNewElement('button', { class: classSelector, id: idName }, text);
  parent.append(newElement);
  return newElement;
}
