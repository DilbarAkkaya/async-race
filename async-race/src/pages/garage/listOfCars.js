import { getCars } from '../../api/api';
import { Car } from './classCar';

export async function renderCars(parentSelector) {
  await getCars()
    .then((data) => data.forEach((element) => new Car(element.name, element.id, element.color, parentSelector).renderCar()));
}
