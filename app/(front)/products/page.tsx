// app/products/page.tsx
"use client";

import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  color: string;
};

const allProducts: Product[] = [
  { id: 1, name: "iPhone 15 Pro", price: 1200, image: "/images/iphone.jpg", brand: "Apple", color: "Silver" },
  { id: 2, name: "Samsung Galaxy S23", price: 999, image: "/images/galaxy.jpg", brand: "Samsung", color: "Black" },
  { id: 3, name: "MacBook Air M2", price: 1500, image: "/images/macbook.jpg", brand: "Apple", color: "Gray" },
  { id: 4, name: "Dell XPS 13", price: 1300, image: "/images/dell.jpg", brand: "Dell", color: "Silver" },
  { id: 5, name: "Sony WH-1000XM5", price: 400, image: "/images/headphones.jpg", brand: "Sony", color: "Black" },
];

export default async function ProductsPage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(2000);

  const brands = ["Apple", "Samsung", "Dell", "Sony"];
  const colors = ["Black", "Silver", "Gray"];

  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store", // ensure fresh data
  });
  const users = await res.json();

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const filteredProducts = allProducts.filter((p) => {
    const brandMatch = selectedBrands.length ? selectedBrands.includes(p.brand) : true;
    const colorMatch = selectedColors.length ? selectedColors.includes(p.color) : true;
    const priceMatch = p.price <= priceRange;
    return brandMatch && colorMatch && priceMatch;
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden w-72 border-r bg-white p-6 shadow-lg md:block">
        <h2 className="mb-6 text-xl font-bold text-gray-800">Filters</h2>

        {/* Brand Filter */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold text-gray-600 uppercase">Brand</h3>
          {brands.map((brand) => (
            <label key={brand} className="mb-2 flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-gray-700">{brand}</span>
            </label>
          ))}
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold text-gray-600 uppercase">Color</h3>
          {colors.map((color) => (
            <label key={color} className="mb-2 flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => toggleColor(color)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-gray-700">{color}</span>
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-gray-600 uppercase">Price</h3>
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <p className="mt-2 text-gray-700">Up to ${priceRange}</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-600">{filteredProducts.length} items found</p>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-600">No products match your filters.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-500">{product.brand} • {product.color}</p>
                  <p className="mt-2 text-xl font-bold text-indigo-600">${product.price}</p>
                  <button className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
