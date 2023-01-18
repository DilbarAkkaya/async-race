import { renderFormsButtons, renderGarageMain } from '../pages/garage/garageMain';
import { createNewElement } from '../utils';
import { createWinnersMain } from '../pages/winners/winnersMain';
import { createErrorMain } from '../pages/error/error';
import { store } from '../store';

const mainPage = createNewElement('div', { class: 'main-page', id: 'main-page' });
const bodyElement = document.body;
bodyElement.append(mainPage);

async function handleLocation() {
  const path = window.location.pathname;
  if (path === '/') {
    mainPage.innerHTML = '';
    mainPage.append(renderFormsButtons())
   // mainPage.append(await renderGarageMain());
    const input = document.querySelector('input');
    input.value = store.inputName
  } else if (path === '/winners') {
    mainPage.innerHTML = '';
    mainPage.append(createWinnersMain());
  } else {
    mainPage.innerHTML = '';
    mainPage.append(createErrorMain());
  }
}
export async function route(event) {
  const e = event || window.event;
  e.preventDefault();
  window.history.pushState(store, '', e.target.href);
  console.log(store)
  await handleLocation();
}

window.addEventListener('popstate', handleLocation);
window.route = route;
handleLocation();
