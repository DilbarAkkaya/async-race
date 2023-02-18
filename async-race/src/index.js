import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import {
  clickCreate, clickGaragePagination, clickStartCar, clickUpdate,
  clickGenerateCars, clickRemoveCar, clickSelectCar, clickStopCar,
  clickRace, clickReset,
} from './pages/garage/uiGarage';
import { inputCreateListener, inputUpdateListener, removeWinners } from './state/updateStateGarage';
import { clickWinnersPaginationButtons } from './pages/winners/uiWinners';
import { renderWinnersAndCount, writeWinnersToStore } from './pages/winners/listOfWinners';
import { renderCarsAndCount, writeCarsToStore } from './pages/garage/listOfCars';
import { renderGarageMain } from './pages/garage/garageMain';
import { renderWinnersMain } from './pages/winners/winnersMain';
import { store } from './state/store';

document.addEventListener('DOMContentLoaded', async () => {
  clickRace();
  const mainGarage = document.querySelector('.main-garage');
  const mainWinner = document.querySelector('.main-winner');
  await writeCarsToStore();
  await writeWinnersToStore();
  renderCommonView();
  mainGarage.append(renderGarageMain());
  mainWinner.append(renderWinnersMain());
  await renderWinnersAndCount('.winner-tbody');
  console.log(await store)
  clickGaragePagination();
  clickGenerateCars();
  clickSelectCar();
  clickRemoveCar();
  clickStartCar();
  clickStopCar();

  clickReset();
  clickWinnersPaginationButtons();
  inputCreateListener();
  inputUpdateListener();
  clickCreate();
  clickUpdate();
});
