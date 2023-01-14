import './style.scss';
import { renderGarageView } from './pages/garage/garage';
import { getCars } from './api/api';
import { Car } from './pages/garage/classCar';

renderGarageView();
// getCars();
new Car('ladaaa', 10, '.main').renderCar();
