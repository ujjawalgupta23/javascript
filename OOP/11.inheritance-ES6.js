'use strict';

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // this method will be attded to the .prototype property
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    greet() {
        console.log('Hi there!');
    }
}

class Student extends Person {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    // Overriding- it appers first in the portotype chain,
    // this is shadowing the one present in parent class
    calcAge() {
        console.log(
            `I'm ${
                2023 - this.birthYear
            } years old, but as a student I fell more like I am ${
                2023 - this.birthYear + 10
            }`
        );
    }
}

const ujjawal = new Student('Ujjawal Gupta', 2000, 'Computer Science');
ujjawal.introduce();
ujjawal.calcAge();
