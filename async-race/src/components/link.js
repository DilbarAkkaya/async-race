// import { createNewElement } from "../utils";
export function createLinkElement(attrs, text) {
  const parent = new DocumentFragment();
  const newElement = document.createElement('a');
  if (attrs) {
    Object.keys(attrs).forEach((key) => {
      if (key === 'class') {
        newElement.className = attrs[key];
      } else if (key === 'id') {
        newElement.id = attrs[key];
      } else {
        newElement.setAttribute(key, attrs[key]);
      }
    });
  }
  if (text) {
    newElement.innerHTML = text;
  }
  parent.append(newElement);
  return newElement;
}