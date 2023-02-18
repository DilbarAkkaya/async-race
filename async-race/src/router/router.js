import { renderGarageMain } from '../pages/garage/garageMain';
import { createNewElement } from '../common/utils';
import { renderWinnersMain } from '../pages/winners/winnersMain';
import { createErrorMain } from '../pages/error/error';
import { store } from '../state/store';
import { removeWinners } from '../state/updateStateGarage';
import { writeCarsToStore } from '../pages/garage/listOfCars';
import { renderWinnersAndCount } from '../pages/winners/listOfWinners';

const mainPage = createNewElement('div', { class: 'main-page', id: 'main-page' });
const bodyElement = document.body;
const mainGarage = createNewElement('div', { class: 'main-garage', id: 'main-garage' });
const mainWinner = createNewElement('div', { class: 'main-winner', id: 'main-winner' });
const mainError = createErrorMain();
const modal = document.querySelector('.modal');
bodyElement.append(mainPage);
mainPage.append(mainGarage);
mainPage.append(mainWinner);
mainPage.append(mainError);

function handleLocation() {
  if (window.location.pathname === '/') {
    mainWinner.style.display = 'none';
    mainGarage.style.display = 'block';
    mainError.style.display = 'none';
  } else if (window.location.pathname === '/winners') {
    mainGarage.style.display = 'none';
    mainWinner.style.display = 'block';
    mainError.style.display = 'none';
    //removeWinners();
    //await renderWinnersAndCount('.winner-tbody');
    //modal.style.display = 'none';
  } else {
    mainGarage.style.display = 'none';
    mainWinner.style.display = 'none';
  }
}
export async function route(event) {
  const e = event || window.event;
  e.preventDefault();
  window.history.pushState(store, '', e.target.href);
  handleLocation();
}

window.addEventListener('popstate', handleLocation);
window.route = route;
handleLocation();
