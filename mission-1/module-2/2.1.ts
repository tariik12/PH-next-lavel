// type assertion // type narrowing

// as a developer if I understant better & declare type  from typescript than it is type assertion


// const nothing:any; why error
let anything:any ;

anything=1234

if(anything as number)   console.log('hello');
(anything as number).valueOf();
if(anything as string) console.log(12345);
(anything as string).charAt;

const kgToGm = (value:string|number):string | number | undefined =>{
    if(typeof value === 'string'){
        const  result = parseFloat(value)*1000;
        return  ` there are: ${result} Gm`
    }
    else if( typeof value === 'number'){
        return value * 1000
    }
}
kgToGm(100) as number;

kgToGm('1234') as string
type ErrorMessage = {
    message:string
}
try{
console.log('hello world')

} catch(error){
    console.log((error as ErrorMessage).message)
}