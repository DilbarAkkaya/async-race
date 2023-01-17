import { getCars } from '../../api/api';
import { Car } from './classCar';
import { createNewElement } from '../../utils';

export async function renderCars(parentSelector) {
  await getCars()
    .then(({ items }) => (items.forEach((item) => new Car(item.name, item.id, item.color, parentSelector).renderCar())));
}

export async function renderTotalCountCars() {
  const { count } = await getCars();
  console.log(count);

  const countCars = createNewElement('span', { class: 'count' });
  countCars.innerHTML = count;
  console.log(countCars);
  //titleGarage.append(countCars);
 // console.log(titleGarage);
  return countCars
}
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
