import {NextResponse} from "next/server";
import {getMySQLPool} from "../../../lib/mysqldb";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req: Request)
{
    try
    {
        const {email, password} = await req.json();
        const pool = getMySQLPool();
        // Find user
        const [rows]: any = await pool.execute("SELECT * FROM users WHERE email = ?", [email]);

        if (rows.length === 0)
        {
            return NextResponse.json({message: "User not found"}, {status: 404});
        }

        const user = rows[0];

        // Compare hash with bcrypt
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
        {
            return NextResponse.json({message: "Invalid credentials"}, {status: 401});
        }

        // Sign JWT
        const token = jwt.sign(
            {id: user.id, email: user.email},
            process.env.JWT_SECRET!, // must be set in .env
            {expiresIn: "1d"}
        );

        return NextResponse.json({token});
    } catch (error)
    {
        console.error("Login error:", error);
        return NextResponse.json({message: "Internal server error"}, {status: 500});
    }
}
