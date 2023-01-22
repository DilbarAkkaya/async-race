import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import { clickCreate, clickNext, clickPrev } from './pages/garage/uiGarage';
import { inputCreateListener, inputName } from './state/updateStateGarage';
import { updateStateGarage } from './state/updateStateGarage';
import { clickPaginationButtons } from './pages/garage/uiGarage';

document.addEventListener('DOMContentLoaded', async () => {
  renderCommonView();
  clickCreate();
 clickPaginationButtons();
// clickPrev();
//await updateStateGarage()
});
inputCreateListener();



