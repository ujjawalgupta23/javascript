'use strict';

// flat- as its name suggests, flat() flattens the array if it contains nested array inside it
// by default it has 1 level deep nested passed as argument, otherwise we have to mention specifically in argument

const account1 = {
    owner: 'Ujjawal Gupta',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Naman Gupta',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Yojan Saini',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Nihal Agarwal',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arr1 = [[1, [2, 3]], [[4, 5], 6], 7, 8];
console.log(arr1.flat(2)); // 2 is max recursion depth

// we can chain flat() with map and other methods
const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements);
// now we can flat it
const allMovements = accountMovements.flat();
console.log(allMovements);
// now total balance of bank
const totalBal = allMovements.reduce((acc, curr) => acc + curr);
console.log(totalBal); // 17840

// now all in one with Chaining
const overallBal = accounts
    .map((acc) => acc.movements)
    .flat()
    .reduce((acc, curr) => acc + curr);

console.log(overallBal); // 17840

// flatMap()- combination of both map() and flat(),
// but it only flats till 1 recursion depth, otherwise you have to use flat() separately
const totalBalance = accounts
    .flatMap((acc) => acc.movements)
    .reduce((acc, curr) => acc + curr);
console.log(totalBal); // 17840
