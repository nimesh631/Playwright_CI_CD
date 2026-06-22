const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getUsers(request) {
  return await request.get(`${BASE_URL}/users`);
}

export async function getUserById(request, id) {
  return await request.get(`${BASE_URL}/users/${id}`);
}