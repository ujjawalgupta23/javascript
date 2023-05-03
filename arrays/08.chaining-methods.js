'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const UsdToInr = 81.81;

// PIPELINE
const totalDepositsUSD = movements
    .filter((movement) => movement > 0) // returns array
    .map((movement) => movement * UsdToInr) // return array
    .reduce((acc, curr) => acc + curr, 0); // returns value
console.log(totalDepositsUSD);

// but sometimes, chaining could be hard to debug,
// so we have to add logs in between, eg.
const totalDepositsDebug = movements
    .filter((movement) => movement < 0)
    .map((movement, i, arr) => {
        console.log(arr);
        return movement * UsdToInr;
    })
    .reduce((acc, curr) => acc + curr, 0);
console.log(totalDepositsUSD);

// challenge - 3
const dataOne = [5, 2, 4, 1, 15, 8, 3];
const dataTwo = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
    return ages
        .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter((age) => age >= 18)
        .reduce((acc, curr, i, arr) => acc + curr / arr.length, 0);
};

console.log(calcAverageHumanAge(dataOne));
console.log(calcAverageHumanAge(dataTwo));
