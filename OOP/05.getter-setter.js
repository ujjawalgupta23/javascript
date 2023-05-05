'use strict';

// for objects
const account = {
    name: 'Ujjawal',
    movements: [1000, 500, 2000, 100],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set addMoney(mov) {
        this.movements.push(mov);
    },
};

// get
console.log(account.latest);

// set
account.addMoney = 200;
console.log(account.movements);

// For Classes
class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    get age() {
        return 2023 - this.birthYear;
    }

    get personName() {
        return this.firstName;
    }

    set name(newName) {
        this.firstName = newName;
    }
}

const ujjawal = new Person('Ujjawal', 2000);
console.log(ujjawal.age);
console.log(ujjawal.personName);
ujjawal.name = 'Naman';
console.log(ujjawal.personName);
