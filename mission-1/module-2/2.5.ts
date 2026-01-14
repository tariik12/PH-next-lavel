// function with generic

const createArray = (param:string):string[] =>{
    return [param]
}
const createArrayWithGeneric = <T>(param:T):T[] =>{
    return [param]
}


const res1 = createArray('Bangladesh')
console.log(res1)
const resGeneric = createArrayWithGeneric<string>('bangladesh')
const resGenericObj = createArrayWithGeneric<{id:number; name:string}>({id:222, name:'Md. Tarikul Islam'})
const createArrayWithTupple = <T, Q>(param1:T, param2:Q):[T,Q] =>{
    return [param1,param2]
}


const res10 = createArrayWithTupple<string,number>('Bangladesh', 123)
console.log(res1)
const resTuppleObj = createArrayWithTupple<number,{id:number; name:string}>(123,{id:222, name:'Md. Tarikul Islam'})


const addCouresToStudent =<T> (student:T) =>{
    const course = 'Next Lavel Web Development'

    return{
        ...student,
        course
    }
}

const student1 = addCouresToStudent ({name:'Mr X', email:'x@gmail.com', devType:'NLWD'})
const student2 = addCouresToStudent({name:'Mr Y', email: 'y@gmail.com', hasWatch:'Apple Watch'})

console.log(student1, student2)