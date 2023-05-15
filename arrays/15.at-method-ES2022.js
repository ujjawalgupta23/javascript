'use strict';

const arr = [1, 2, 3, 4];
// To access first element
console.log(arr[0]);     // 1
console.log(arr.at(0));  // 1

// To access last element
console.log(arr[arr.length - 1]); // 4
console.log(arr.slice(-1)[0]);    // 4
console.log(arr.at(-1));          // 4

// .at() also works with strings
console.log('ujjawal'.at(0));  // u
console.log('ujjawal'.at(-1)); // l
