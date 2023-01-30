import { createNewElement } from '../../utils';
import { store } from '../../state/store'

export function createTable() {
  const table = createNewElement('table', { class: 'table', cellspacing: '0', cellpadding: '0' });
  table.innerHTML = `
  <thead>
  <tr><th>№</th>
  <th>Car</th>
  <th>Name</th>
  <th class="table-button table-wins"  id="sort-by-wins">Wins</th>
  <th class="table-button table-time"  id="sort-by-time">Best time (seconds)</th>
</tr></thead>
`;
  return table;
}
