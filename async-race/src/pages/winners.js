export function renderWinnersMain() {
  const { body } = document;
  const main = document.createElement('main');
  main.innerText = 'Winners';
  body.append(main);
}