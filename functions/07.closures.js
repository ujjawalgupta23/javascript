'use strict';

/* A function has access to the variable environment(VE) of the Execution Context,
in which it was creaetd, even after that Execution Context is gone 

A closure gives a function access to all the variables of its parent function,
even after the parent function has returned. The function keeps the reference
to its outer scope, which preserves the scope chain throughout time.

Due to Closures, a function does not loose connection to the variables, 
that existed at the time of function birthplace

It's a like a person who leaves their hometown to pursue their dreams, 
but they never loose the connection of their hometown

A closure is like a backpack that a function carries around wherever it goes.
The backpack has all the variables that were present in the environment where the function was creaetd
*/

/* Note: We do NOT have to manually create closures, this is a JavaScript feature,
that happens automatically. We can't even access closed-over variables explicitly.
*/

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker(); // this will use closure even secureBooking is gone from context
booker();
booker();

console.dir(booker);

// Closure Example 1
let f;
const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
};

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
};

g();
f();
console.dir(f);

// Reassigning f function
h();
f();
console.dir(f);

// Closure Example 2,
// using a timer, an example in which we don't need to return function to see closure in action
const boardPassengers = function (n, wait) {
    const perGroup = n / 3; // closure will find perGroup here, if not present, then in global

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, eath with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
