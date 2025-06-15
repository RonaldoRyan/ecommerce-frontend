'use client';

import LoginForm from '../components/LoginForm';
import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // window.location.href = '/products';
    }
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}