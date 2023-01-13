/* export function createNewElement(parentSelector, el, attrs, text) {
  const parent = document.querySelector(parentSelector);
  const newElement = document.createElement(el);
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
} */
export function createNewElement(el, attrs, text) {
  const newElement = document.createElement(el);
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
  return newElement;
}
