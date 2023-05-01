'use strict';

const bookings = [];

// default parameters were introduced with ES6
const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
) {
    // ES5 way
    // numPassengers = numPassengers || 1
    // price = price || 199

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('IX380');
createBooking('IX380', 2, 600);
createBooking('IX380', 3);
createBooking('IX380', undefined, 1000); // if you don't want to pass parameter, then leave undefined there
