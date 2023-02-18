import { updatePageNumber, removeWinners } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { renderWinnersAndCount, writeWinnersToStore } from './listOfWinners';

export function addWinnersPaginationButtonsListener() {
  document.addEventListener('click', async (e) => {
    if (e.target.closest('#next-win')) {

      store.winnersPage++;
      await writeWinnersToStore();
      removeWinners();
      await renderWinnersAndCount('.winner-tbody');
      updatePageNumber('.page-win', store.winnersPage);
    }
    if (e.target.closest('#prev-win')) {
      removeWinners();
      store.winnersPage--;
      await writeWinnersToStore();
      removeWinners();
      await renderWinnersAndCount('.winner-tbody');
      updatePageNumber('.page-win', store.winnersPage);
    }
  });
}

document.addEventListener('click', async (e) => {
  if (e.target.closest('.table-wins')) {
    store.sort = 'wins';
    if (store.order === 'asc') {
      e.target.innerText = 'Wins ↓';
      store.order = 'desc';
    } else {
      store.order = 'asc';
      e.target.innerText = 'Wins ↑';
    }
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
  }
  removeWinners();
  await writeWinnersToStore();
  await renderWinnersAndCount('.winner-tbody');
});
