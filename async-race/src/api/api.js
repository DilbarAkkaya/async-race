import { url } from '../constants';
import { Car } from '../pages/garage/classCar';

export async function getCars(page = 1, limitOfCarsOnPage = 7) {
  const response = await fetch(`${url}?_page${page}&_limit=${limitOfCarsOnPage}`);
  if (response.ok) return response.json();
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}

getCars()
  .then((data) => data.forEach((element) => {
    new Car(element.name, element.id, 'main').renderCar();
  }));
