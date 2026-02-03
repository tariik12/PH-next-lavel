{

    // generic constraint with keyof operator

    type Vehicle = {
      bike: string;
      car:string;
      ship:string;  
    }
type Owner = "bike" | "car" | "ship"; // manually

type Owner2 = keyof Vehicle

const  getPropertyValue =<X, Y extends keyof X>(obj:X,key:Y) =>{
    return obj[key];
}

// const person1 : Owner2 = ""


const user = {
    name: 'Mr. Tarikul',
    age:26,
    address:'prjp'
}
const user2 = {
    name: 'Mr. Tarikul',
    age:26,
    address:'prjp',
    emni:'shel'
}
const result1 = getPropertyValue(user, 'name')
const result2 = getPropertyValue(user2, 'name')
// user['age'] 26

















}