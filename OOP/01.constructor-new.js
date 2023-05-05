'use strict';

/* In classical Object Oriented Programming(OOP), and object created from a class is callsed an Instance,
JS doesn't really have class, however we can create an object from a constructor function,
Constructor functions have been used since the beginning of JS, to simulate Classes
hence every time we use 'new', we can say it is an instance 
 */

// Function constructors are not a feature of JS language,
// instead it a pattern developed by other developers

const Person = function (firstName, birthYear) {
    // Instance Properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this, because all the objects created wil carry this function, 
    // this will affect the performance because if you'll create 1000 object, 
    // then thousand functions will be created
    // To solve this we will use Prototypes and Prototypal Inheritance
    this.calcAge = function () {
        console.log(2023 - this.birthYear);
    }
};

// We can't use arrow function here, because arrow points to global

// Above constructor will be converted to ES2015 like..
// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName
//         this.birthYear = birthYear
//     }
// }


// 1. New {} object is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const ujjawal = new Person('Ujjawal', 2000);
const naman = new Person('Naman', 2001);
console.log(ujjawal, naman);

// here ujjawal, naman are instance of Person
// to check whether it is an instance

const yojan = 'Yojan'
console.log(ujjawal instanceof Person); // true
console.log(yojan instanceof Person); // false
