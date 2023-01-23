import { createCar, getCar, deleteCar, updateCar } from '../../api/api';
import { cleanInputValue, inputUpdateListener, updateGarageView, updatePageNumber, updateStateGarage } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { renderCarsAndCount } from './listOfCars';
import { generateRandomCars, setAttributeForFormUpdate } from '../../utils';

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
    if (e.target.classList.contains('select-btn')) {
      const formUpdate = document.getElementById('form-update');
      Array.from(formUpdate.children).forEach((element) => {
        element.disabled = false;
      });
      const idValue = e.target.getAttribute('id');
      const id = idValue.split('select-')[1];
      const selectCar = await getCar(id);
      store.inputName = selectCar.name;
      store.inputColor = selectCar.color;
      store.id = selectCar.id;
      formUpdate.children[0].value = store.inputName;
      formUpdate.children[1].value = store.inputColor;
    }
    if (e.target.classList.contains('remove-btn')) {
      const countCars = document.querySelector('.count');
      const idValue = e.target.getAttribute('id');
      const id = idValue.split('remove-')[1];
      await deleteCar(id);
      updateGarageView();
      renderCarsAndCount('.list-cars', store.carsPage);
      countCars.innerHTML = store.dataApi.count;
    }
  })
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
    formCreateName.children[1].disabled = true;
    formCreateName.children[2].disabled = true;
    updateGarageView();
    // saveFetchCarsAndCountToStore(store.carsPage)
    renderCarsAndCount('.list-cars', store.carsPage);

    cleanInputValue('.input-create', '#color-name-create');
    // formCreateName();
    // updateStateGarage();
  });
}

export function clickUpdate() {
  const formUpdate = document.getElementById('form-update');
  formUpdate.addEventListener('submit', async (event) => {
    event.preventDefault();
    const car = {
      name: store.inputName,
      color: store.inputColor,
    };
    await updateCar(store.id, car);
    console.log(store)
    console.log(car)
    updateGarageView();
    // saveFetchCarsAndCountToStore(store.carsPage)
    renderCarsAndCount('.list-cars', store.carsPage);

    cleanInputValue('.input-update', '#color-name-update');
    setAttributeForFormUpdate(formUpdate)
    // formCreateName();
    // updateStateGarage();
  });
}