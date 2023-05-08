class Bank{
    constructor(accHolderName,balance){
        this.accHolderName=accHolderName;
        this.balance=balance;
    }
    checkBalance(){
        console.log("Available amounts is ", this.balance,"in ",this.accHolderName," account")
    }
    withdraw(amount){
        this.balance-=amount
        console.log("withdraw ",this.balance,"in ",this.accHolderName," account")
    }
    deposit(amount){
        this.balance+=amount
        console.log("deposit ",this.balance,"in ",this.accHolderName," account")
    }    
}
bank=new Bank("sakshi",500)
bank.checkBalance()
bank.withdraw(500)
bank.checkBalance()
bank.deposit(1000)
bank.checkBalance()
