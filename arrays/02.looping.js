'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// using for of loop
for (const [index, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${index + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${index + 1}: You withdrew ${-movement}`);
    }
}

console.log('-------');
// forEach(val, index, array) - it takes callback as its argument
// it loops over the array and for each iteration it executes the callback function
movements.forEach(function (movement, index, array) {
    if (movement > 0) {
        console.log(`Movement ${index + 1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${index + 1}: You withdrew ${-movement}`);
    }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// We cannot use continue and break in forEach

// With maps and sets
const currencies = new Map([
    ['INR', 'Indian Rupee'],
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// _ -> it is a throwaway variable
const currencyUnique = new Set(['INR', 'USD', 'GBP', 'INR']);
console.log(currencyUnique);

currencyUnique.forEach(function (val, _, set) {
    console.log(`${val}: ${val}`);
});
