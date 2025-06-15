'use client';
import ProductsPanel from '../components/ProductsPanel';

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl">
      <ProductsPanel />
      </div>
    </div>
  );
} 