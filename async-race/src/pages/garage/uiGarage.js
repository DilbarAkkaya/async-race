import { createCar, getCars } from '../../api/api';
import { cleanInputValue, updateGarageView, updatePageNumber } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { renderCarsAndCount } from './listOfCars';
import { generateRandomCars } from '../../utils';

export function clickPaginationButtons() {
  const main = document.querySelector('.main');
  main.addEventListener('click', async (e) => {
    if (e.target.closest('#next')) {
      updateGarageView();
      store.carsPage++;
      renderCarsAndCount('.list-cars', store.carsPage);
      updatePageNumber();
    }
    if (e.target.closest('#prev')) {
      updateGarageView();
      store.carsPage--;
      renderCarsAndCount('.list-cars', store.carsPage);
      updatePageNumber();
    }
    if (e.target.closest('#generate-btn')) {
      e.target.disabled = true;
      const cars = generateRandomCars();
      await Promise.all(cars.map((car) => createCar(car)));
      updateGarageView();
      renderCarsAndCount('.list-cars', store.carsPage);
/*       const res = await getCars(store.carsPage).count;
      console.log(store)
      store.dataApi.count = res.count;
      const countCars = document.querySelector('.count');
      countCars.innerHTML = store.dataApi.count; */
      e.target.disabled = false;
    }
  });
}
/* export function clickPrev() {
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
} */

export function clickCreate() {
  const formCreateName = document.getElementById('form-create');
  formCreateName.addEventListener('submit', async (event) => {
    event.preventDefault();
    const car = {
      name: store.inputName,
      color: store.inputColor,
    };
    await createCar(car);
    updateGarageView();
    // saveFetchCarsAndCountToStore(store.carsPage)
    renderCarsAndCount('.list-cars', store.carsPage);

    cleanInputValue();
    // formCreateName();
    // updateStateGarage();
  });
}
