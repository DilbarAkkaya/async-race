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

/*  function sortingByOrder(sortBy) {
  store.order = store.order === 'asc' ? 'desc' : 'asc';
  store.sort = sortBy;
  updateWinnerView();

} */
 document.addEventListener('click', (e) => {
  console.log(store.order)
  if (e.target.closest('.table-wins')) {
    store.sort = 'wins';
   if (store.order === 'asc') {
    store.order = 'desc';
    console.log(store.order)
   }else {
    store.order = 'asc'
   }
   updateWinnerView();
   renderWinnersAndCount('.winner-tbody', store.winnersPage)
  }
  if (e.target.closest('.table-time')) {
    store.sort = 'time';
    if (store.order === 'asc') {
     store.order = 'desc';
     console.log(store.order)
    }else {
     store.order = 'asc'
    }
    updateWinnerView();
    renderWinnersAndCount('.winner-tbody', store.winnersPage)
   }
 })
/* 
const sortByWins = async (e) => {
  const winsTableCol = e.target.closest('.table-wins');
  const bestTimeTableCol = document.querySelector('.table-time');

  if (winsTableCol) {
    bestTimeTableCol.classList.remove('winners-tablebest-time--sort-asc', 'winners-tablebest-time--sort-desc');
    store.winnersSortType = 'wins';
    if (winsTableCol.classList.contains('winners-tablewins--sort-asc')) {
      winsTableCol.classList.add('winners-tablewins--sort-desc');
      winsTableCol.classList.remove('winners-tablewins--sort-asc');
      store.winnersOrder = 'desc';
    } else {
      winsTableCol.classList.add('winners-tablewins--sort-asc');
      winsTableCol.classList.remove('winners-tablewins--sort-desc');
      store.winnersOrder = 'asc';
    }
    await updateWinnresTablePage();
  }
} */