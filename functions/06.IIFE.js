'use strict';

/* 
Immediately Invoked Function Expressions (IIFE),
it is a function which runs only once, and cannot run twice
*/

const runOne = function () {
    console.log('This will not run again');
};

runOne(); // but this can run multiple time, so this is not IIFE

// IIFE
/* these functions are in a scope, all the functions defined inside it will be private
they are encapsulated inside the scope*/
(function () {
    console.log('This will NEVER run again.');
})();

// Arrow IIFE
(() => console.log('This arrow will not run again'))();

// variables created with let, const create their own scope instead of being in global scope

{
    const privateNum = 23;
    var publicNum = 90;
}
// console.log(privateNum);  // not defiend
console.log(publicNum); // 90, var can be accessed from anywhere
