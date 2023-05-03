'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2)); // c d e
console.log(arr.slice(2, 4)); // c d
console.log(arr.slice(-2)); // d e
console.log(arr.slice(-1)); // e
console.log(arr.slice(1, -2)); // 1 to except last 2

// the only time we'll use slice() when we have to chain multiple methods
console.log(arr.slice());
console.log([...arr]); // ...arr and slice are exactly same,

// Splice Method- slice() and splice() are exactly same,
// but the splice() mutates/updates the original array

// first arg- from index, 2nd arg- no. of elements ro remove, 3rd arg- replace with elements
// console.log(arr.splice(2, 2)); // a b e
console.log(arr.splice(1, 1, ...['a', 'z', 'x'])); // ['a', 'a', 'z', 'x', 'c', 'd', 'e']
console.log(arr.splice(-1));
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = [1, 2, 3, 4, 5];
arr2.reverse();
console.log(arr2);

console.log(arr.reverse());
console.log(arr);

// CONCAT- both are same
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN - returns string
console.log(letters.join(' - ')); 
