"use client";

import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

const sampleProducts = [
    {id: 1, name: "iPhone 15 Pro", price: 1200},
    {id: 2, name: "MacBook Air", price: 1500},
];

export default function ProductsPage()
{
    return (
        <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Products</h1>
                <Button>Add New</Button>
            </div>
            <table className="w-full border-collapse bg-white shadow rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">ID</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleProducts.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="p-3">{product.id}</td>
                            <td className="p-3">{product.name}</td>
                            <td className="p-3">${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
