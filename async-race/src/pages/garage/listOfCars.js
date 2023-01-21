import { getCars } from '../../api/api';
import { Car } from './classCar';
import { store } from '../../state/store';

/* export async function saveFetchCarsAndCountToStore(page) {
  const res = await getCars(page);
  console.log('this is savefetch', res)
  store.dataApi.items = res.items;
  store.dataApi.count = res.count;
} */
/* export async function setStoreCars(page) {
  const res = await getCars(page);
  console.log(res)
  store.dataApi.items = res.items;
  store.dataApi.count = res.count;
  return store.dataApi;
} */

export async function renderCarsAndCount(parentSelector, page) {
  // await setStoreCars(1);
  //await getCars(page);
  //await saveFetchCarsAndCountToStore(page);
  const res = await getCars(page);
  console.log('this is savefetch', res)
  store.dataApi.items = res.items;
  store.dataApi.count = res.count;
 // console.log(store)
  store.dataApi.items.forEach((item) => new Car(item.name, item.id, item.color, parentSelector).renderCar());
  console.log('000000000000000000000000000', store.dataApi)
  const countCars = document.querySelector('.count');
  countCars.innerHTML = store.dataApi.count;
}
