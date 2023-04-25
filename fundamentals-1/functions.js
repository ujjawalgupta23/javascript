"use strict";

function logger() {
    console.log("My name is Ujjawal");
}

// calling / running / invoking / function
logger();
logger();

// Function Declaration
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} and ${oranges}`;
    return juice;
}

console.log(fruitProcessor(2, 4));

const num = Number("23"); // Number is also a function

// Function Expression
const calcAge = function (birthYear) {
    return 2023 - birthYear;
};

const getAge = calcAge(2000);
console.log(getAge);

// Arrow Functions, introduced in ES6
const getAge1 = birthYear => 2023 - birthYear;
console.log("Age is", getAge1(1998));

const yearsUntilRetirement = (birthYear, name) => {
    const age = 2023 - birthYear;
    const retirement = 60 - age;
    return `${name} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1998, "Ujjawal"));
console.log(yearsUntilRetirement(2000, "Naman"));
