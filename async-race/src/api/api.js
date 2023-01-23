import { url, LIMIT_CARS_ON_PAGE } from '../constants';

export async function getCars(page = 1, limit = LIMIT_CARS_ON_PAGE) {
  const result = {
    items: [],
    count: '',
  };
  const response = await fetch(`${url}?_page=${page}&_limit=${limit}`);
  if (response.ok) {
    result.items = await response.json();
    result.count = response.headers.get('X-Total-Count');
    return result;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}

/*   const response = await fetch(`${url}?_page=${page}&_limit=${limit}`);
  if (response.ok) {
    store.dataApi.items = await response.json();
    store.dataApi.count = response.headers.get('X-Total-Count');
    return store.dataApi;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
} */

export async function createCar(body) {
  (await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
}

export async function getCar(id) {
  let result = 0;
  const response = await fetch(`${url}/${id}`);
  if (response.ok) {
    result = await response.json();
    return result;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}

export async function updateCar(id, body) {
  let result;
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    result = response.json();
    return result;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}
export async function deleteCar(id) {
  (await fetch(`${url}/${id}`, { method: 'DELETE' })).json();
}
