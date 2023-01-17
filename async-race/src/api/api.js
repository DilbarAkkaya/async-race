import { url } from '../constants';

export async function getCars(page = 1, limitOfCarsOnPage = 7) {
  const response = await fetch(`${url}?_page${page}&_limit=${limitOfCarsOnPage}`);
  if (response.ok) {
    //console.log(response.headers.get('X-Total-Count'));
    return {
      items: await response.json(),
      count: response.headers.get('X-Total-Count'),
    };
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}
