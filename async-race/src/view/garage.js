import { createButtonElement } from "../components/button";
import { createHeader } from "../components/header";
export function renderGarageView (){
  const body = document.body;
  const toGarageButton = createButtonElement({ class: 'btn btn-primary'}, 'To Garage');
  const header = createHeader();
  header.append(toGarageButton);
  body.append(header);
}

