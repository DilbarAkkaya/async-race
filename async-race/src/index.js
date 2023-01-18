import './style.scss';
import { renderCommonView } from './pages/garage/garage';
import { renderFormsButtons, renderGarageMain } from './pages/garage/garageMain';
import { getCars } from './api/api';
import { renderCars } from './pages/garage/listOfCars';

document.addEventListener('DOMContentLoaded', async () => {
  renderCommonView();
});
