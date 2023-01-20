import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { store } from '../../state/store'
import { renderCarsAndCount, setStoreCars } from './listOfCars';
import { LIMIT_CARS_ON_PAGE } from '../../constants';
import { getCars } from '../../api/api';
import { updateGarageView } from './updateGarageView';

const prev = createButtonElement({ class: 'btn btn-primary', id: 'prev' }, 'prev');
const next = createButtonElement({ class: 'btn btn-primary', id: 'next' }, 'next');

export function renderPagination() {
  const paginationContainer = document.querySelector('.pagination-container');
  paginationContainer.append(prev);
  paginationContainer.append(next);  
  return paginationContainer
}

export async function updateStateGarage() {
 // const pageCount = Math.ceil(store.dataApi.count / store.carsPerPage);
 // 

 
  const start  = LIMIT_CARS_ON_PAGE * store.carsPage;
  const end = start + LIMIT_CARS_ON_PAGE;
  const paginetedData = store.dataApi.items.slice(start, end);
 // store.dataApi.items = paginetedData;
return res}



next.addEventListener('click', ()=>{
  const pageNumber = document.querySelector('.page');
  //setStoreCars(3)
  store.carsPage++;
  updateGarageView();
  renderCarsAndCount('.list-cars', store.carsPage);
  pageNumber.innerText = store.carsPage;
 // updateStateGarage()
})