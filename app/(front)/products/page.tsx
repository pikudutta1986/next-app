"use client";

import {useEffect, useState} from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
  color: string;
};

export default function ProductsPage()
{
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number>(2000);

  // Fetch products from API
  useEffect(() =>
  {
    const fetchProducts = async () =>
    {
      try
      {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err)
      {
        console.error("Failed to fetch products:", err);
      } finally
      {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Unique brand and color filters
  const brands = Array.from(new Set(products.map((p) => p.brand)));
  const colors = Array.from(new Set(products.map((p) => p.color)));

  const toggleBrand = (brand: string) =>
  {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const toggleColor = (color: string) =>
  {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // Apply filters
  const filteredProducts = products.filter((p) =>
  {
    const brandMatch = selectedBrands.length ? selectedBrands.includes(p.brand) : true;
    const colorMatch = selectedColors.length ? selectedColors.includes(p.color) : true;
    const priceMatch = p.price <= priceRange;
    return brandMatch && colorMatch && priceMatch;
  });

  if (loading)
  {
    return <p className="p-8 text-gray-600">Loading products...</p>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Filters */}
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
                  <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-sm text-gray-500">
                    {product.brand} • {product.color}
                  </p>
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
