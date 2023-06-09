import {
  url, LIMIT_CARS_ON_PAGE, urlEngine, urlWinners, LIMIT_WINNERS_ON_PAGE,
} from '../common/constants';

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

export async function createCar(body) {
  (await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  }));
}

export async function getCar(id) {
  const response = await fetch(`${url}/${id}`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}

export async function updateCar(id, body) {
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}
export async function deleteCar(id) {
  (await fetch(`${url}/${id}`, { method: 'DELETE' }));
}

export async function startCar(id) {
  const response = await fetch(`${urlEngine}?id=${id}&status=started`, { method: 'PATCH' });
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error(`Could not fetch ${urlEngine}, status: ${response.status}`);
}

export async function stopCar(id) {
  const response = await fetch(`${urlEngine}?id=${id}&status=stopped`);
  const result = await response.json();
  return result;
}

export async function driveCar(id) {
  try {
    const response = await fetch(`${urlEngine}?id=${id}&status=drive`, { method: 'PATCH' });
    return response.status !== 200 ? { success: false } : { success: true };
  } catch (err) {
    return err;
  }
}

export async function getWinners(sort, order, page = 1, limit = LIMIT_WINNERS_ON_PAGE) {
  const result = {
    items: [],
    count: '',
  };

  const response = await fetch(`${urlWinners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
  if (response.ok) {
    const winnersItems = await response.json();
    result.items = await Promise.all(
      winnersItems.map(async (winner) => ({ ...winner, car: await getCar(winner.id) })),
    );
    result.count = response.headers.get('X-Total-Count');
    return result;
  }
  throw new Error(`Could not fetch ${urlWinners}, status: ${response.status}`);
}

export async function getWinner(id) {
  const response = await fetch(`${urlWinners}/${id}`);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error(`Could not fetch ${urlWinners}, status: ${response.status}`);
}

export async function getWinnerStatus(id) {
  return (await fetch(`${urlWinners}/${id}`)).status;
}

export async function deleteWinner(id) {
  const response = await fetch(`${urlWinners}/${id}`, { method: 'DELETE' });
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error(`Could not fetch ${urlWinners}, status: ${response.status}`);
}

export async function createWinner(body) {
  (await fetch(urlWinners, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })).json();
}

export async function updateWinner(id, body) {
  const response = await fetch(`${urlWinners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  throw new Error(`Could not fetch ${url}, status: ${response.status}`);
}
