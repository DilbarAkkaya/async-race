import {
  createCar, getCar, deleteCar, updateCar, startCar, driveCar, stopCar,
  getWinner, createWinner, getWinnerStatus, updateWinner, getWinners
} from '../../api/api';
import { cleanInputValue, removeGarage, removeWinners, updatePageNumber } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { renderCarsAndCount, writeCarsToStore } from './listOfCars';
import { generateRandomCars, disableFormElements, animation } from '../../common/utils';
import { createWinnerPopap } from '../winners/winnersPopap';
import { DIGIT_AFTER_DECIMAL, MILLISECONDS_IN_MINUTE, POSITION_RIGTH_FLAG } from '../../common/constants';
import { renderWinnersAndCount, writeWinnersToStore } from '../winners/listOfWinners';

function disableButtons() {
  const moveButtons = document.querySelectorAll('.move');
  moveButtons.forEach((item) => { item.disabled = 'true'; });
}

async function createNewWinner(value) {
  let newWinner = {
    id: value.id,
    wins: 1,
    time: value.time,
  };
  await getWinnerStatus(value.id)
    .then(async (result) => {
      if (result === 404) {
        await createWinner(newWinner);
      } else {
        await getWinner(value.id).then(async (result) => {
          await updateWinner(value.id, newWinner = {
            id: result.id,
            wins: result.wins + 1,
            time: value.time > result.time ? result.time : value.time,
          });
        });
      }
    });
}

async function startMoveCar(id) {
  const carImage = document.querySelector(`#image-${id}`);
  return new Promise((resolve, reject) => {
    startCar(id).then((result) => {
      const time = Math.round(result.distance / result.velocity);
      const distanceBetweenCarFlag = window.innerWidth - POSITION_RIGTH_FLAG;
      const animationId = animation(carImage, distanceBetweenCarFlag, time);
      store.animation[id] = animationId;
      store.animation[id].time = time;
      driveCar(id).then((result) => {
        if (result.success === false) {
          cancelAnimationFrame(store.animation[id].id);
          reject(new Error('The engine stopped'));
        } else {
          const carObj = store.dataApi.items.find((car) => car.id === id);
          const timeInSec = +(store.animation[id].time / MILLISECONDS_IN_MINUTE).toFixed(DIGIT_AFTER_DECIMAL);
          resolve({ ...carObj, time: timeInSec });
        }
      });
    });
  });
}

export function clickGaragePagination() {
  document.addEventListener('click', async (e) => {
    if (e.target.closest('#next')) {
      store.carsPage++;
      await writeCarsToStore();
      removeGarage();
      await renderCarsAndCount('.list-cars');
      updatePageNumber('.page', store.carsPage);
    }
    if (e.target.closest('#prev')) {

      store.carsPage--;
      await writeCarsToStore();
      removeGarage();
      await renderCarsAndCount('.list-cars');
      updatePageNumber('.page', store.carsPage);
    }
  });
}

export function clickGenerateCars() {
  document.addEventListener('click', async (e) => {
    if (e.target.closest('#generate-btn')) {
      e.target.disabled = true;
      const cars = generateRandomCars();
      await Promise.all(cars.map((car) => createCar(car)));
      removeGarage();
      await writeCarsToStore();
      renderCarsAndCount('.list-cars');
      e.target.disabled = false;
    }
  });
}

export function clickSelectCar() {
  document.addEventListener('click', async (e) => {
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
  });
}

export function clickRemoveCar() {
  document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const countCars = document.querySelector('.count');
      const idValue = e.target.getAttribute('id');
      const id = idValue.split('remove-')[1];
      await deleteCar(id);
      removeGarage();
      await writeCarsToStore();
      renderCarsAndCount('.list-cars');
      countCars.innerHTML = store.dataApi.count;
    }
  });
}

export function clickStartCar() {
  document.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn-start')) {
      e.target.setAttribute('disabled', 'true');
      const idValue = e.target.getAttribute('id');
      const id = idValue.split('start-')[1];
      const stopBtn = document.querySelector(`#stop-${id}`);
      stopBtn.removeAttribute('disabled');
      await startMoveCar(id);
    }
  });
}
export function clickStopCar() {
  document.addEventListener('click', async (e) => {
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
  });
}

export function clickRace() {
  document.addEventListener('click', async (e) => {
    if (e.target.closest('#race')) {
      store.isAnimated = true;
      disableButtons();
      const cars = store.dataApi.items;
      const promises = cars.map((item) => startMoveCar(item.id));
      const newWinner = await Promise.any(promises);
      store.winnerName = newWinner.name;
      store.winnerTime = newWinner.time;
      createWinnerPopap(store.winnerName, store.winnerTime, '.list-cars');
      console.log(await newWinner.name);
      console.log(await store.winnerName);
      await createNewWinner(newWinner);
      
      removeWinners();
      // await getWinners();
      await writeWinnersToStore();
      //console.log(await res);
      // console.log(await store)
      await renderWinnersAndCount('.winner-tbody');
      const resetBtn = document.querySelector('#reset');
      resetBtn.removeAttribute('disabled');
    }
  });
}

export function clickReset() {
  document.addEventListener('click', async (e) => {
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
  document.addEventListener('submit', async (e) => {
    if (e.target.closest('#form-create')) {
      e.preventDefault();
      const car = {
        name: store.inputName,
        color: store.inputColor,
      };
      await createCar(car);
      e.target.children[1].disabled = true;
      e.target.children[2].disabled = true;
      removeGarage();
      await writeCarsToStore();
      renderCarsAndCount('.list-cars');
      cleanInputValue('.input-create', '#color-name-create');
    }
  });
}

export function clickUpdate() {
  document.addEventListener('submit', async (e) => {
    if (e.target.closest('#form-update')) {
      e.preventDefault();
      const car = {
        name: store.inputName,
        color: store.inputColor,
      };
      await updateCar(store.id, car);
      removeGarage();
      await writeCarsToStore();
      renderCarsAndCount('.list-cars');
      cleanInputValue('.input-update', '#color-name-update');
      disableFormElements(e.target.closest('#form-update'));
    }
  });
}

   /* await Promise.any(promises)
        .then(async (value) => {
          store.winnerName = value.name;
          store.winnerTime = value.time;
          await createNewWinner(value);
          return value;
        })
        .catch(new Error('Something went wrong')); */