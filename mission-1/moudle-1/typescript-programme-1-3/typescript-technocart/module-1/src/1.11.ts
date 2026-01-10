// ternary operator | optional chaining operator | nullish coalescing operator


{
const age:number =22

if(age>25){
    console.log('isAdult')
}else{
    console.log('Not Adult')
}

const isAdult = age>25?"isAdult":'not adult'
console.log(isAdult)

// nullish coalescing operator

const isAthenticated = "";

const reulst1 = isAthenticated?? "guest";
const result2 = isAthenticated? isAthenticated:"guest"
console.log(result2, reulst1)


type User = {
    name:string,
    age:number,
    course:string,
    address?:{
        village?:string,
        postCode:number,
        postName:string,
        distict:string

    }
}

const user1:User = {
    name:'tarikul',
    age:23,
    course:'Web Development',
    address:{
    
        postCode:2343,
        postName:'Capra',
        distict:'Ketua'
    }

}

const userVillage = user1.address?.village ?? 'User no have villlage information'

console.log(userVillage)



}
console.log('hello world')