import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import {
  clickCreate, clickPaginationButtons, clickUpdate,
} from './pages/garage/uiGarage';
import { inputCreateListener, inputUpdateListener } from './state/updateStateGarage';
import { clickWinnersPaginationButtons } from './pages/winners/uiWinners';

document.addEventListener('DOMContentLoaded', async () => {
  renderCommonView();
  clickPaginationButtons();
  clickWinnersPaginationButtons();
  inputCreateListener();
  inputUpdateListener();
  clickCreate();
  clickUpdate();
});
