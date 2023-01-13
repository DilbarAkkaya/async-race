import { createNewElement } from '../../utils';
import { createInput } from '../../components/input';
import { createButtonElement } from '../../components/button';
import { COLORS } from '../../constants';

export function updateCarForm(arg) {
  const parent = new DocumentFragment();
  const form = createNewElement('form', { class: arg, id: arg });
  const input = createInput('name-update', 'text');
  const inputColor = createInput('color', 'color');
  inputColor.setAttribute('value', COLORS.white);
  const createButton = createButtonElement({ class: 'btn btn-primary', type: 'submit' }, 'UPDATE');
  form.append(input);
  form.append(inputColor);
  form.append(createButton);
  parent.append(form);
  return form;
}
