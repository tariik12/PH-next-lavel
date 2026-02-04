{
    // oop=inheritence

    class Parent{
          name:string;
        age:number;
        addess:string;

        constructor (name:string, age:number, addess:string){
            this.name = name;
            this.age = age;
            this.addess = addess
        }

        getSleep(numOfHours:number){
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }

    class Student extends Parent {
      
        constructor (name:string, age:number, addess:string){
            super(name, age, addess)
        }

   
    }

    const student1 = new Student("Mr. St", 20, "gulshan")


     class Teacher extends Parent {
       ;
        designation:string;
        

        constructor (name:string, age:number, addess:string, designation:string){
            super(name, age, addess)
            this.designation = designation;
        }

      
        takeClass(numOfClass:number){
            console.log(`${this.name} will sleep for ${numOfClass}`)
        }

        
    }

        const teachers = new Teacher("Mr. St", 40, "gulshan", 'Bangla')

}