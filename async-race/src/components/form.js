import { createNewElement } from '../utils';
import { createInput } from './input';

export function createForm(arg) {
  const parent = new DocumentFragment();
  const form = createNewElement('form', { class: arg, id: arg });
  const input = createInput('name-create', 'text');
  const inputColor = createInput('color', 'color');
  inputColor.setAttribute('value', '#ffffff');
  form.append(input);
  form.append(inputColor);
  parent.append(form);
  return form;
}
