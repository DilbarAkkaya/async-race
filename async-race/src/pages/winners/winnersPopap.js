export function createWinnerPopap(carName, carTime) {
  const parent = document.body;
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
  <h3>The winner is ${carName}, time ${carTime}`;
  parent.append(modal);
  setTimeout(()=> {
    modal.remove()}, 5000)
  return modal;
}
