import { url, LIMIT_CARS_ON_PAGE, urlEngine, urlWinners, LIMIT_WINNERS_ON_PAGE } from '../constants';

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

export async function startCar(id) {
  let result = {};
  const response = await fetch(`${urlEngine}?id=${id}&status=started`, { method: 'PATCH' });
  if (response.ok) {
    result = await response.json();
  }
  return result;
}

export async function stopCar(id) {
  (await fetch(`${urlEngine}?id=${id}&status=stopped`)).json();
}

export async function driveCar(id) {
  let result = {};
  const response = await fetch(`${urlEngine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
  if (response.status === 200) {
    result = await response.json();
  }
  if (response.status === 500) {
    result.success = false;
  }
  return result;
}

export function getSortOrderWinners(sort, order) {
  if (sort && order) return `&_sort=${sort}&_order=${order}`;
  return '';
}

export async function getWinners(sort, order, page = 1, limit = LIMIT_WINNERS_ON_PAGE,) {
  const result = {
    items: [],
    count: '',
  };
  const response = await fetch(`${urlWinners}?_page=${page}&_limit=${limit}${getSortOrderWinners(sort, order)}`);
  if (response.ok) {
    const winnersItems = await response.json();
    result.items = await Promise.all(
      winnersItems.map(async (winner) => ({ ...winner, car: await getCar(winner.id) }))
    );
    result.count = response.headers.get('X-Total-Count');
    return result;
  }
  throw new Error(`Could not fetch ${urlWinners}, status: ${response.status}`);
}