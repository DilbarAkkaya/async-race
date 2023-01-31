import { createNewElement } from '../utils';
import { createInput } from './input';
import { createButtonElement } from './button';
import { COLORS } from '../constants';

export function renderForm(attrValueForm, idValueInput, typeValueInput, btnText, classNameOfInput) {
  const parent = new DocumentFragment();
  const form = createNewElement('form', { class: attrValueForm, id: attrValueForm });
  const input = createInput(idValueInput, typeValueInput, classNameOfInput);
  const inputColor = createInput(`color-${idValueInput}`, 'color', 'input-color');
  inputColor.setAttribute('value', COLORS.green);
  const createButton = createButtonElement({ class: 'btn btn-primary', id: btnText, type: 'submit' }, btnText);
  createButton.setAttribute('disabled', 'true');
  form.append(input);
  form.append(inputColor);
  form.append(createButton);
  parent.append(form);
  return form;
}
