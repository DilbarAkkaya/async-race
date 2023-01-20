import { incrementPage, decrementPage, updateStateGarage } from '../../state/updateStateGarage';

export function clickNext() {
  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    incrementPage();
    updateStateGarage();
  });
}
export function clickPrev() {
  const prev = document.getElementById('next');
  prev.addEventListener('click', () => {
    decrementPage();
    updateStateGarage();
  });
}

export function clickCreate() {
  const formName = document.getElementById('name-create');
  document.getElementById('form-create').addEventListener('submit', (event) => {
    event.preventDefault();
  })
}