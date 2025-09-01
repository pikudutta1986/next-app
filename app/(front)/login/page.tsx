// app/login/page.tsx (for Next.js App Router)
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Example: call your API
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login failed");
      alert("✅ Logged in successfully!");
    } catch (err) {
      alert("❌ Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  
  const handleGoogleSignup = () => {
    alert("Google Signup clicked");
  };

  const handleFacebookSignup = () => {
    alert("Facebook Signup clicked");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
          {/* Divider */}
        <div className="my-6 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Login Buttons with SVG */}
        <div className="space-y-3">
          <button
            onClick={handleGoogleSignup}
            className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 hover:bg-gray-50"
          >
            <svg
              className="mr-2 h-5 w-5"
              viewBox="0 0 533.5 544.3"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M533.5 278.4c0-17.4-1.6-34.1-4.6-50.4H272v95.4h147c-6.3 34-25.1 62.7-53.6 81.9l86.7 67.3c50.7-46.8 81.4-115.6 81.4-194.2z"
                fill="#4285F4"
              />
              <path
                d="M272 544.3c72.6 0 133.5-24 178-65.1l-86.7-67.3c-24.1 16.2-55 25.8-91.3 25.8-70 0-129.4-47.3-150.7-110.9l-90.6 69.8C76 480.1 167.1 544.3 272 544.3z"
                fill="#34A853"
              />
              <path
                d="M121.3 326.8c-5.7-16.9-9-34.9-9-53.4s3.3-36.5 9-53.4L30.7 150.2C11.1 191.6 0 238.5 0 286.7s11.1 95.1 30.7 136.5l90.6-69.8z"
                fill="#FBBC05"
              />
              <path
                d="M272 107.7c39.5 0 75.1 13.6 103.1 40.5l77.2-77.2C405.5 24 344.6 0 272 0 167.1 0 76 64.2 30.7 150.2l90.6 69.8c21.3-63.6 80.7-110.9 150.7-110.9z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>

          <button
            onClick={handleFacebookSignup}
            className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-[#1877f2] px-4 py-2 font-medium text-white hover:bg-[#145dbf]"
          >
            <svg
              className="mr-2 h-5 w-5 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M279.14 288l14.22-92.66h-88.91V127.9c0-25.35 
                12.42-50.06 52.24-50.06h40.42V6.26S293.3 
                0 268.1 0c-73.43 0-121.3 44.38-121.3 
                124.72v70.62H86.41V288h60.39v224h92.66V288z" />
            </svg>
            Continue with Facebook
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
