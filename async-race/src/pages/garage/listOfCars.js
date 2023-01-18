import { getCars } from '../../api/api';
import { Car } from './classCar';
import { createNewElement } from '../../utils';
import { store } from '../../store';

async function saveFetchCarsAndCountToStore() {
  const res = await getCars();
  store.dataApi.items = res.items;
  store.dataApi.count = res.count;
  console.log('22222', store)
}

export async function renderCarsAndCount(parentSelector) {
  await saveFetchCarsAndCountToStore();
 store.dataApi.items.forEach((item) => new Car(item.name, item.id, item.color, parentSelector).renderCar());
  console.log('offff i am tired', store.dataApi.items)
  const countCars = document.querySelector('.count');
  countCars.innerHTML = store.dataApi.count;
}


/* export async function renderTotalCountCars() {
  const countCars = document.querySelector('.count');
  countCars.innerHTML = store.dataApi.count;
  console.log(countCars);
  //titleGarage.append(countCars);
  // console.log(titleGarage);
  return countCars
} */
/*     .then(({ count }) => {
      const titleGarage = createNewElement('h1', { class: 'title' }, 'GARAGE  ');
      const countCars = createNewElement('span', { class: 'count' });
      countCars.innerHTML = count;
      console.log(countCars);
      titleGarage.append(countCars);
      console.log(titleGarage);
      return titleGarage
    }); */
/* export async function rendertitleGarage() {
  try {
    const res = await renderTotalCountCars();
    console.log('aaaaaaaaa', res)
    return res
  }
  catch (err) {
    console.log('error')
  }
  return null
}; */
