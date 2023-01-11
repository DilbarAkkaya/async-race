import { createButtonElement } from "../components/button";
export function renderGarageView (){
  const body = document.body;
  const toGarageButton = createButtonElement({ class: 'btn btn-primary'}, 'To Garage');
  body.append(toGarageButton);
}

