"use client";

import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

const sampleUsers = [
    {id: 1, name: "Anindya", email: "anindya@example.com"},
    {id: 2, name: "John Doe", email: "john@example.com"},
];

export default function UsersPage()
{
    return (
        <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Users</h1>
                <Button>Add New</Button>
            </div>
            <table className="w-full border-collapse bg-white shadow rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 text-left">ID</th>
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleUsers.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="p-3">{user.id}</td>
                            <td className="p-3">{user.name}</td>
                            <td className="p-3">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Card>
    );
}
