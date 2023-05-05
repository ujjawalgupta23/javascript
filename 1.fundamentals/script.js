console.log("Hi Ujjawal");
const firstName = "Ujjawal";
const lastName = "Gupta";

// Concatenation
console.log(firstName + " " + lastName);
console.log(firstName, lastName);

// Assignment Operator
let x = 10;
x += 5; // x = x + 5
x *= 2; // x = x * 2
x++; // x = x + 1
x--; // x = x -  1
console.log(x);

const ageUjjawal = 25;
const ageNaman = 23;

// Coparision Operators
console.log(ageUjjawal > ageNaman);
console.log(ageUjjawal >= 18);

const isFullAge = ageUjjawal >= 18; // This will hold a boolean and could be used in future

let a = (b = 1);
console.log(a, b); // 1, 1

let j, k;
j = k = 2; // this assignments happens right to left
console.log(j, k); // 2, 2

let l,
    m = 5;
console.log(l, m); // undefined, number(5)

console.log(0 < l < 10); // true, this means (0 < l and l < 10)

// () has highest Operator Precedence
const averageAge = (ageNaman + ageUjjawal) / 2;
console.log(averageAge);

// Coding Challenge
const weightNaman = 65;
const heightNaman = 1.2;
const weightUjjawal = 78;
const heightUjjawal = 2;

const namanBMI = weightNaman / heightNaman ** 2;
const ujjawalBMI = weightUjjawal / heightUjjawal ** 2;
console.log(namanBMI, ujjawalBMI);

const namanHigherBMI = namanBMI > ujjawalBMI;
console.log(namanHigherBMI);

const job = "Software Developer";
const birthYear = 2000;
const year = 2023;

const ujjawal =
    "I'm " + firstName + ", a " + (year - birthYear) + "years old" + job + "!";
console.log(ujjawal);

// Template Literal
const ujjawalNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(ujjawalNew);

// Earlier to print multiline
console.log("String with\nmultiple\nlines");

// Now using backtick
console.log(`String with
multiple
lines`);

// Decision Takin if - else
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log("Naman is old enough to drive🚗");
} else {
    yearsLeft = 18 - age;
    console.log(`Naman is too young to drive. Wait another ${yearsLeft} years`);
}

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);

// Coding Challenge #2
if (namanBMI > ujjawalBMI) {
    console.log(
        `Naman's BMI (${namanBMI}) is higher than Ujjawal's ${ujjawalBMI}`
    );
} else {
    console.log(
        `Ujjawal's BMI (${ujjawalBMI}) is higher than naman's ${namanBMI}`
    );
}

// Type Conversion
const inputYear = "1991"; // it is in string
console.log(typeof Number(inputYear)); // -> number
console.log(inputYear + 18); // this will concatenate i.e -> 199118
console.log(Number(inputYear) + 18); // this will give 2009

console.log(Number("Ujjawal")); // This will give NaN i.e Not a Number, whenever it fails to produce a number
console.log(typeof NaN); // number; its a number but it is invalid

// We can convert number to String

num = 23;
str1 = String(num);
console.log(typeof str1);

// Type Coercion
console.log("I'm" + 23 + " years old"); // in JS + opreator is used to do coersion, 23 is converted to "23"
console.log("23" - "10" - 3); // here string is converted to number -> 10
console.log("23" + "10" + 3); // now concatenation will happen
console.log("20" * "3"); // again converted to number -> 60
console.log("20" / "2"); // it will divide -> 10

let n = "1" + 1; // first it will concatenate i.e -> 11
n = n - 1; // now it will subtract due to 'i' operator i.e 10
console.log(n); // -> 10

console.log(2 + 3 + 4 + "9"); // -> 99
console.log("10" - "4" - "1" - 2 + "8");

// Truthy and Falsy

// 5 falsy values in JS: 0, '', undefined, null, NaN
// Everything else is consitered as Truthy value

console.log(Boolean(undefined)); // false
console.log(Boolean({})); // this is an object -> true
console.log(Boolean(0)); // false
console.log(Boolean("Ujjawal")); // true
console.log(Boolean("")); // false

const money = 0;
if (money) {
    console.log("Spend it wisely");
} else {
    console.log("You should work to earn");
}

let height;
if (height) {
    console.log("You have a height");
} else {
    console.log("Height is Undefiend");
}

// Equality Operators
const myAge = 18;
if (age === 18) console.log("you became an adult");

// == is loosely equal, === is strictly equal
console.log("18" == 18); //JS is doing type coersion i.e why -> true
console.log("18" === 18); //now it is strictly checking i.w why -> false

// Prompt, taking input
// const favourite = prompt("What's your favourite number?")
// console.log(favourite)
// console.log(typeof favourite)

if (1 != "1") {
    // !== this is strict version
    console.log("Entered Loose version");
} else {
    console.log("It was Strict version");
}

let r = 1;
let s = 0;

// Boolean Logic
console.log(r & s); //-> 0
console.log(r | s); //-> 1

// Logical Operators
let t = true;
let u = false;
console.log(t && !u); //-> true
console.log(t || u); //-> true

a = 1;
b = "ujjawal";

// Switch Case
const day = "wednesday";
switch (day) {
    case "monday":
        console.log("It's Monday");
        break;
    case "tuesday":
    case "wednesday":
        console.log("Either Tuesday or Wednesday");
        break;
    case "thursday":
        console.log("Thursday");
        break;
    case "friday":
        console.log("Friday");
        break;
    default:
        console.log("Saturday or Sunday");
}

// Ternary Operator
age >= 18
    ? console.log("I'd like to have wine")
    : console.log("Please give me Water");

const drink = age >= 18 ? "Wine" : "Water"
console.log(drink);

// ternary can be written as expression
// anythig which ends with ; is statement otherwise if it has logical expressions then it is called expression
console.log(`I'd like to have ${age >= 18 ? "Wine" : "Water"}`);