import {NextResponse} from "next/server";
import {connectMongo} from "../../lib/mongodb";
import Product from "../../models/Product";

// GET all products
export async function GET()
{
    try
    {
        await connectMongo();
        const products = await Product.find();
        return NextResponse.json(products);
    } catch
    {
        return NextResponse.json({error: "Failed to fetch products"}, {status: 500});
    }
}

// CREATE product
export async function POST(req: Request)
{
    try
    {
        await connectMongo();
        const body = await req.json();
        const product = await Product.create(body);
        return NextResponse.json(product, {status: 201});
    } catch
    {
        return NextResponse.json({error: "Failed to create product"}, {status: 500});
    }
}
