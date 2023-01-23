import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import {
  clickCreate, clickPaginationButtons, clickUpdate,
} from './pages/garage/uiGarage';
import { inputCreateListener } from './state/updateStateGarage';

document.addEventListener('DOMContentLoaded', async () => {
  renderCommonView();
  clickCreate();
  clickPaginationButtons();
  clickUpdate();
// clickPrev();
// await updateStateGarage()
});
inputCreateListener();
