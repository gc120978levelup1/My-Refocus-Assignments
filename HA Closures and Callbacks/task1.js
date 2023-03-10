function createBankAccount(name){
    let balance = 0;
    console.log();
    console.log(`A đĻ bank account under the name of ${name} is opened, with current balance đ° of PhP ${balance}.`);
    function checkBalance(){
        console.log();
        console.log(`Bank account name : ${name}`);
        console.log(`     Current đ° balance of PhP ${balance}`);
    }
    function depositAmount(amount){
        balance += amount;
        console.log();
        console.log(`Amount đ° Deposited : PhP ${amount}`);
    }
    function withdrawAmount(amount){
        if ((balance - amount) < 0) {
            console.log();
            console.log(`Sorry you do not have enough cash đĩ balance. âšī¸`);          
        }else{
            balance -= amount;
            console.log();
            console.log(`Amount đ° Withdrawn : PhP ${amount}`);
        }
    }
    return {
        checkBalance, depositAmount, withdrawAmount
    }
}

let myBankAccount = createBankAccount("Garry M. Cacho");
myBankAccount.depositAmount(5000);
myBankAccount.checkBalance();
myBankAccount.depositAmount(8000);
myBankAccount.checkBalance();
myBankAccount.withdrawAmount(12000);
myBankAccount.checkBalance();
myBankAccount.withdrawAmount(600);
myBankAccount.checkBalance();
myBankAccount.withdrawAmount(6000);