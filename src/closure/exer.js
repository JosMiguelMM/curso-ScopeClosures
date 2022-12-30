function sumWithClosure(firstNum, secondNum) {
    function secont(number2) {
        if (number2) {
            return console.log(firstNum + number2);
        } else {
            number2 = 0;
            return console.log(firstNum + number2);
        }
    }
    return secont(secondNum);
}

sumWithClosure(2,34);