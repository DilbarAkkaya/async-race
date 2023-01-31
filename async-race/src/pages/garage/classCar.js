import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../common/utils';
import { renderCarImage } from './carImage';

export class Car {
  constructor(name, id, color, parentSelector) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.parent = document.querySelector(parentSelector);
  }

  renderCar() {
    const carInstance = createNewElement('li', { class: 'car-item' });
    const selectButton = createButtonElement({ class: 'btn btn-primary select-btn', id: `select-${this.id}` }, 'select');
    const removeButton = createButtonElement({ class: 'btn btn-primary remove-btn', id: `remove-${this.id}` }, 'remove');
    const buttonsContainer = createNewElement('div', { class: 'car-btn' });
    const carName = createNewElement('span', { class: 'car-name' }, `${this.name}`);
    const roadContainer = createNewElement('div', { class: 'road-container row' });
    const carEngineContainer = createNewElement('div', { class: 'car-engine-container row' });
    const startButton = createButtonElement({ class: 'icon btn-start', id: `start-${this.id}` }, 'A');
    const stopButton = createButtonElement({ class: 'icon btn-stop', id: `stop-${this.id}`, disabled: 'true' }, 'B');
    const flagContainer = createNewElement('div', { class: 'flag', id: `flag-${this.id}` }, '🚩');
    carEngineContainer.append(startButton);
    carEngineContainer.append(stopButton);
    carEngineContainer.append(renderCarImage(this.color, this.id));
    roadContainer.append(carEngineContainer);
    roadContainer.append(flagContainer);
    carInstance.append(buttonsContainer);
    carInstance.append(roadContainer);
    buttonsContainer.append(selectButton);
    buttonsContainer.append(removeButton);
    buttonsContainer.append(carName);
    this.parent.append(carInstance);
  }
}
