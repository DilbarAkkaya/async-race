import { createNewElement } from '../utils';
import { createInput } from './input';

export function createForm(arg) {
  const parent = new DocumentFragment();
  const form = createNewElement('form', { class: arg, id: arg });
  const input = createInput('name-create', 'text');
  form.append(input);
  parent.append(form);
  return form;
}
