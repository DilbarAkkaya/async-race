import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import {
  clickCreate, clickGaragePagination, clickStartCar, clickUpdate,
  clickGenerateCars, clickRemoveCar, clickSelectCar, clickStopCar,
  clickRace, clickReset,
} from './pages/garage/uiGarage';
import { inputCreateListener, inputUpdateListener } from './state/updateStateGarage';
import { clickWinnersPaginationButtons } from './pages/winners/uiWinners';
import { renderWinnersAndCount, writeWinnersToStore } from './pages/winners/listOfWinners';
import { renderCarsAndCount, writeCarsToStore } from './pages/garage/listOfCars';
import { renderGarageMain } from './pages/garage/garageMain';

document.addEventListener('DOMContentLoaded', async () => {
  const mainGarage = document.querySelector('.main-garage');
  await writeCarsToStore();
  await writeWinnersToStore();
  renderCommonView();
  mainGarage.append(renderGarageMain());
  clickGaragePagination();
  clickGenerateCars();
  clickSelectCar();
  clickRemoveCar();
  clickStartCar();
  clickStopCar();
  clickRace();
  clickReset();
  clickWinnersPaginationButtons();
  inputCreateListener();
  inputUpdateListener();
  clickCreate();
  clickUpdate();
});
