/*
function myMoneybox(coins) {
    let saveCoins = 0;
    saveCoins+= coins;
    console.log(`Moneybox: $${saveCoins}`);
}

myMoneybox(5);
myMoneybox(100);*/


function myMoneyBox() {
    let saveCoins=0;
    function countCoins(coins) {
        saveCoins+=coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBoxz= myMoneyBox();
myMoneyBoxz(20);
myMoneyBoxz(1);
myMoneyBoxz(10);