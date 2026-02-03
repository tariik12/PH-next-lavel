{
// conditional type

type a1 = null; 
type b1 = string;


type X = a1 extends null ? true: false;

type y  = a1 extends null ? true: b1 extends undefined ? undefined: any;

type Sheikh = {
    bike: string;
    car:string;
    ship: string;
    plain:string;
}

// car ase kina / bike ase kina / ship ace kina / tractor ase kina 
type CheckVehicle<T> =  T extends keyof Sheikh ? true : false;

type HasTractor = CheckVehicle<"tractor">

//


}