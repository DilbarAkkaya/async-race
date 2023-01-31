export function createWinnerPopap(carName, carTime, parentSelector) {
  const parent = document.querySelector(parentSelector);
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
  <h3>The winner is ${carName}, time ${carTime}`;
  parent.prepend(modal);
  setTimeout(() => {
    modal.remove();
  }, 2000);
  return modal;
}
