const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function getRestaurants() {
  const res = await fetch(`${API_BASE}/restaurants`);
  if (!res.ok) throw new Error('Failed to fetch restaurants');
  return res.json();
}

export async function loginUser(credentials) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
}
