import {NextResponse} from "next/server";
import {connectMongo} from "../../../lib/mongodb";
import Product from "../../../models/Product";

// GET product
export async function GET(_: Request, {params}: {params: {id: string}})
{
    await connectMongo();
    const product = await Product.findById(params.id);
    return product
        ? NextResponse.json(product)
        : NextResponse.json({error: "Product not found"}, {status: 404});
}

// UPDATE product
export async function PUT(req: Request, {params}: {params: {id: string}})
{
    try
    {
        await connectMongo();
        const body = await req.json();
        const updated = await Product.findByIdAndUpdate(params.id, body, {new: true});
        return updated
            ? NextResponse.json(updated)
            : NextResponse.json({error: "Product not found"}, {status: 404});
    } catch
    {
        return NextResponse.json({error: "Failed to update product"}, {status: 500});
    }
}

// DELETE product
export async function DELETE(_: Request, {params}: {params: {id: string}})
{
    try
    {
        await connectMongo();
        const deleted = await Product.findByIdAndDelete(params.id);
        return deleted
            ? NextResponse.json({message: "Product deleted"})
            : NextResponse.json({error: "Product not found"}, {status: 404});
    } catch
    {
        return NextResponse.json({error: "Failed to delete product"}, {status: 500});
    }
}
