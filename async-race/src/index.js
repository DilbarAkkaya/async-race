import './style.scss';
import { renderCommonView } from './pages/commonViewPage';
import { clickCreate, clickNext, clickPrev } from './pages/garage/uiGarage';

document.addEventListener('DOMContentLoaded', async () => {
  renderCommonView();
});
clickNext();
clickPrev();
clickCreate()