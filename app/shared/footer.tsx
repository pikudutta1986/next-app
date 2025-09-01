// components/Footer.tsx
export default function Footer()
{
    return (
        <footer className="bg-gray-800 text-gray-200 mt-10">
            <div className="max-w-7xl mx-auto p-6 text-center space-y-2">
                <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
                <div className="space-x-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
