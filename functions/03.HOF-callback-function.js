'use strict';

const oneWord = function (word) {
    const newWord = word.replace(/ /g, '').toLowerCase();
    return newWord;
};

const upperFirstWord = function (word) {
    const [first, ...other] = word.split(' ');
    return [first.toUpperCase(), ...other].join(' '); // without ... it will consider it as one
};

console.log(oneWord('Ujjawal is a Software Developer'));
console.log(upperFirstWord('Ujjawal is a Software Developer'));

const transformer = function (word, fun) {
    console.log(`Original string is: ${word}`);
    console.log(`Transformed String is: ${fun(word)}`);
    console.log(`Transformed by: ${fun.name}`); // gives function name
};

transformer('Ujjawal Gupta', oneWord);
transformer('Ujjawal Gupta', upperFirstWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('✋');
};
document.body.addEventListener('click', high5);

['Ujjawal', 'Naman'].forEach(high5);

// Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Ujjawal'); // this is using closures
greeterHey('Naman');

greet('Hello')('Naman');

const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArrow('Namaste')('Ujjawal');
