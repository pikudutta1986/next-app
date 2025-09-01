"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductDetailsPage() {
  const [selectedImage, setSelectedImage] = useState("/product-1.jpg");

  const images = [
    "/product-1.jpg",
    "/product-2.jpg",
    "/product-3.jpg",
    "/product-4.jpg",
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={selectedImage}
              alt="Product"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div
                key={i}
                className={`relative w-full h-28 rounded-xl overflow-hidden cursor-pointer border-2 ${
                  selectedImage === img ? "border-blue-600" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt="Thumbnail"
                  fill
                  className="object-cover hover:opacity-80"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Premium Wireless Headphones
          </h1>

          {/* Ratings */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="gold"
                viewBox="0 0 24 24"
                stroke="gold"
                className="w-5 h-5"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.841 1.48 8.292L12 18.896l-7.416 4.543 1.48-8.292L0 9.306l8.332-1.151z" />
              </svg>
            ))}
            <span className="text-gray-500 text-sm ml-2">(124 reviews)</span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Experience superior sound quality with our premium wireless
            headphones. Noise-canceling, lightweight, and comfortable for
            all-day wear.
          </p>

          {/* Price */}
          <div>
            <span className="text-4xl font-bold text-blue-600">₹4,999</span>
            <span className="ml-3 text-gray-400 line-through">₹6,499</span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-2xl shadow-md transition">
              🛒 Add to Cart
            </button>
            <button className="flex items-center gap-2 border border-gray-300 hover:border-blue-600 px-6 py-3 text-lg rounded-2xl transition">
              ❤️ Wishlist
            </button>
          </div>

          {/* Specifications */}
          <div className="pt-6 border-t">
            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Specifications
            </h2>
            <ul className="grid grid-cols-2 gap-y-2 text-gray-600">
              <li>Bluetooth: 5.2</li>
              <li>Battery Life: 30 hrs</li>
              <li>Weight: 220g</li>
              <li>Warranty: 1 Year</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}