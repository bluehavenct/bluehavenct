const age = 40;
function calculateKoreaAge(manAge) {
    return manAge + 2;
}

const krAge = calculateKoreaAge(age);

console.log(krAge);


const calculator = {
    add: function (a,b) {
        return a+b; // when return is called, the function stops. return is the last code that will be excuted.
    },
    substract: function (a,b) {
        return a-b;
    },
    divide: function (a,b) {
        return a/b;
    },
    multiply: function (a,b) {
        return a*b;
    },
    powerOf: function (a,b) {
        return a**b; // ** is power of
    }
}

calculator.add(10,15)

const plusResult = calculator.add(10,15);
const minusResult = calculator.substract(plusResult, 5);
const timesResult = calculator.multiply(minusResult, 2);

console.log(plusResult);
console.log(minusResult);
console.log(timesResult);