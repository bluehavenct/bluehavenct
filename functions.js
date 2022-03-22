function sayHello(nameOfPerson, age){ // whatever inside the {} is played when wever the function is called
    console.log("My name is " + nameOfPerson + " and I'm " + age + " years old");
}

sayHello("jahoon", 10);
sayHello("dal", 21);

function plus (firstArgument, secondArgument){
    console.log(firstArgument + secondArgument);
}

function divide (firstArgument, secondArgument) {
    console.log(firstArgument / secondArgument);
}


plus(15, 20);
divide(10, 30);

const player = {
    name: "jahoon",
    sayHello: function(otherPersonsName) {
        console.log("hello!" + otherPersonsName + " nice to meet you");
    }
}

player.sayHello("lynn");
