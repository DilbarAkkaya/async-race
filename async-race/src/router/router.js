import { renderGarageMain } from '../pages/garage/garageMain';
import { createNewElement } from '../utils';
import { renderWinnersMain } from '../pages/winners/winnersMain';
import { createErrorMain } from '../pages/error/error';
import { store } from '../state/store';
import { updateGarageView, updateWinnerView } from '../state/updateStateGarage';

const mainPage = createNewElement('div', { class: 'main-page', id: 'main-page' });
const bodyElement = document.body;
bodyElement.append(mainPage);

function handleLocation() {
  const path = window.location.pathname;
  if (path === '/') {
    updateWinnerView();
    mainPage.innerHTML = '';
    mainPage.append(renderGarageMain());
  } else if (path === '/winners') {
    mainPage.innerHTML = '';
    mainPage.append(renderWinnersMain());
  } else {
    mainPage.innerHTML = '';
    mainPage.append(createErrorMain());
  }
}
export function route(event) {
  const e = event || window.event;
  e.preventDefault();
  window.history.pushState(store, '', e.target.href);
  updateGarageView();
  handleLocation();
}

window.addEventListener('popstate', handleLocation);
window.route = route;
updateGarageView();
handleLocation();
