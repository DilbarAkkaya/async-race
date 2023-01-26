export function createWinnerPopap(carName, carTime) {
  const parent = new DocumentFragment();
  const modal = document.createElement('div');
  modal.innerHTML = `
  <h3>The winner is ${carName}, time ${carTime}`;
  parent.append(modal);
  return modal;
}
