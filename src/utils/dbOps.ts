import { UserModel } from "../Models/User";
import { User } from "../types";

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