export function createWinnersMain() {
  const parent = new DocumentFragment();
  // const winnersPage = createNewElement('body', 'div', {class: 'winners', id: 'winners'});
  const main = document.createElement('main');
  main.innerText = 'Winners';
  parent.append(main);
  return main;
}
