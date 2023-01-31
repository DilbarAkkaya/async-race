import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import {
  clickCreate, clickGaragePagination, clickStartCar, clickUpdate,
  clickGenerateCars, clickRemoveCar, clickSelectCar, clickStopCar,
  clickRace, clickReset,
} from './pages/garage/uiGarage';
import { inputCreateListener, inputUpdateListener } from './state/updateStateGarage';
import { clickWinnersPaginationButtons } from './pages/winners/uiWinners';

document.addEventListener('DOMContentLoaded', async () => {
  renderCommonView();
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
