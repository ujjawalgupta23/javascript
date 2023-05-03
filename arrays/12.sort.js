'use strict';

// sort() method sorts the elements of an array, and it modifies the original array
const owners = ['Ujjawal', 'Naman', 'Yojan', 'Nihal'];
console.log(owners.sort());
console.log(owners);

// Numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// here the numbers will be converted to string, then sorted,
// so it will not be sorted numeracally but alphabetically
console.log(movements.sort());

// Ṭo sort is numerically, we have to use callback

// ASCENDING Order
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

movements.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
});

// OR
movements.sort((a, b) => (a < b ? -1 : 1));

// OR
// if a > b, a-b will be positive, so swap, if a < b, a-b will be -ve, so don't swap(already sorted)
movements.sort((a, b) => a - b);

// DESCENDING Order, reverse the conditions
movements.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 1;
});

// OR
movements.sort((a, b) => (a < b ? 1 : -1));

// OR
movements.sort((a, b) => b - a);
