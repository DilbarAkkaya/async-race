import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import { clickCreate, clickNext, clickPrev } from './pages/garage/uiGarage';
import { inputName } from './state/updateStateGarage';

document.addEventListener('DOMContentLoaded', async () => {
  renderCommonView();
});
inputName();
clickNext();
clickPrev();
clickCreate();