import mongoose, { Schema } from "mongoose";
import { UserType } from "./User";
import { GroupType } from "./Group";

const expenseSchema = new Schema({
    amount:Number,
    date:Date,
    addedBy:UserType,
    splitBetween:[{user:UserType,amount:Number}],
    title:String,
    group:GroupType,
})

export const Expense = mongoose.model('Expense',expenseSchema);
export const ExpenseType = {type:mongoose.Schema.ObjectId, ref:'Expense'}