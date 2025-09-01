// app/api/users/route.ts
import {NextResponse} from "next/server";
import {connectDB} from "../../services/mongodb";
import User from "../../models/User";

// GET all users
export async function GET()
{
    await connectDB();
    const users = await User.find();
    return NextResponse.json(users);
}

// POST new user
export async function POST(req: Request)
{
    await connectDB();
    const body = await req.json();
    const user = await User.create(body);
    return NextResponse.json(user, {status: 201});
}
