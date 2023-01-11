export function createHeader() {
  const fragment = new DocumentFragment();
  const header = document.createElement('header');
  header.className = 'header';
  fragment.append(header);
  return header;
}
