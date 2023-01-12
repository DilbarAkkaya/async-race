export function createErrorMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.innerText = 'Error';
  parent.append(main);
  return main;
}