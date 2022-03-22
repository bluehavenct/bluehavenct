const age = parseInt(prompt("How old are you?"));

console.log(typeof age); // checking variable data type

console.log(typeof parseInt(age)); // parsing age into an integeer

console.log(parseInt(age));

console.log(isNaN(age)); // isNaN checking if it's not a number

if(isNaN(age)){
    // condition === true
    console.log("please write a number");
} else {
    // condition === false
    
}


console.log(typeof age); // checking variable data type

console.log(typeof parseInt(age)); // parsing age into an integeer

console.log(parseInt(age));

console.log(isNaN(age)); // isNaN checking if it's not a number

if(isNaN(age) || age < 0 ){
    // condition === true
    console.log("please write a real and positive number");
} else if (age < 18) {
    // condition === false
    console.log("You are too young to drink");
} else if (age >= 18 && age <= 50) { // OPERATORS && is AND || is OR
    console.log("Enjoy your drink");
} else {
    console.log("Please drink less")
}

if((a && B) || (c && d)) {
    
}

/*
OPERATORS

=== Equals
= assigns value
!== IS NOT

*/