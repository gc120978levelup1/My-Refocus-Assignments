function checkBalance(name, balance){
    console.log();
    console.log(`Bank account name : ${name}`);
    console.log(`     Current đ° balance of PhP ${balance}`);
}

function depositAmount(balance, amount){
    balance += amount;
    console.log();
    console.log(`Amount đ° Deposited : PhP ${amount}`);
    return balance;
}

function withdrawAmount(balance, amount){
    if ((balance - amount) < 0) {
        console.log();
        console.log(`Sorry you do not have enough cash đĩ balance. âšī¸`);         
    }else{
        balance -= amount;
        console.log();
        console.log(`Amount đ° Withdrawn : PhP ${amount}`);
    }
    return balance;
}

function createBankAccount(name, checkBalanceCallBack, depositAmountCallBack, withdrawAmountCallBack){
    let balance = 0;
    console.log();
    console.log(`A đĻ bank account under the name of ${name} is opened, with current balance đ° of PhP ${balance}.`);
    balance = depositAmountCallBack(balance, 5000);
    checkBalanceCallBack(name, balance);
    balance = depositAmountCallBack(balance, 8000);
    checkBalanceCallBack(name, balance);
    balance = withdrawAmountCallBack(balance, 12000);
    checkBalanceCallBack(name, balance);
    balance = withdrawAmountCallBack(balance, 600);
    checkBalanceCallBack(name, balance);
    balance = withdrawAmountCallBack(balance, 6000);
}

createBankAccount("Garry M. Cacho", checkBalance, depositAmount, withdrawAmount);
