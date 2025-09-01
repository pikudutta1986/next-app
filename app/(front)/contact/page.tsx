"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow p-8 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-gray-600">
            Have questions or need help? Fill out the form below and we’ll get back to you soon.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-2xl shadow-md transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow p-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              You can also reach us through the following details:
            </p>
            <div className="space-y-2 text-gray-700">
              <p>📍 123 Main Street, Kolkata, India</p>
              <p>📞 +91 98765 43210</p>
              <p>📧 support@example.com</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              className="border-0 w-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
