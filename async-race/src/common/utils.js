import {
  MODELS, NAMES, NUMBERS_HEX_CODE, THREE_PARES_HEX_DIGIT, HASH_SYMBOL,
} from './constants';

export function createNewElement(el, attrs, text) {
  const newElement = document.createElement(el);
  if (attrs) {
    Object.keys(attrs).forEach((key) => {
      switch (key) {
        case ('class'): newElement.className = attrs[key];
          break;
        case ('id'): newElement.id = attrs[key];
          break;
        default: newElement.setAttribute(key, attrs[key]);
          break;
      }
/*       if (key === 'class') {
        newElement.className = attrs[key];
      } else if (key === 'id') {
        newElement.id = attrs[key];
      } else {
        newElement.setAttribute(key, attrs[key]);
      } */
    });
  }
  if (text) {
    newElement.innerHTML = text;
  }
  return newElement;
}
export function setAttributeForFormUpdate(param) {
  Array.from(param.elements).forEach((formElement) => formElement.setAttribute('disabled', 'true'));
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

export function animation(car, distance, animationTime) {
  let start = 0;
  const animationStore = {};
  function step(timestamp) {
    if (start === 0) start = timestamp;
    const time = timestamp - start;
    const progress = Math.round(time * (distance / animationTime));
    car.style.transform = `translateX(${Math.min(progress, distance)}px)`;
    if (progress < distance) {
      animationStore.id = requestAnimationFrame(step);
    }
  }
  animationStore.id = requestAnimationFrame(step);
  return animationStore;
}
