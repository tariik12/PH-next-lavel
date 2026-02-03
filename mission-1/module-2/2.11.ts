{
    // utility types
    // Pick

    type Person = {

        name:string;
        age:number;
        eamil?:string;
        contactNo: string
    }

    type Name = Pick<Person, "name" | "age">

    // Omit

    type ContactInfo = Omit<Person, "name" |"age"> 

    // Required

    type PersonRequired = Required<Person>

    // Pertial

    type PersonPertial = Partial<Person>

    type PersonReadonly = Readonly<Person>
    // Readonly
    const Pereson1: PersonReadonly ={
        name:"Mr. XY",
        age:200,
        contactNo:'017'
    }
// Pereson1.name = "Mr. YX"

// Record

// type MyObj = {
//     a:string,
//     b:string
// }
type MyObj = Record<string, string>
const EmtyObj:Record<string,unknown> = {}
// EmtyObj.age
const obj1 :MyObj ={
    a:"aa",
    b:"bb",
    c:"cc",
}
}