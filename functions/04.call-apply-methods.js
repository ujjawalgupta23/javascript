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
