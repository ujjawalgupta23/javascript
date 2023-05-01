'use strict';

const airline = 'Akasa Airlines';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2

console.log('B737'[0]); // B

// To get length of string
console.log(airline.length);
console.log('Ujjawal'.length);

// Methods
console.log(airline.indexOf('s'));
console.log(airline.lastIndexOf('A')); // 6
console.log(airline.indexOf('Airline')); // 6, -1 if not found

// .slice() always returns a new string
console.log(airline.slice(4));
console.log(airline.slice(6, 9)); // 'Air', end index is not included

// If we want the first word from the string
console.log(airline.slice(0, airline.indexOf(' '))); // Akasa
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Airlines

console.log(airline.slice(-2)); // es (start from 2nd last index)
console.log(airline.slice(1, -1)); // kasa Airline (from 1st index to 2nd last index)

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got middle seat ');
    else console.log('You got Lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Ḥow wonder we can call method on a primitive type?
`Since string is primitive, JS behind the scence converts the string primitive,
to string object, and then on that object methods can be called,
and this process is called Boxing `;

console.log(new String('Ujjawal'));
console.log(typeof new String('Ujjawal'));

// and after all the operations, the object string is converted back to string primitive
console.log(typeof new String('Ujjawal').slice(1));

// Coverting to Upper and Lower Case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Suppose you don't know how the string is and want to Capitalise it
const name = 'ujJaWaL';
const lowerName = name.toLowerCase();
const capName = lowerName[0].toUpperCase() + lowerName.slice(1);
console.log(capName);

const email = 'ujjawalgupta23@gmail.com';
const loginEmail = '    ujJaWaLGupTa23@gMaiL.cOm   \n \t';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

// Another way just like map is chaining methods
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email); // true

// replacing char / string in a string
// replece() will only replace first instance, whereas replaceAll() will replace all the instances
const priceUSD = '$11.00';
const priceINR = priceUSD.replace('$', '₹').replace('.', ',');
console.log(priceINR);

const announcement =
    'All passengers come to boarding door 23. I repeat, Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

// we can also use regex to replace
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const airplane = 'Airbus A320neo';
console.log(airplane.includes('A320'));
console.log(airplane.includes('Boeing'));
console.log(airplane.startsWith('Airb'));

if (airplane.startsWith('Airbus') && airplane.endsWith('neo'))
    console.log('Part of Airbus');

// Practice
// .includes() is case-sensitive
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('gun') || baggage.includes('knife')) {
        console.log("You're not allowed to onboard");
    } else console.log('Welcome aboard!');
};

checkBaggage('I have a Laptop, Knife and some Food ');
checkBaggage('I have some cash and a gUn for protection');
checkBaggage('I have a camera and food');

// Split a string
const str1 = 'A+very+nice+string';
console.log(str1.split('+')); // it will be splitted to Array

const [firstName, lastName] = 'Ujjawal Gupta is an SDE'.split(' '); // is an SDE will be ignored
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// Capitalize name function
const capetalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        // OR
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};

capetalizeName('ujjawal gupta'); // Ujjawal Gutpa
capetalizeName('naman gupta'); // Naman Gupta

// Padding: Adding certain number of characters to string until desired length is not achived
const message = 'Hi Ujjawal';
console.log(message.padStart(20, '*').padEnd(30, '+'));
console.log('Naman'.padEnd(15, '$').padStart(20, '₹'));

// Masking a number

const maskCreditCard = function (number) {
    const str = number + '';
    const maskedStr = str.slice(-4).padStart(str.length, '*');
    return maskedStr;
};

console.log(maskCreditCard(461587));
console.log(maskCreditCard('446577879963'));

// repeat()
const message2 = 'Bad weather... All Departures Delayed...';
console.log(message2.repeat(4));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(2);
planesInLine(5);


