'use strict';

const lufthansa = {
    name: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}  // before ES6
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.name} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(149, 'Ujjawal Gupta');
lufthansa.book(540, 'Naman Gupta');

// we have to use the exact same name as in object to use the function
const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// book(23, 'Naman Gupta'); // this will not work, because this will point to undefined

// we have to use call method to use object function outside
// call manually sets this keyword to any function call
book.call(lufthansa, 220, 'Yojan Saini'); //here this will point to lufthansa
console.log(lufthansa);

book.call(eurowings, 230, 'Nihal Agarwal'); // this -> eurowings
console.log(eurowings);

const swiss = {
    name: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, ...['670', 'Nitin Mishra']);

// apply() method is exactly same as call, but other than function arguments, its takes rest of the parametes in array
// it not not used much in mordern JavaScript

const flightData = [890, 'Rishabh Sehgal'];
book.apply(swiss, flightData);
book.call(eurowings, ...flightData);

// Bind method
// the bind() method returns the function binding this -> to the object passed to it

// this will not call the book function, instead it will return new function where this keyword will be set to eurowings
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(978, 'Utkarsh Vasudeva');

// Partial Applications - passing some parameters
const bookEW23 = book.bind(swiss, 23);
bookEW23('Ujjawal Gupta', 62); // any extra passed argument will be ignored like 62 here

// With Event Listners
// In Event Handler function, this always points to the element on which it is attached to
lufthansa.planes = 200;
lufthansa.buyplane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

// here this will point to button element
document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * .23

console.log(addVAT(100));
console.log(addVAT(23));

// HOF
const addT = function (rate, value) {
    return function (value) {
        return value + value * rate
    }
}

console.log(addT(.23)(100));
