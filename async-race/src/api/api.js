import { url } from '../constants';
import { store } from '../store';

export async function getCars(page = 1, limitOfCarsOnPage = 7) {
/*   const result = {
    items: [],
    count: '',
  }; */
  const response = await fetch(`${url}?_page${page}&_limit=${limitOfCarsOnPage}`);
  if (response.ok) {
    store.dataApi.items = await response.json();
    store.dataApi.count = response.headers.get('X-Total-Count');
    return store;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}
