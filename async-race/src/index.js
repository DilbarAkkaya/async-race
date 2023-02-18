import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import { addGaragePaginationListener, addStartCarListener, addStopCarListener, addRemoveCarListener, addRaceListener,
  addSelectCarListener, addGenerateCarsListener, addResetListener, addCreateListener, addUpdateListener,
} from './pages/garage/uiGarage';
import { addInputCreateListener, addInputUpdateListener, removeWinners } from './state/updateStateGarage';
import { addWinnersPaginationButtonsListener } from './pages/winners/uiWinners';
import { renderWinnersAndCount, writeWinnersToStore } from './pages/winners/listOfWinners';
import { renderCarsAndCount, writeCarsToStore } from './pages/garage/listOfCars';
import { renderGarageMain } from './pages/garage/garageMain';
import { renderWinnersMain } from './pages/winners/winnersMain';
import { store } from './state/store';

document.addEventListener('DOMContentLoaded', async () => {
  const mainGarage = document.querySelector('.main-garage');
  const mainWinner = document.querySelector('.main-winner');
  await writeCarsToStore();
  await writeWinnersToStore();
  renderCommonView();
  mainGarage.append(renderGarageMain());
  mainWinner.append(renderWinnersMain());
  await renderWinnersAndCount('.winner-tbody');
  addGaragePaginationListener();
  addGenerateCarsListener();
  addSelectCarListener();
  addRemoveCarListener();
  addStartCarListener();
  addStopCarListener();
  addRaceListener();
  addResetListener();
  addWinnersPaginationButtonsListener();
  addInputCreateListener();
  addInputUpdateListener();
  addCreateListener();
  addUpdateListener();
});
