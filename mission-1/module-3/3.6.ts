{
    // getter & seter

    class BankAccount{
    public readonly   id:number;
    public    name:string;
    private   _balance:number;
    protected benificary:string

        constructor (id:number, name:string, balance:number, benificary:string){
            this.id = id;
            this.name = name;
            this._balance = balance;
            this.benificary = benificary
        }


        set deposit(amount:number){
             this._balance  = this._balance  + amount       }
// addDepoist (amount:number){
//     this._balance = this._balance + amount;
// }

// getter
get  balance (){
    return this._balance
}
// getBalance(){
//     return this._balance;
// }

    }

    class StudentAccount extends BankAccount {
        test(){

        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 60,'no')
// goribManusherAccount.addDepoist(20); // function call kore
//     const myBalance = goribManusherAccount.getBalance() // fuction call kore
goribManusherAccount.deposit = 50
const myBalance = goribManusherAccount.balance // property er moto kore
    console.log(myBalance)
}