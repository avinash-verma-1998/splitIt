import mongoose, { Schema } from "mongoose";

const activitySchema = new Schema({
    name:String
})

export const Activity = mongoose.model('Activity',activitySchema);
export const ActivityType = {type:mongoose.Schema.ObjectId, ref:'Activity'};
