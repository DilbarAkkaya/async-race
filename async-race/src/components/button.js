//import { createNewElement } from "../utils";
export function createButtonElement(attrs, text) {
  const parent = new DocumentFragment();
  const newElement = document.createElement('button');
  if (attrs) {
    for (const key in attrs) {
      if (key == 'class') {
        newElement.className = attrs[key];
      } else if (key == 'id') {
        newElement.id = attrs[key];
      } else {
        newElement.setAttribute(key, attrs[key]);
      }
    }
  }
  if (text) {
    newElement.innerHTML = text;
  }
  parent.append(newElement);
  return newElement;
};