import {
  createCar, getCar, deleteCar, updateCar, startCar, driveCar, stopCar, getWinner, createWinner, getWinnerStatus, updateWinner,
} from '../../api/api';
import { cleanInputValue, updateGarageView, updatePageNumber } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { renderCarsAndCount } from './listOfCars';
import { generateRandomCars, setAttributeForFormUpdate } from '../../utils';
import { createWinnerPopap } from '../winners/winnersPopap';
/*
function animation(car, distance, animationTime) {
  let start = 0;
  const animationStore = {};
  function step(timestamp) {
    if (start === 0) start = timestamp;
    const time = timestamp - start;
    const progress = Math.round(time * (distance / animationTime));
    car.style.transform = `translateX(${Math.min(progress, distance)}px)`;
    if (progress < distance) {
      animationStore.id = window.requestAnimationFrame(step);
    }
  }
  animationStore.id = window.requestAnimationFrame(step);
  return animationStore;
} */

/* function getPositionAtCenter(el) {
  const domRect = el.getBoundingClientRect();
  const coordinates = {};
  coordinates.x = domRect.left + domRect.width / 2;
  coordinates.y = domRect.top + domRect.height / 2;
  return coordinates;
}

function getDistanceBetweenElements(el1, el2) {
  const el1position = getPositionAtCenter(el1);
  const el2position = getPositionAtCenter(el2);
  return Math.hypot(el1position.x - el2position.x, el1position.y - el2position.y);
} */

function animation(car, distance, animationTime) {
  let start = 0;
  const animationStore = {};
  function step(timestamp) {
    if (start === 0) start = timestamp;
    const time = timestamp - start;
    const progress = Math.round(time * (distance / animationTime));
    car.style.transform = `translateX(${Math.min(progress, distance)}px)`;
    if (progress < distance) {
      animationStore.id = requestAnimationFrame(step);
    }
  }
  animationStore.id = requestAnimationFrame(step);
  return animationStore;
}

function disableButtons() {
  const moveButtons = document.querySelectorAll('.move');
  moveButtons.forEach((item) => { item.disabled = 'true'; });
}
async function startMoveCar(id) {
  const carImage = document.querySelector(`#image-${id}`);
  // const flag = document.querySelector(`#flag-${id}`);

  return new Promise((resolve, reject) => {
    // const promiseStart = startCar(id);
    startCar(id).then((result) => {
      const time = Math.round(result.distance / result.velocity);
      const distanceBetweenCarFlag = window.innerWidth - 190;
      const animationId = animation(carImage, distanceBetweenCarFlag, time);
      store.animation[id] = animationId;
      store.animation[id].time = time;
      // const promiseDrive = driveCar(id);
      driveCar(id).then((result) => {
        if (result.success === false) {
          cancelAnimationFrame(store.animation[id].id);
          reject(new Error('The engine stopped'));
        } else {
          const carObj = store.dataApi.items.find((car) => car.id === id);
          const timeInSec = +(store.animation[id].time / 1000).toFixed(2);
          resolve({ ...carObj, time: timeInSec });
        }
      });
    });
  });
}

/* async function startMoveCar(id) {
  const carImage = document.querySelector(`#image-${id}`);
  //const flag = document.querySelector(`#flag-${id}`);
  return new Promise((resolve, reject) => {
    //const promiseStart = startCar(id);
    startCar(id).then((result) => {
      console.log(result)
      const time = Math.round(result.distance / result.velocity);
      const distanceBetweenCarFlag = window.innerWidth - 190;
      const animationId = animation(carImage, distanceBetweenCarFlag, time);
      store.animation[id] = animationId;
      console.log(store.animation)
      store.animation[id].time = time;
    })
   // const promiseDrive = driveCar(id);
    driveCar(id).then((result) => {
      if (result.success === false) {
        cancelAnimationFrame(store.animation[id].id);
        reject(new Error('The engine stopped'));
      } else {
        const carObj = store.dataApi.items.find((car) => car.id === id);
        const timeInSec = +(store.animation[id].time / 1000).toFixed(2);
        resolve({ ...carObj, time: timeInSec });
      }
    });
  });
} */
function createNewWinner(value) {
  let newWinner = {
    id: value.id,
    wins: 1,
    time: value.time,
  };
  getWinnerStatus(value.id)
    .then((result) => {
      if (result === 404) {
        createWinner(newWinner);
      } else {
        getWinner(value.id).then((result) => {
          updateWinner(value.id, newWinner = {
            id: result.id,
            wins: result.wins + 1,
            time: value.time > result.time ? result.time : value.time,
          });
        });
      }
    });
}

