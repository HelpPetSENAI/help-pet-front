import api from './Api';

// POST /api/auth/login
// Body: { email, password }
// Retorna: { token }
export async function login(email, password) {
  const response = await api.post('/api/auth/login', { email, password });
  const { token } = response.data;
  localStorage.setItem('token', token);
  return token;
}

// POST /api/users
// Body: { name, email, password, address }
// Retorna: UserResponseDTO { id, name, email, address }
export async function register(name, email, password, address) {
  const response = await api.post('/api/users', { name, email, password, address });
  return response.data;
}

export function logout() {
  localStorage.removeItem('token');
}

export function getToken() {
  return localStorage.getItem('token');
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}