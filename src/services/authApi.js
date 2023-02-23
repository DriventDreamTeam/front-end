import api from './api';

export async function signIn(email, password, provider = undefined) {
  const response = await api.post('/auth/sign-in', { email, password, provider });
  return response.data;
}
//
