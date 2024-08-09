class BankAccount {
    #balance = 0; //by using hash keyword the balance become private and we cannot access outside this class.

    deposit(amount){
        this.#balance = this.#balance + amount;
        console.log(`Deposited amount is ${amount}, Current balance is ${this.#balance}`);
        
    }

    withdraw(amount){
        if (amount>this.#balance) {
            console.log(`Insuficient funds!!`);
            
        }
        else{
            this.#balance = this.#balance-amount;
            console.log(`Withdrawed ${amount}, Remaining balance${this.#balance}`);
            
        }
    }

    balance(){
        console.log(this.#balance);
        
    }
}

const account = new BankAccount()

account.deposit(1000);
account.withdraw(1);
//console.log(account.balance); //we have no access to it as balance is private, thus;
account.balance(); //this way we have access to balance.

