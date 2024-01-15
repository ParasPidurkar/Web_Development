class BankAccount{
    constructor(accountHolder,accountNumber,balance=0){
        this.accountHolder =accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;

    }
    deposit(amt){
        this.balance+=amt;
        console.log(`You have deposited ${amt} current balance is ${this.balance}`)
    }
    withdraw(amt){
        if(this.balance<amt){
            throw new Error("You do not have sufficient balance")
        }
        else{
            this.balance -=amt;
            console.log(`You account is debited with Rs ${amt} current balance is ${this.balance}`)
        }
    }
}

const test = new BankAccount("Paras",123456,100)
test.deposit(2000);
test.withdraw(500);
//test.withdraw(5000);

const test2 = new BankAccount("Paras")
test2.deposit(2000);
test2.withdraw(500);