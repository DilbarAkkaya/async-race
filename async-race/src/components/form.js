import { createNewElement } from '../utils';
import { createInput } from './input';
import { createButtonElement } from './button';
import { COLORS } from '../constants';
import { store } from '../store';

export function renderForm(attrValueForm, idValueInput, typeValueInput, textOfButton, inputFunc) {
  const parent = new DocumentFragment();
  const form = createNewElement('form', { class: attrValueForm, id: attrValueForm });
  const input = createInput(idValueInput, typeValueInput);
  const inputColor = createInput('color', 'color');
  inputColor.setAttribute('value', COLORS.white);
  const createButton = createButtonElement({ class: 'btn btn-primary', type: 'submit' }, textOfButton);
  form.append(input);
  form.append(inputColor);
  form.append(createButton);
  parent.append(form);
  inputFunc(input);
  return form;
}

export function inputName(input) {
  input.addEventListener('input', () => {
    store.inputName = input.value;
  });
}
