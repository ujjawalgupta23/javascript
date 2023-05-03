'use strict';

// We use reduce() method to boil down all elements in an array to one singel value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> snowball
const balance = movements.reduce(function (acc, curr, i, arr) {
    console.log(`Iteration ${i}: ${acc}`);
    return acc + curr;
    // return acc + arr[i] // both are same
}, 0); // here 0 is the initial value which the accumulator will have
console.log(balance);

// using arrow, i and arr are not necessary
const balArrow = movements.reduce((acc, curr, i, arr) => acc + curr, 1); // here 1 is accumulator
console.log(balArrow);

// using normal for of loop to check balance
let balanceFor = 0;
for (const mov of movements) {
    balanceFor += mov;
}
console.log(balanceFor);

console.log('-------');
// Maximum Value
// instead of ternary, we could have used Math.max()
const maxVal = movements.reduce((acc, curr) => acc > curr ? acc : curr, 0);
console.log(maxVal);
