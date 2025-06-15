// src/app/layout.tsx
import './globals.css';
import { AuthProvider } from '@/context/authContext';

export const metadata = {
  title: 'Ecommerce',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
