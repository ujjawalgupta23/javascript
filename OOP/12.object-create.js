'use strict';

const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const ujjawal = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init(firstName, birthYear); // it's working without call()
    this.course = course;
};

StudentProto.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const naman = Object.create(StudentProto);
naman.init('Naman', 2001, 'Commerce');
naman.introduce();
naman.calcAge();

// In real world most of the time ES6 classes are used
