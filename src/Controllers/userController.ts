import { Request, Response } from "express";
import { validateUser } from "../utils/validation";
import { UserModel } from "../Models/User";
import { addUser } from "../utils/dbOps";

export const createUser  = async (req:Request,res:Response) => {
    const data = req.body;
    console.log(data)
    if(!validateUser(data)) res.json({
        error:"invalid body"
    })
    const user = {
        name:data.name
    }
    if(await addUser(user))res.json({
        message:"user created"
    })
    else{
        res.json({
            message:"there has been a problem please try again"
        })
    }
    
}