import {NextResponse} from "next/server";
import {getMySQLPool} from "../../../lib/mysqldb";

// GET single user
// Endpoint: /api/users/:id with GET METHOD
export async function GET(_: Request, {params}: {params: {id: string}})
{
    try
    {
        const pool = getMySQLPool();
        const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [params.id]);
        if ((rows as any).length === 0)
        {
            return NextResponse.json({error: "User not found"}, {status: 404});
        }
        return NextResponse.json((rows as any)[0]);
    } catch
    {
        return NextResponse.json({error: "Failed to fetch user"}, {status: 500});
    }
}

// UPDATE user
// Endpoint: /api/users/:id with PUT METHOD
export async function PUT(req: Request, {params}: {params: {id: string}})
{
    try
    {
        const {name, email} = await req.json();
        const pool = getMySQLPool();
        await pool.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [
            name,
            email,
            params.id,
        ]);
        return NextResponse.json({id: params.id, name, email});
    } catch
    {
        return NextResponse.json({error: "Failed to update user"}, {status: 500});
    }
}

// DELETE user
// Endpoint: /api/users/:id with DELETE METHOD
export async function DELETE(_: Request, {params}: {params: {id: string}})
{
    try
    {
        const pool = getMySQLPool();
        await pool.query("DELETE FROM users WHERE id = ?", [params.id]);
        return NextResponse.json({message: "User deleted"});
    } catch
    {
        return NextResponse.json({error: "Failed to delete user"}, {status: 500});
    }
}
