// generatic

// anytime we can make dynamically type and can  reuse

type GenericArray<T>=Array<T>;
// const sitNumber: number[] = [1,2,3,4,5,6,67,7];
const sitNumber: GenericArray<number> = [1,2,3,4,5,6,67,7];

// const sitName: string[] = ['Mr A', 'Ur a', 'Cr a'];
const sitName: GenericArray<string> = ['Mr A', 'Ur a', 'Cr a'];

// const sitBoolean: boolean[] =[true, false, true];
const sitBoolean: GenericArray<boolean> =[true, false, true];


const userData: GenericArray<{name:string, age:number}>=[ 

    {name:'tarikul', age:23}, {name:'sakib', age:23}
]

// generic tuple
type GenericTuple<X,Y>=[X,Y]

const manush:GenericTuple<string, string>= ['Manus X', 'Manush Y']

const userIdWithData: GenericTuple<number, {name:string, age:number}> = [123,{name:'sakib', age:23}]