import { createNewElement } from '../utils';

export function createForm(arg) {
  const parent = new DocumentFragment();
  const form = createNewElement('form', { class: arg, id: arg });
  parent.append(form);
  return form;
}
