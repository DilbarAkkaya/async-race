import { createNewElement } from '../utils';
import { createInput } from './input';
import { createButtonElement } from './button';
import { COLORS } from '../constants';

export function renderForm(attrValueForm, idValueInput, typeValueInput, textOfButton, classNameOfInput) {
  const parent = new DocumentFragment();
  const form = createNewElement('form', { class: attrValueForm, id: attrValueForm });
  const input = createInput(idValueInput, typeValueInput, classNameOfInput);
  /*  if (idValueInput === 'name-update' || input.hasAttribute('color-name-update')) {
    input.setAttribute('disabled', true);
  } */
  const inputColor = createInput(`color-${idValueInput}`, 'color', 'input-color');
  inputColor.setAttribute('value', COLORS.white);
  const createButton = createButtonElement({ class: 'btn btn-primary submit', type: 'submit' }, textOfButton);
  form.append(input);
  form.append(inputColor);
  form.append(createButton);
  parent.append(form);
  // inputFunc(input);
  return form;
}
/*
export function inputName(input) {
  input.addEventListener('input', () => {
    store.inputName = input.value;
  });
}
 */
