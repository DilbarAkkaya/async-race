import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';
import { store } from '../../state/store'
import { renderCarsAndCount, setStoreCars } from './listOfCars';
import { LIMIT_CARS_ON_PAGE } from '../../constants';
import { getCars } from '../../api/api';
import { updateGarageView } from './updateGarageView';

const prev = createButtonElement({ class: 'btn btn-primary', id: 'prev' }, 'prev');
const next = createButtonElement({ class: 'btn btn-primary', id: 'next' }, 'next');

export function renderPaginationButtons() {
  const paginationContainer = document.querySelector('.pagination-container');
  paginationContainer.append(prev);
  paginationContainer.append(next);
  return paginationContainer
}

function updatePageNumber() {
  const pageNumber = document.querySelector('.page');
  pageNumber.innerText = store.carsPage;
}
function incrementPage() {
  store.carsPage++;
}
function decrementPage() {
  store.carsPage--;
}
export async function updateStateGarage() {
  updateGarageView();
  renderCarsAndCount('.list-cars', store.carsPage);
  updatePageNumber();
}

next.addEventListener('click', () => {
  incrementPage()
  updateStateGarage()
})
prev.addEventListener('click', () => {
  decrementPage()
  updateStateGarage()
})