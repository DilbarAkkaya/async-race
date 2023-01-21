import { url, LIMIT_CARS_ON_PAGE } from '../constants';
import { store } from '../state/store';

export async function getCars(page = 1, limit = LIMIT_CARS_ON_PAGE) {
  /*   const result = {
      items: [],
      count: '',
    }; */
  const response = await fetch(`${url}?_page=${page}&_limit=${limit}`);
  if (response.ok) {
    store.dataApi.items = await response.json();
    store.dataApi.count = response.headers.get('X-Total-Count');
    return store.dataApi;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}

export async function createCar(body) {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).json();
}