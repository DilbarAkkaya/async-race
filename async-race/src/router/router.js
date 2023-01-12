import { createGarageMain } from '../pages/garage/garageMain';
import { createNewElement } from '../utils';
import { createWinnersMain } from '../pages/winners/winnersMain';
import { createErrorMain } from '../pages/error/error';

const mainPage = createNewElement('body', 'div', { class: 'main-page', id: 'main-page' });

function handleLocation() {
  const path = window.location.pathname;
  if (path === '/') {
    mainPage.innerHTML = '';
    mainPage.append(createGarageMain());
  } else if (path === '/winners') {
    mainPage.innerHTML = '';
    mainPage.append(createWinnersMain());
  } else {
    mainPage.innerHTML = '';
    mainPage.append(createErrorMain());
  }
}
export function route(event) {
  const e = event || window.event;
  e.preventDefault();
  window.history.pushState({}, '', e.target.href);
  handleLocation();
}

window.addEventListener('popstate', handleLocation);
window.route = route;
handleLocation();
