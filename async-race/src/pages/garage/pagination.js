import { createButtonElement } from '../../components/button';
import { createNewElement } from '../../utils';

export function renderPagination() {
  const paginationContainer = document.querySelector('.pagination-container');
  const prev = createButtonElement({ class: 'btn btn-primary', id: 'prev' }, 'prev');
  const next = createButtonElement({ class: 'btn btn-primary', id: 'next' }, 'next');
  paginationContainer.append(prev);
  paginationContainer.append(next);  
  return paginationContainer
}