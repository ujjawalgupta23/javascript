'use strict';

/* Each and every function in JS automatically has a property named Prototype
and that includs constructor function too.
Every object that is created by certain constructor function, 
will get access to all methods and properties that we define on constructor's prototype property */

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

// Creating object/ instance
const ujjawal = new Person('Ujjawal', 2000);

// Prototypes
// Here arrow function will not work because it's this will point to global,
// and this.birthYear will be undefined
Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
};

// Person.prototype is not the prototype of Person(), but all the objects created through Person

// Now all the objects created from Person constructor
// will have access to all the methods of its prototype property
ujjawal.calcAge();
console.log(Person.prototype);

console.log(ujjawal.__proto__);
console.log(ujjawal.__proto__ === Person.prototype); // true
console.log(Person.__proto__ === Person.prototype); // false

console.log(Person.prototype.isPrototypeOf(ujjawal)); //true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// We can also set properties on Properties
Person.prototype.species = 'Homo Sapiens';

// All the objects inherit the properties of Prototype
// but this will not be object's own property
console.log(ujjawal.species); // 'Homo Sapiens'

// To check own property
console.log(ujjawal.hasOwnProperty('firstName')); // true
console.log(ujjawal.hasOwnProperty('species')); // false

console.log(ujjawal.__proto__.__proto__); // Object.prototype (top of prototype chain)
console.log(ujjawal.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor); // Person function

const arr = [1, 2, 3, 4, 5, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__); // it will again point to object

// We can even further extend the functionality of arrays,
// Suppose we want to add a method which returns all unique values of the array

Array.prototype.unique = function () {
    return [...new Set(this)];
};

// now all arrays can inherit unique() method
console.log(arr.unique());

// extending built-in prototype is not a good idea

const h1 = document.querySelector('h1');
console.log(h1); // will give the element
console.dir(h1);

// Functions are also objects so
console.dir((x) => x + 1); // that we can use methods like call, bind on functions


