import mongoose, { Schema } from "mongoose";
import { UserType } from "./User";
import { ActivityType } from "./Activity";

const groupSchema = new Schema({
    name:String,
    users:[{name:String,user:UserType}],
    activity:[{type:String,activity:ActivityType }]
})

export const Group = mongoose.model('Group',groupSchema);
export const GroupType = {type:mongoose.Schema.ObjectId, ref:'Group'};
