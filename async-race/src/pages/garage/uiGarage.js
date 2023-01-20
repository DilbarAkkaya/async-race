import { incrementPage, decrementPage, updateStateGarage } from '../../state/updateStateGarage';

export function clickNext(next) {
  next.addEventListener('click', () => {
    incrementPage();
    updateStateGarage();
  });
}
export function clickPrev(prev) {
  prev.addEventListener('click', () => {
    decrementPage();
    updateStateGarage();
  });
}
