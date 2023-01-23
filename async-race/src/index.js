import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import {
  clickCreate, clickPaginationButtons, clickUpdate,
} from './pages/garage/uiGarage';
import { inputCreateListener, inputUpdateListener } from './state/updateStateGarage';

document.addEventListener('DOMContentLoaded', async () => {
  renderCommonView();

  clickPaginationButtons();
  inputCreateListener();
  inputUpdateListener();
  clickCreate();
  clickUpdate();
// clickPrev();
// await updateStateGarage()
});

