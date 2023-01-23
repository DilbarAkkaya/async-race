import { createNewElement } from "../utils";

export function createTable() {
  const table = createNewElement('table', { class: 'table', cellspacing: '0', cellpadding: '0' });
  return table;
}