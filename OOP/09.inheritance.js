'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2023 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

/* We have to set __proto__ property of Student to Person __proto__ property
// We have to create it exactly this point of 

We have to create this connection here before we add any more methods to the prototype object 
because object.create will create an empty object*/

Student.prototype = Object.create(Person.prototype);

// This will work but this will directly point to Person prototype,
// We want student prototype to be a new object which is like Person prototype
// Thats why we need Object.create

// Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const ujjawal = new Student('Ujjawal', 2000, 'Computer Science');
ujjawal.introduce();
// ujjawal.calcAge(); // TpeError: ujjawal.calcAge is not a function

ujjawal.calcAge();

console.log(ujjawal.__proto__); // Student's Proto
console.log(ujjawal.__proto__.__proto__); // Person's Proto
console.log(ujjawal.__proto__.__proto__.__proto__); // Object

console.dir(Student.prototype.constructor); // person
console.log(ujjawal instanceof Student); // true
console.log(ujjawal instanceof Person); // true
console.log(ujjawal instanceof Object); // true, because it is also in it's prototype chain

// To point the constructor to intself
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.log(ujjawal instanceof Person); // true
