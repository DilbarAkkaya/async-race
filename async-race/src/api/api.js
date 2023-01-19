import { url, LIMIT_CARS_ON_PAGE } from '../constants';
import { store } from '../state/store';

export async function getCars(page = 1) {
/*   const result = {
    items: [],
    count: '',
  }; */
  const response = await fetch(`${url}?_page${page}&_limit=${LIMIT_CARS_ON_PAGE}`);
  if (response.ok) {
    store.dataApi.items = await response.json();
    store.dataApi.count = response.headers.get('X-Total-Count');
    return store;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}
