{
    // access modifires

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

addDepoist (amount:number){
    this._balance = this._balance + amount;
}

getBalance(){
    return this._balance;
}
    }

    class StudentAccount extends BankAccount {
        test(){

        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20,'no')
goribManusherAccount.addDepoist(20);
    const myBalance = goribManusherAccount.getBalance()
    console.log(myBalance)
}