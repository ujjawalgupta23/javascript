'use strict';

// just to add syntactic sugar to the constructor, we use classes,
// it still uses prototypes behind
// classes are just special type of functions

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // this method will be attded to the .prototype property
    calcAge() {
        console.log(2023 - this.birthYear);
    }
}

const ujjawal = new PersonCl('Ujjawal', 2000);
console.log(ujjawal);
ujjawal.calcAge();

console.log(ujjawal.__proto__ === PersonCl.prototype);

// this will also work
PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
};

ujjawal.greet();

// 1. Classes are not hoisted
// 2. Classes are also first-class citizens (We can pass them into function and also return them from functions)
// 3. Classea are executed in strict mode

/* With function constructors it could look like a big mess,
   but with classes it looks a lot cleaner */
