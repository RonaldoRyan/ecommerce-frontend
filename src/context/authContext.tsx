
'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { login as loginRequest, logout as logoutRequest } from '../services/authService';
import axios from 'axios';

type User = {
  id: number;
  name: string;
  role: 'admin' | 'user';
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

useEffect(() => {
  const storedToken = localStorage.getItem('token');
  const storedUser = localStorage.getItem('user');
  if (storedToken && storedUser && storedUser !== "undefined") {
    setToken(storedToken);
    setUser(JSON.parse(storedUser));
  }
}, []);
const login = async (email: string, password: string): Promise<boolean> => {
  try {
    const res = await axios.post('http://localhost:4000/api/auth/login', { email, password });
    const { token, user } = res.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setUser(user);
    router.push('/dashboard'); // o la ruta protegida correspondiente

    return true;
  } catch (err) {
    console.error('Error al iniciar sesión', err);
    return false;
  }
};



  const logout = () => {
    logoutRequest();
    setToken(null);
    setUser(null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isAuthenticated: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
