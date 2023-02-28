let calculator = {
    read: function(a, b) {
        calculator.firstNum = a;
        calculator.secondNum = b;
    },
    sum: function() {
        sum = calculator.firstNum + calculator.secondNum; 
        return sum;
    },
    mul: function() {
        mul = calculator.firstNum * calculator.secondNum; 
        return mul;
    },
}

calculator.read(27,48);
console.log( calculator.sum() );
console.log( calculator.mul() );