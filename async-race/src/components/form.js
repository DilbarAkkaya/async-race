import { createNewElement } from '../utils';
import { createInput } from './input';
import { createButtonElement } from './button';
import { COLORS } from '../constants';
import { store } from '../store';

export async function renderForm(attrValueForm, idValueInput, typeValueInput, textOfButton, inputFunc) {
  const parent = new DocumentFragment();
  const form = await createNewElement('form', { class: attrValueForm, id: attrValueForm });
  const input = await createInput(idValueInput, typeValueInput);
  console.log(input)
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

export async function inputName(input) {
 // await console.log('11111111111111111111')
  await input.addEventListener('input', ()=> {
    store.inputName = '2'
    console.log(input.value)
  })
}
