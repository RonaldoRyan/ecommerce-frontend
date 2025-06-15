'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserPanel() {
    const router = useRouter();
    const [user, setUser] = useState<{ name?: string } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = localStorage.getItem('user');
        if (!token || !storedUser || storedUser === 'undefined') {
            router.push('/login');
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push('/products');
    };

    const handleGoToProducts = () => {
        router.push('/products');
    };

    if (!user) return null;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    ¡Bienvenido, <span className="text-blue-600">{user.name || 'Usuario'}</span>!
                </h2>
                <div className="space-y-4">
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        Cerrar sesión
                    </button>
                    <button
                        onClick={handleGoToProducts}
                        className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Ir a comprar
                    </button>
                </div>
            </div>
        </div>
    );
}