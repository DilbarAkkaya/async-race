import { renderGarageMain } from '../pages/garage/garageMain';
import { createNewElement } from '../utils';
import { renderWinnersMain } from '../pages/winners/winnersMain';
import { createErrorMain } from '../pages/error/error';
import { store } from '../state/store';
import { updateWinnerView } from '../state/updateStateGarage';

const mainPage = createNewElement('div', { class: 'main-page', id: 'main-page' });
const bodyElement = document.body;
const mainGarage = createNewElement('div', { class: 'main-garage', id: 'main-garage' });
const mainWinner = createNewElement('div', { class: 'main-winner', id: 'main-winner' });
const mainError = createErrorMain();
bodyElement.append(mainPage);
mainPage.append(mainGarage);
mainPage.append(mainWinner);
mainPage.append(mainError);
mainGarage.append(renderGarageMain());
// mainWinner.append(renderWinnersMain());
function handleLocation() {
  const path = window.location.pathname;
  if (path === '/') {
    mainWinner.style.display = 'none';
    mainGarage.style.display = 'block';
    mainError.style.display = 'none';
    // updateWinnerView();
    // mainPage.innerHTML = '';
  } else if (path === '/winners') {
    mainGarage.style.display = 'none';
    mainWinner.style.display = 'block';
    mainError.style.display = 'none';
    updateWinnerView();
    //  mainWinner.innerHTML = '';
    mainWinner.append(renderWinnersMain());
  } else {
    mainGarage.style.display = 'none';
    mainWinner.style.display = 'none';
    // mainPage.innerHTML = '';

  }
}
export function route(event) {
  const e = event || window.event;
  e.preventDefault();
  window.history.pushState(store, '', e.target.href);
  updateWinnerView();
  handleLocation();
}

window.addEventListener('popstate', handleLocation);
window.route = route;
// updateGarageView();
updateWinnerView();
handleLocation();
