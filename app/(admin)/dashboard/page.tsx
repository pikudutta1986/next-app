"use client";

import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
import {Card, CardContent} from "@/components/ui/card";

const chartData = [
    {name: "Jan", sales: 400},
    {name: "Feb", sales: 300},
    {name: "Mar", sales: 600},
    {name: "Apr", sales: 500},
];

export default function DashboardPage()
{
    return (
        <Card className="p-6">
            <h1 className="text-2xl font-bold mb-6">Analytics</h1>
            <CardContent>
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="sales" fill="#4f46e5" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
