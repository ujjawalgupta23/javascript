'use strict';

// One way to create array and fill manually
const arr = [1, 2, 3, 4, 5, 6, 7];

// Empty array + fill method
const x = new Array(8); // this will be empty with size 8
console.log(x); // [empty x 8]

// fill() can take 3 arguments, 1st- value to be filled,
// 2nd- from index, 3rd- till which index
x.fill(1, 2, 4);

x.fill(7);
console.log(x);

// Another way to create and fill with Array.from()
// 1st arg is any iterable
// the second arg. is the callback function in map method
const y = Array.from({ length: 8 }, () => 1); // _ -> throwaway variable
console.log(y);

const randomArr = Array.from({length: 100}, () => Math.trunc(Math.random()*100))
console.log(randomArr);