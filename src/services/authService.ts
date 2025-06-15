import axios from 'axios';

const API = 'http://localhost:3000/api'; // Ajusta el puerto si tu backend usa otro

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API}/auth/login`, { email, password });
  return response.data; // Esperamos { token, user: { id, name, role } }
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};
