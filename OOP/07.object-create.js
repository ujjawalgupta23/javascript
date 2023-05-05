'use strict';

// setting a prototype to a normal object

const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
    },
    // this is completely different than constructor function
    init(fisrtName, birthYear) {
        this.fisrtName = fisrtName;
        this.birthYear = birthYear;
    },
};

// this will create object that has specified prototype
const ujjawal = Object.create(PersonProto);

console.log(ujjawal);
ujjawal.name = 'Ujjawal';
ujjawal.birthYear = 2000;
ujjawal.calcAge();

console.log(ujjawal.__proto__ === PersonProto);

const naman = Object.create(PersonProto);
naman.init('Naman', 2001);
naman.calcAge();




