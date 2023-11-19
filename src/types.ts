export type User = {
    name:string
}

export type Expense = {
    amount:number,
    date:Date,
    addedBy:User,
    splitBetween:{user:User,amount:Number}[],
    title:string,
    group:Group,
}

export type Activity = {}

export type Group = {
    name:string,
    users:{name:string,user:User}[],
    activity:{type:string,activity:Activity }[],

}