'use-strict';

// hoisting variables
console.log(me); // var will be undefiend

// console.log(job); // let and const will throw ReferenceError
// console.log(year); // they will be in Temporal Dead Zone (TDZ)

var me = 'Ujjawal';
let job = 'Frontend Developer';
const year = 2000;

// Functions
console.log(addNum(2, 4)); // -> 6
// console.log(addValues(5, 5)); // Reference Error
// console.log(addArrow(7, 6)); //     ""

// console.log(addArrow(1, 4)); // TypeError addArrow is not a funciton
console.log(typeof addArrow); // -> undefined

function addNum(a, b) {
    return a + b;
}

let addValues = function (a, b) {
    return a + b;
};

var addArrow = (a, b) => a + b;

console.log(addArrow(7, 8)); // -> 15

// How hoisting with 'var' can be dangerous
console.log(undefined);

if (!numProducts) deleteCartItems(); // here due to hoisting numProd is undefined which is falsy value

var numProducts = 10;

function deleteCartItems() {
    console.log('All products Deleted!!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y); //-> false because let, const are not global scoped
console.log(z === window.z); //-> they have their own scope
