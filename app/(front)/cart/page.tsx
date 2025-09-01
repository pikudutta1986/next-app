"use client";

import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 4999,
      qty: 1,
      image: "/product-1.jpg",
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 2999,
      qty: 2,
      image: "/product-2.jpg",
    },
  ]);

  const handleRemove = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + change) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 199 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white rounded-2xl shadow p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-blue-600 font-bold">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Quantity */}
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => handleQuantity(item.id, -1)}
                      className="px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4">{item.qty}</span>
                    <button
                      onClick={() => handleQuantity(item.id, 1)}
                      className="px-3 py-1 text-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow p-6 h-fit space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg text-gray-800">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl shadow-md transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}