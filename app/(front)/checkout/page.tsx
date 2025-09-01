"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Example order summary (could come from cart context)
  const subtotal = 7998;
  const shipping = 199;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Checkout Form */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 space-y-8">
          <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>

          {/* Shipping Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 md:col-span-2"
              />
              <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="zip"
                value={form.zip}
                onChange={handleChange}
                placeholder="Zip Code"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Payment Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                placeholder="Card Number"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 md:col-span-2"
              />
              <input
                type="text"
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                placeholder="CVV"
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
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
            <span>₹{shipping}</span>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg text-gray-800">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl shadow-md transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
