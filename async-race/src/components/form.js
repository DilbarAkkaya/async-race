import { createNewElement } from '../utils';
import { createInput } from './input';
import { createButtonElement } from './button';
import { COLORS } from '../constants';

export function createForm(arg) {
  const parent = new DocumentFragment();
  const form = createNewElement('form', { class: arg, id: arg });
  const input = createInput('name-create', 'text');
  const inputColor = createInput('color', 'color');
  inputColor.setAttribute('value', COLORS.white);
  const createButton = createButtonElement({ class: 'btn btn-primary', type: 'submit' }, 'CREATE');
  form.append(input);
  form.append(inputColor);
  form.append(createButton);
  parent.append(form);
  return form;
}
