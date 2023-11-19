import { Request, Response } from "express";
import { validateExpense, validateUser } from "../utils/validation";
import { addExpense } from "../utils/dbOps";

export const createExpense  = async (req:Request,res:Response) => {
    const data = req.body;
    console.log(data)
    if(!validateExpense(data)) res.json({
        error:"invalid body"
    })
    const expense = {
        name:data.name
    }
    if(await addExpense(expense))res.json({
        message:"user created"
    })
    else{
        res.json({
            message:"there has been a problem please try again"
        })
    }
    
}