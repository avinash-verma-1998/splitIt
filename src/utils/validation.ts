import { User } from "../types"

export const validateUser = (data:User)=>{
    return !!data.name
}