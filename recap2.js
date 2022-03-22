//OBJECTS
const player = {
    name: "Jahoon",
    age: "30",
}

console.log(player);

console.log(player.name); // get a property value

player.name = "koo" // update a property's value

console.log(player);

player.gender = "male" // add a property to player object

console.log(player);

//FUNCTIONS

function plus(a,b) {
    console.log(a + b);
}
plus(10, 15);

function multiply(a,b) {
    console.log(a * b);
}
multiply(10,20);
multiply(5,6,7,710,4); // Can have many data but only what's used in the function is matter.

const calculator = {
    add: function (a,b) {
        console.log(a+b);
    },
    substract: function (a,b) {
        console.log(a-b);
    },
    divide: function (a,b) {
        console.log(a/b);
    },
    multiply: function (a,b) {
        console.log(a*b);
    },
    powerOf: function (a,b) {
        console.log(a**b); // ** is power of
    }
}

calculator.add(10,15)
calculator.multiply(7,5)
calculator.powerOf(2,4)