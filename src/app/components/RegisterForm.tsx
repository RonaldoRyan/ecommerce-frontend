'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import InputField from '../components/InputField';
import { useRouter } from 'next/navigation';

const registerSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Correo inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'Confirma tu contraseña'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Las contraseñas no coinciden',
  path: ['confirmPassword'],
});

type RegisterData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
   const router = useRouter();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterData) => {
    setError('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          role: 'user', // Se envía siempre como 'user'
        }),
      });

      if (!res.ok) {
        setError('Error al registrar usuario.');
        return;
      }

      setSuccess('¡Registro exitoso!');
       router.push('/dashboard');
    } catch {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6 rounded-xl shadow-md w-full max-w-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-white">Crear Cuenta</h2>

      {error && <p className="text-red-200 text-center">{error}</p>}
      {success && <p className="text-green-200 text-center">{success}</p>}

      <InputField
        label="Nombre"
        type="text"
        error={errors.name?.message}
        {...register('name')}
      />

      <InputField
        label="Correo"
        type="email"
        error={errors.email?.message}
        {...register('email')}
      />

      <InputField
        label="Contraseña"
        type="password"
        error={errors.password?.message}
        {...register('password')}
      />

      <InputField
        label="Confirmar Contraseña"
        type="password"
        error={errors.confirmPassword?.message}
        {...register('confirmPassword')}
      />

      <button
        type="submit"
        className="w-full bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition"
      >
        Registrarse
      </button>
    </form>
  );
}