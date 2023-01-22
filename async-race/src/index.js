import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import {
  clickCreate, clickPaginationButtons,
} from './pages/garage/uiGarage';
import { inputCreateListener } from './state/updateStateGarage';

document.addEventListener('DOMContentLoaded', async () => {
  renderCommonView();
  clickCreate();
  clickPaginationButtons();
// clickPrev();
// await updateStateGarage()
});
inputCreateListener();
