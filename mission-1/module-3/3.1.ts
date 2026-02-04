{
    // OOP - calss

    class Animal {
    // public    name:string;
    // public    species: string;
    // public    sound:string;

    // paramiters properties



        constructor( public name:string, public species:string, public sound:string){
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }

        MakeSound() {
    console.log(`the ${this.name} says ${this.sound}`)
}
    }


const dog = new Animal("German  Shepard Bhai", "dog", "Ghew Ghew");
const cat = new Animal(" Persian Bhai", "cat", "Meaw meaw")



dog.MakeSound()


}