import { renderGarageMain } from '../pages/garage/garageMain';
import { createNewElement } from '../common/utils';
import { renderWinnersMain } from '../pages/winners/winnersMain';
import { createErrorMain } from '../pages/error/error';
import { store } from '../state/store';
import { removeWinners } from '../state/updateStateGarage';
import { writeCarsToStore } from '../pages/garage/listOfCars';
import { writeWinnersToStore } from '../pages/winners/listOfWinners';


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
/*   const mainGarage = document.querySelector('.main-garage');
const mainWinner = document.querySelector('.main-winner');
const mainError = document.querySelector('.error');
const modal = document.querySelector('.modal'); */
  if (window.location.pathname === '/') {
    mainWinner.style.display = 'none';
    mainGarage.style.display = 'block';
    mainError.style.display = 'none';
  } else if (window.location.pathname === '/winners') {
    mainGarage.style.display = 'none';
    mainWinner.style.display = 'block';
    mainError.style.display = 'none';
    if (modal) {
      modal.style.display = 'none';
    }
    removeWinners();
    mainWinner.append(renderWinnersMain());
  } else {
    mainGarage.style.display = 'none';
    mainWinner.style.display = 'none';
  }
}
export async function route(event) {
  const e = event || window.event;
  e.preventDefault();
  window.history.pushState(store, '', e.target.href);
  removeWinners();
  await handleLocation();
}

window.addEventListener('popstate', handleLocation);
window.route = route;
removeWinners();
handleLocation();
