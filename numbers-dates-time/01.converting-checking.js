'use strict';

console.log(23 === 23.0); // true

// Base 10 - 0 to 9.  1/10 = 0.1.  3/10 = 3.33333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);         // 0.3000000000004
console.log(0.1 + 0.2 === 0.3); // false

// Conversion
console.log(Number('23'));
console.log(+'23');          // 23 - type coercion

// Parsing
console.log(Number(parseInt('20px')));   // 20
console.log(Number.parseInt('e23'));     // Nan

console.log(Number.parseInt('2.5rem'));         // 2
console.log(Number.parseFloat('2.5rem'));       // 2.5
console.log(Number.parseFloat('    2.5rem  ')); // 2.5

// .isNaN() is not a perfect wat to check if a value is a Number
console.log(Number.isNaN(20));          // false
console.log(Number.isNaN('20'));        // false
console.log(Number.isNaN(+'20X'));      // true
console.log(Number.isNaN(23 / 0));      // false

// Best way of checking if value is Number
console.log(Number.isFinite(20));       // true
console.log(Number.isFinite('20'));     // false
console.log(Number.isFinite(+'20x'));   //false
console.log(Number.isFinite(23 / 0));   // false

// If using Integer
console.log(Number.isInteger(23));      // true
console.log(Number.isInteger(23.0));    // true
console.log(Number.isInteger(23 / 0));  // false
