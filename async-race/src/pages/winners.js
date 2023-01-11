export function renderWinnersMain() {
  const { body } = document;
  const winnersPage = createNewElement('body', 'div', {class: 'winners', id: 'winners'});
  const main = document.createElement('main');
  main.innerText = 'Winners';
  winnersPage.append(main);
}