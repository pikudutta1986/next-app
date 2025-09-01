// models/User.ts
import mongoose, {Schema, Document, models} from "mongoose";

export interface IUser extends Document
{
    name: string;
    email: string;
}

const UserSchema = new Schema<IUser>(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
    },
    {timestamps: true}
);

// Prevent recompilation in dev
const User = models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
