import {
  MODELS, NAMES, NUMBERS_HEX_CODE, THREE_PARES_HEX_DIGIT, HASH_SYMBOL,
} from './constants';

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

export function getRandomAuto() {
  const model = MODELS[Math.floor(Math.random() * MODELS.length)];
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const randomAuto = `${model} ${name}`;
  return randomAuto;
}

export function getRandomColor() {
  let color = HASH_SYMBOL;
  for (let i = 0; i < THREE_PARES_HEX_DIGIT; i++) {
    const digitColor = NUMBERS_HEX_CODE.split('')[Math.floor(Math.random() * NUMBERS_HEX_CODE.length)];
    color += digitColor;
  }
  return color;
}

export function generateRandomCars(count = 100) {
  const randomCars = Array(count)
    .fill({ name: '', color: '' })
    .map(() => (
      { name: getRandomAuto(), color: getRandomColor() }));
  return randomCars;
}
