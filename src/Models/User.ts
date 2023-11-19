import mongoose, { Schema } from "mongoose";
import { User } from "../types";

const userSchema = new Schema({
    name:String
},)

export const UserModel = mongoose.model('User',userSchema);
export const UserType = {type:mongoose.Schema.ObjectId, ref:'User'};
    