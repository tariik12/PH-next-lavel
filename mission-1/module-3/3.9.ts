{
    // abstraction 1. interface 2. abstract


    // idea
    interface Vehicle1 {

       startEngine():void;
       stopEngine(): void;
       move():void

    }

    // real implementation
    class Car implements Vehicle1 {
        startEngine(): void {
            console.log(`I am starting the car engine`);

        }
        stopEngine(): void {
            console.log(`I am stopping the car engine`);
        }
        move():void {
            console.log(`I am moviing the car`)
        }
        test(){
            console.log( `I'm tesing`)
        }
    }

    const toyotaCar2 = new Car();
    toyotaCar2.startEngine();

    // const Vehicel1: Vehicle1 = {
    //     name: "Toyota",
    //     model: 2000
    // }

// abstract class
// ida
abstract class Vehicel2 {
  abstract   startEngine(): void ;
       abstract stopEngine(): void;
     abstract   move():void ;
        test(){
            console.log( `I'm tesing`)
        }
}

class toyotaCar extends Vehicel2 {
    startEngine(): void {
        console.log(`I'm stARTING the car enginge`)
    }
    stopEngine(): void {
        console.log("I'm stopping the car")
    }
    move(): void {
        console.log( `I'm moving`)
    }
}

// const hondaCar = new Vehicel2()

toyotaCar2.startEngine()

    //
}