import './style.scss';
import { renderGarageView } from './pages/garage/garage';
import { renderFormsButtons } from './pages/garage/garageMain';

document.addEventListener('DOMContentLoaded', async () => {
  //renderFormsButtons()
 renderGarageView();
})
// getCars();
// new Car('ladaaa', 10, '.main').renderCar();
