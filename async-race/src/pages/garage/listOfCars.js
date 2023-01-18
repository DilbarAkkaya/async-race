import { getCars } from '../../api/api';
import { Car } from './classCar';
import { store } from '../../store';

async function saveFetchCarsAndCountToStore() {
  const res = await getCars();
  store.dataApi.items = res.items;
  store.dataApi.count = res.count;
}

export async function renderCarsAndCount(parentSelector) {
  await saveFetchCarsAndCountToStore();
  store.dataApi.items.forEach((item) => new Car(item.name, item.id, item.color, parentSelector).renderCar());
  const countCars = document.querySelector('.count');
  countCars.innerHTML = store.dataApi.count;
}
