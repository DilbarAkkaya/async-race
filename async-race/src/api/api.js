import { url } from '../constants';

export async function getCars(page = 1, limitOfCarsOnPage = 7) {
  const result = {
    items: [],
    count: '',
  };
  const response = await fetch(`${url}?_page${page}&_limit=${limitOfCarsOnPage}`);
  if (response.ok) {
    result.items = await response.json();
    result.count = response.headers.get('X-Total-Count');
    return result;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}
