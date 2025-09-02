import mongoose, {Schema, Document} from "mongoose";

export interface IProduct extends Document
{
    name: string;
    price: number;
    category?: string;
    createdAt: Date;
}

const ProductSchema = new Schema<IProduct>({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String},
    createdAt: {type: Date, default: Date.now},
});

export default mongoose.models.Product ||
    mongoose.model<IProduct>("Product", ProductSchema);
