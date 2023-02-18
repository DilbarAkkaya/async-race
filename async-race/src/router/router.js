import { createNewElement } from '../common/utils';
import { createErrorMain } from '../pages/error/error';
import { store } from '../state/store';

const mainPage = createNewElement('div', { class: 'main-page', id: 'main-page' });
const bodyElement = document.body;
const mainGarage = createNewElement('div', { class: 'main-garage', id: 'main-garage' });
const mainWinner = createNewElement('div', { class: 'main-winner', id: 'main-winner' });
const mainError = createErrorMain();
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
