import { createGarageMain } from '../pages/garageMain';
import { createNewElement } from '../utils';
import { renderWinnersMain } from '../pages/winners';
import { createErrorMain } from '../pages/error';

const mainPage = createNewElement('body', 'div', { class: 'main-page', id: 'main-page' });

function handleLocation() {
  const path = window.location.pathname;
  if (path === '/') {
    mainPage.innerHTML = '';
    mainPage.append(createGarageMain());
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
  window.history.pushState({}, '', e.target.href);
  handleLocation();
}

window.addEventListener('popstate', handleLocation);
window.route = route;
handleLocation();
