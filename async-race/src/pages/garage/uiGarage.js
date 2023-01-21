import { createCar } from '../../api/api';
import { incrementPage, decrementPage, updateStateGarage, inputName, cleanInputValue } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { updateGarageView } from '../../state/updateStateGarage';
import { renderCarsAndCount } from './listOfCars';
import { updatePageNumber } from '../../state/updateStateGarage';
import { saveFetchCarsAndCountToStore }from '../../pages/garage/listOfCars';
import { inputCreateListener } from '../../state/updateStateGarage';

export function clickNext() {
  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    updateGarageView();
    store.carsPage++
   // saveFetchCarsAndCountToStore(store.carsPage)
    console.log('posle saveef', store.carsPage)
   // updateGarageView();
   renderCarsAndCount('.list-cars', store.carsPage);
    //renderCarsAndCount('.list-cars', store.carsPage)
    console.log(store.carsPage, 'thid is posle click')
    //await updateStateGarage();
    updatePageNumber()
  });
}
export function clickPrev() {
  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    updateGarageView();
    store.carsPage--;
   // saveFetchCarsAndCountToStore(store.carsPage)
    console.log('posle saveef', store.carsPage)
   // updateGarageView();
   renderCarsAndCount('.list-cars', store.carsPage);
    //renderCarsAndCount('.list-cars', store.carsPage)
    console.log(store.carsPage, 'thid is posle click')
    //await updateStateGarage();
    updatePageNumber()
  });
}

export function clickCreate() {
  const formCreateName = document.getElementById('form-create');
  formCreateName.addEventListener('submit', async (event) => {
    event.preventDefault();
    const car = {
      name: store.inputName,
      color: store.inputColor,
    };
    console.log('car0000000000000', car)
    await createCar(car);
    updateGarageView()
    //saveFetchCarsAndCountToStore(store.carsPage)
    renderCarsAndCount('.list-cars', store.carsPage);
    cleanInputValue()
   // formCreateName();
   // updateStateGarage();
  })
}