// interface // type vs interface

type User = {


    name:string,
    age:number

}
type home=string;

type newUser = User & {newHome:string}

const userIntersection:newUser = {
name:'sofia',
age:100,
newHome:'homeland'
}

interface UserInterface {
    name:string,
    age:number
}

interface UserInterfaceExtand   extends UserInterface {
    newHome:string
}
const user1:UserInterfaceExtand ={
    name:'hello',
    age:45,
    newHome:'hello worldland'
}


//j js--> objdct  array -->object function ->object


type RollNumber  = number;

type Roll1 = number[];

interface Role2 {
    [index:number]:number,
    // new:number,
}

const roll:Roll1 & Role2 = [1,3,45,5]


type  Add =(num:number, num2:number) =>number;

interface Add2{
    (num3:number,num4:number) :number;
}

const newAdd:Add = (num, num2) =>num+num2;