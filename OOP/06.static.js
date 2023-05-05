'use strict';

// .from() is a static method

Array.from(document.querySelectorAll('h1'));

/* .from() will work on Array
 but it will not work in [] this array
this is because, the from() method is attached to the entire Array constructor,
and not to the prototype property of the the Array Constructor,
therefore all the Arrays do not inherit this mehtod
 */

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    // Instance Method which is attached to prototype property
    calcAge() {
        return 2023 - this.birthYear;
    }

    get getName() {
        console.log(`Name is ${this.firstName}`);
    }

    set setName(newName) {
        this.firstName = newName;
    }

    // 1st way to create static method
    static greet() {
        console.log('Hi! How are you?');
    }
}

// Now to create a static method, which will only be accessible to Person constructor,
// not to its prototype

// 2nd way to create static method, which is not looking good
// Person.greet = function () {
//     console.log('Hi! How are you?');
//     console.log(this); // this will give entire constructor, because is pointing to Person
// };

const ujjawal = new Person('Ujjawal', 2000);
ujjawal.getName;
console.log(ujjawal.firstName);
console.log(ujjawal.calcAge());

// ujjawal.setName('Naman'); // this is invalid
ujjawal.setName = 'Naman';
ujjawal.getName;

// ujjawal.greet(); // TpeError: ujjawal.greet is not a function
Person.greet();
