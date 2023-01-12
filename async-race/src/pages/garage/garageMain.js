export function createGarageMain() {
  const parent = new DocumentFragment();
  const main = document.createElement('main');
  main.innerText = 'Garage';
  parent.append(main);
  return main;
}
