// constrain
{
    
const addCouresToStudent =<T extends {
    id: number;
    name: string;
    email: string;

}> (student:T) =>{
    const course = 'Next Lavel Web Development'

    return{
        ...student,
        course
    }
}

const student1 = addCouresToStudent ({id:112,name:'Mr X', email:'x@gmail.com', devType:'NLWD'})
const student2 = addCouresToStudent({id:123,name:'Mr Y', email: 'y@gmail.com', hasWatch:'Apple Watch'})

const student3 = addCouresToStudent({id:123, name:'nemss', email:'s@gamilc.om',emni:'emni'})

console.log(student1, student2, )
}