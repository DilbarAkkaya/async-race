import { createNewElement } from '../common/utils';

export function createHeader() {
  const fragment = new DocumentFragment();
  const header = createNewElement('header', { class: 'header row' });
  fragment.append(header);
  return header;
}
