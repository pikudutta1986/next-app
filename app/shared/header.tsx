// components/Header.tsx
"use client";

import Link from "next/link";

export default function Header()
{
    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    MyShop
                </Link>

                {/* Navigation */}
                <nav className="space-x-6">
                    <Link href="/" className="hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="/products" className="hover:text-blue-600">
                        Products
                    </Link>
                    <Link href="/cart" className="hover:text-blue-600">
                        Cart
                    </Link>
                    <Link href="/contact" className="hover:text-blue-600">
                        Contact
                    </Link>
                    <Link href="/login" className="hover:text-blue-600">
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    );
}
