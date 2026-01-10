// type alias

type Student = {

    name:string,
    age:number,
    home:string,

}
type Sit = number;
type sitName = string;
const student1:Student ={
    name:'Sakib',
    age:24,
    home:"Shatkhira"
}

const BusSit:Sit = 10;
const LegunaSit:Sit = 20;

type NewFunction =(num:number,num1: number) =>string

const newFunctionAdd:NewFunction =(num, num1) =>{
    return `${num+num1}`;
}

newFunctionAdd(12,40)