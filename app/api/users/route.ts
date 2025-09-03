// THIS FILE HANDLES ALL THE /api/users ENPOINTS. EACH METHOD REPRESENT ONE FUNCTION
// HERE MYSQL DB IS USED TO STORE AND RETRIVE USERS
import {NextResponse} from "next/server";
import {getMySQLPool} from "../../lib/mysqldb";
import bcrypt from "bcryptjs";

// GET all users
// Endpoint: /api/users with GET METHOD
export async function GET()
{
    try
    {
        const pool = getMySQLPool();
        const [rows] = await pool.query("SELECT * FROM users");
        return NextResponse.json(rows);
    } catch (err)
    {
        return NextResponse.json({error: "Failed to fetch users"}, {status: 500});
    }
}

// CREATE a new user
// Endpoint: /api/users with POST METHOD
export async function POST(req: Request)
{
    try
    {
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        const pool = getMySQLPool();
        const [result] = await pool.query(
            "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
            [name, email, hashedPassword, 'CUSTOMER']
        );
        return NextResponse.json({id: (result as any).insertId, name, email}, {status: 201});
    } catch (err)
    {
        return NextResponse.json({error: "Failed to create user"}, {status: 500});
    }
}