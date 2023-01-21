import { createCar } from '../../api/api';
import { incrementPage, decrementPage, updateStateGarage, inputName } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { updateGarageView } from '../../state/updateStateGarage';
import { renderCarsAndCount } from './listOfCars';
import { updatePageNumber } from '../../state/updateStateGarage';

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
  const car = {
    name: store.inputName,
    color: store.inputColor,
  };
  const formCreateName = document.getElementById('name-create');
  formCreateName.addEventListener('submit', async (event) => {
   
    event.preventDefault();
    console.log(store)
/*     await createCar(car);
    console.log(car);
    updateStateGarage() */
  })
}