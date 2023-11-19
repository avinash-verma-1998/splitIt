import { ExpenseModel } from "../Models/Expense";
import { UserModel } from "../Models/User";
import { Expense, User } from "../types";

export const addUser = async (user:User)=>{
    try{
        await UserModel.create(user)
        return true;
    }
    catch(err){
        console.log(err);

        return false;
    }

}

export const addExpense = async (expense:Expense)=>{
    try{
        await ExpenseModel.create(expense)
        return true;
    }
    catch(err){
        console.log(err);

        return false;
    }

}