export function clickPaginationButtons() {
  document.addEventListener('click', async (e) => {
    if (e.target.closest('#next')) {
      updateGarageView();
      store.carsPage++;
      renderCarsAndCount('.list-cars', store.carsPage);
      updatePageNumber('.page', store.carsPage);
    }
    if (e.target.closest('#prev')) {
      updateGarageView();
      store.carsPage--;
      renderCarsAndCount('.list-cars', store.carsPage);
      updatePageNumber('.page', store.carsPage);
    }
    if (e.target.closest('#generate-btn')) {
      e.target.disabled = true;
      const cars = generateRandomCars();
      await Promise.all(cars.map((car) => createCar(car)));
      updateGarageView();
      renderCarsAndCount('.list-cars', store.carsPage);
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
      await startMoveCar(id);
    }
    if (e.target.classList.contains('btn-stop')) {
      const idValue = e.target.getAttribute('id');
      const id = idValue.split('stop-')[1];
      const startBtn = document.querySelector(`#start-${id}`);
      const car = document.querySelector(`#image-${id}`);
      startBtn.removeAttribute('disabled');
      await stopCar(id);
      if (store.animation[id]) {
        cancelAnimationFrame(store.animation[id].id);
      }
      e.target.setAttribute('disabled', true);
      car.style.transform = 'translateX(0)';
    }
    if (e.target.closest('#race')) {
      store.isAnimated = true;
      disableButtons();
      const cars = store.dataApi.items;
      const promises = cars.map((item) => startMoveCar(item.id));
      await Promise.any(promises)
        .then((value) => {
          store.winnerName = value.name;
          store.winnerTime = value.time;
          createNewWinner(value);
          return value;
        })
        .catch(new Error('Something went wrong'));
      createWinnerPopap(store.winnerName, store.winnerTime);
      const resetBtn = document.querySelector('#reset');
      resetBtn.removeAttribute('disabled');
    }
    if (e.target.closest('#reset')) {
      const cars = store.dataApi.items;
      await Promise.all(cars.map((car) => {
        stopCar(car.id);
        if (store.animation[car.id]) {
          cancelAnimationFrame(store.animation[car.id].id);
        }
        const enabledBtns = document.querySelectorAll('.enabled');
        enabledBtns.forEach((btn) => btn.removeAttribute('disabled'));
        const carImage = document.querySelector(`#image-${car.id}`);
        carImage.style.transform = 'translateX(0)';
        return car;
      }));
    }
  });
}

export function clickCreate() {
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
      renderCarsAndCount('.list-cars', store.carsPage);
      cleanInputValue('.input-create', '#color-name-create');
    }
  });
}

export function clickUpdate() {
  document.addEventListener('submit', async (event) => {
    if (event.target.closest('#form-update')) {
      event.preventDefault();
      const car = {
        name: store.inputName,
        color: store.inputColor,
      };
      await updateCar(store.id, car);
      updateGarageView();
      renderCarsAndCount('.list-cars', store.carsPage);
      cleanInputValue('.input-update', '#color-name-update');
      setAttributeForFormUpdate(event.target.closest('#form-update'));
    }
  });
}
