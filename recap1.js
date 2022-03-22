//DATA TYPES

const a = 5; // const can't be updated
console.log(a);

let isItGood = true; // let can be updated
console.log(isItGood);
isItGood = false;
console.log(isItGood);

let b = null; // Empty exsist
let hello; // undifined variable

// var is an old way. Use const most of the time and use let when needed. Do not use var

//ARRAY
const variable = "hahaha"
const days = [1, 2, false, true, null, undefined, "text", variable]
console.log(days);

const toBuy = ["potato", "tomato", "eggs"];

console.log(toBuy);

console.log(toBuy[2]);

toBuy[2] = "water";
console.log(toBuy);

toBuy.push("eggs");
console.log(toBuy);