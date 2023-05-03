'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// both includes and some return boolean,
// includes() id used for EQUALITY
console.log(movements.includes(200));

// some() is used for CONDITION, it checks 'if there is any'
console.log(movements.some((mov) => mov === -400)); // true
const anyDeposits = movements.some((mov) => mov > 0); // true
console.log(anyDeposits);

// EVERY: if every element passes the test of our callback function,
// then it returns true, otherwise false

const mov1 = [100, 2000, 1, 90000];
console.log(movements.every((mov) => mov > 0)); // false
console.log(mov1.every((mov) => mov > 0)); // true

// Till now we are always making are callback function inside the method,
// but we can define our callback outside and call it in method
const depost = (mov) => mov > 0;
console.log(movements.some(depost));
console.log(movements.every(depost));
console.log(movements.filter(depost));
