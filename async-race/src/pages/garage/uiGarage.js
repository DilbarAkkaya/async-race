import {
  createCar, getCar, deleteCar, updateCar, startCar, driveCar, stopCar,
} from '../../api/api';
import { cleanInputValue, updateGarageView, updatePageNumber } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { renderCarsAndCount } from './listOfCars';
import { generateRandomCars, setAttributeForFormUpdate } from '../../utils';

function animation(car, distance, animationTime) {
  let start = null;
  const state = {};
  console.log(start, state, '12 string');
  function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    console.log('16string', time)
    const passed = Math.round(time * (distance / animationTime));
    car.style.transform = `translateX(${Math.min(passed, distance)}px)`;
    if (passed < distance) {
      state.id = window.requestAnimationFrame(step);
      console.log(state.id)
    }

  }
  state.id = window.requestAnimationFrame(step);
  return state;
}

function getPositionAtCenter(el) {
  const domRect = el.getBoundingClientRect();
  const coordinates = {};
  coordinates.x = domRect.left + domRect.width / 2;
  coordinates.y = domRect.top + domRect.height / 2;
  console.log(coordinates);
  return coordinates;
}

function getDistanceBetweenElements(el1, el2) {
  const el1position = getPositionAtCenter(el1);
  const el2position = getPositionAtCenter(el2);
  return Math.hypot(el1position.x - el2position.x, el1position.y - el2position.y)
}

export function clickPaginationButtons() {
  // const main = document.querySelector('.main');
  document.addEventListener('click', async (e) => {
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
    if (e.target.classList.contains('btn-start')) {
      e.target.setAttribute('disabled', 'true');
      const idValue = e.target.getAttribute('id');
      const id = idValue.split('start-')[1];
      const stopBtn = document.querySelector(`#stop-${id}`);
      stopBtn.removeAttribute('disabled');
      const car = document.querySelector(`#image-${id}`);
      const flag = document.querySelector(`#flag-${id}`);
      const res = await startCar(id);
      const time = res.distance / res.velocity;
      const distanceBetweenCarFlag = Math.floor(getDistanceBetweenElements(car, flag)) + 35
      console.log(distanceBetweenCarFlag);
      const animationId = animation(car, distanceBetweenCarFlag, time);
      store.animation.animationId = animationId;
      const { success } = await driveCar(id);
      store.animation.success = success;
      if (success === false) {
        window.cancelAnimationFrame(store.animation.animationId.id)
        console.log(store)
      }
      console.log(store)
      return { success, animationId, time }
    }
    if (e.target.classList.contains('btn-stop')) {
      const idValue = e.target.getAttribute('id');
      const id = idValue.split('stop-')[1];
      const startBtn = document.querySelector(`#start-${id}`);
  
      await stopCar(id);
      const car = document.querySelector(`#image-${id}`);
      car.style.transform = 'translateX(0)';
      startBtn.removeAttribute('disabled');
      if (store.animation.animationId) {
        window.cancelAnimationFrame(store.animation.animationId.id)
      }
      e.target.setAttribute('disabled', true);
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
  // const formCreateName = document.getElementById('form-create');
  document.addEventListener('submit', async (event) => {
    if (event.target.closest('#form-create')) {
      event.preventDefault();
      const car = {
        name: store.inputName,
        color: store.inputColor,
      };
      await createCar(car);
      event.target.children[1].disabled = true;
      event.target.children[2].disabled = true;
      updateGarageView();
      // saveFetchCarsAndCountToStore(store.carsPage)
      renderCarsAndCount('.list-cars', store.carsPage);

      cleanInputValue('.input-create', '#color-name-create');
    // formCreateName();
    // updateStateGarage();
    }
  });
}

export function clickUpdate() {
// const formUpdate = document.getElementById('form-update');
  document.addEventListener('submit', async (event) => {
    if (event.target.closest('#form-update')) {
      event.preventDefault();
      const car = {
        name: store.inputName,
        color: store.inputColor,
      };
      await updateCar(store.id, car);
      updateGarageView();
      // saveFetchCarsAndCountToStore(store.carsPage)
      renderCarsAndCount('.list-cars', store.carsPage);

      cleanInputValue('.input-update', '#color-name-update');
      setAttributeForFormUpdate(event.target.closest('#form-update'));
    // formCreateName();
    // updateStateGarage();
    }
  });
}
