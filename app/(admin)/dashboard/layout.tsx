"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

export default function DashboardLayout({children}: {children: React.ReactNode})
{
    const pathname = usePathname();

    const menuItems = [
        {name: "Dashboard", href: "/dashboard"},
        {name: "Users", href: "/dashboard/users"},
        {name: "Products", href: "/dashboard/products"},
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-lg p-6">
                <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
                <nav className="space-y-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 rounded-lg ${pathname === item.href ? "bg-indigo-600 text-white" : "hover:bg-gray-100"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8">{children}</main>
        </div>
    );
}
