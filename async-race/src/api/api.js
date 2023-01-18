import { url } from '../constants';
import { store } from '../store';

export async function getCars(page = 1, limitOfCarsOnPage = 7) {
const result = {
    items: [],
    count: '',
  };
  const response = await fetch(`${url}?_page${page}&_limit=${limitOfCarsOnPage}`);
  if (response.ok) {
    result.items = await response.json();
    result.count = response.headers.get('X-Total-Count');
/*     store.dataApi.items = result.items;
    store.dataApi.count = result.count; */
    return result;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}
