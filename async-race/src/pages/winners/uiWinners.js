import { updateWinnerView, updatePageNumber } from '../../state/updateStateGarage';
import { store } from '../../state/store';
import { renderWinnersAndCount } from './listOfWinners';

export function clickWinnersPaginationButtons() {
  document.addEventListener('click', async (e) => {
    if (e.target.closest('#next-win')) {
      updateWinnerView();
      store.winnersPage++;
      renderWinnersAndCount('.winner-tbody', store.winnersPage);
      updatePageNumber('.page-win', store.winnersPage);
    }
    if (e.target.closest('#prev-win')) {
      updateWinnerView();
      store.winnersPage--;
      renderWinnersAndCount('.winner-tbody', store.winnersPage);
      updatePageNumber('.page-win', store.winnersPage);
    }
  });
}

/* function sortingByOrder(sortBy){
  store.order = store.order
} */