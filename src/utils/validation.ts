import { Expense, User } from "../types"

export const validateUser = (data:User)=>{
    return !!data.name
}
export const validateExpense = (data:Expense) => {
    return !!data.addedBy && !!data.group && !!data.title && !!data.splitBetween 
}