'use script';

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
// Here both values will be affected on updation
const marriedJessica = jessica;
marriedJessica.lastName = 'David';
console.log('Before marriage', jessica);
console.log('After marriage', marriedJessica);

// Now on updation values will not update on both sides
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

// this Object.assign works only on first level i.e
// if we have object inside object then the inner object will still be pointing same object
// this will just create a shallow copy, not a deep copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'David';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);
