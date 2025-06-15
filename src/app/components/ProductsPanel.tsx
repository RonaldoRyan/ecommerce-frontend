"use client";

import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import {Pagination} from "../components/Pagination";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");

  const productsPerPage = 6;

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar productos");
        return res.json();
      })
      .then((data) => {
        const products = Array.isArray(data)
          ? data
          : Array.isArray(data.products)
          ? data.products
          : [];
        
        setProducts(products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  const categories = ["Todas", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Todas" || product.category === category;
    return matchesName && matchesCategory;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <>
      <div className="flex gap-4 mb-6">
        <SearchBar
          value={search}
          onChange={value => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={value => {
            setCategory(value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative overflow-hidden rounded-md mb-3">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-40 object-cover rounded-md transition-transform duration-300 hover:scale-105" 
              />
              <div className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-800">{product.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{product.description}</p>
              <div className="flex items-center justify-between pt-2">
                <p className="font-semibold text-blue-600">${product.price.toFixed(2)}</p>
                <div className="w-6 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}