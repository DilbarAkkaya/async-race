import { createNewElement } from '../common/utils';

export function createLinkElement(hrefLink, text) {
  const link = createNewElement('a', { class: 'btn btn-primary', href: hrefLink }, text);
  const parent = new DocumentFragment();
  parent.append(link);
  return link;
}
