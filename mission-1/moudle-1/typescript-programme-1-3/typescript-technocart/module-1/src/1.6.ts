// Learning function

// normal function

// arrow function


function result(num1:number, num2:number):number{
    return num1 + num2
}


result(1,3)


const functionArrow = (num1:number,num2:number) => num1 + num2;



// object --> function --> method
const mydetails ={
    name:'tarikul',
    roll:5,
    ballance:5,
    addBallance(ballance:number, newBallance:number):string{ return `my new balance ${ballance + newBallance}`}
}



const newArr: number[] =[1,2,3,4,5]

const arrayMap: number[] =newArr.map((element:number):number => element* element)