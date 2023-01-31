export function createErrorMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.style.fontSize = '36px';
  main.innerText = 'The page is not found';
  parent.append(main);
  return main;
}
