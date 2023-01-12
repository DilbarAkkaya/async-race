import { createGarageMain } from "../pages/garageMain";
import { createNewElement } from "../utils";
import { renderWinnersMain } from "../pages/winners";
import { createErrorMain } from "../pages/error";

export function route(event) {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};
const mainPage = createNewElement('body', 'div', {class: 'main-page', id: 'main-page'});
function handleLocation() {
  const path = window.location.pathname;
  if(path === '/') {
    mainPage.innerHTML = '';
    mainPage.append(createGarageMain());
  } else if(path === '/winners') {
    mainPage.innerHTML = '';
    mainPage.append(renderWinnersMain());
  } else {
  document.body.innerHTML = '';
  document.body.append(createErrorMain());
  }
}

window.addEventListener('popstate', handleLocation);
window.route = route;
handleLocation();