import { updatePageNumber, removeWinners } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { renderWinnersAndCount } from './listOfWinners';

export function clickWinnersPaginationButtons() {
  document.addEventListener('click', async (e) => {
    if (e.target.closest('#next-win')) {
      removeWinners();
      store.winnersPage++;
      renderWinnersAndCount('.winner-tbody', store.winnersPage);

      updatePageNumber('.page-win', store.winnersPage);
    }
    if (e.target.closest('#prev-win')) {
      removeWinners();
      store.winnersPage--;
      renderWinnersAndCount('.winner-tbody', store.winnersPage);
      updatePageNumber('.page-win', store.winnersPage);
    }
  });
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.table-wins')) {
    store.sort = 'wins';
    if (store.order === 'asc') {
      e.target.innerText = 'Wins ↓';
      store.order = 'desc';
    } else {
      store.order = 'asc';
      e.target.innerText = 'Wins ↑';
    }
    removeWinners();
    renderWinnersAndCount('.winner-tbody', store.winnersPage);
  }
  if (e.target.closest('.table-time')) {
    store.sort = 'time';
    if (store.order === 'asc') {
      e.target.innerText = 'Best time (sec) ↑';
      store.order = 'desc';
    } else {
      e.target.innerText = 'Best time (sec) ↓';
      store.order = 'asc';
    }
    removeWinners();
    renderWinnersAndCount('.winner-tbody', store.winnersPage);
  }
});
