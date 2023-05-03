'use strict';

// map() call the callback function for each of the element present inside the array

const UsdToInr = 82.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Without Arrow
// const movementsINR = movements.map(function (movement) {
//     return movement * UsdToInr
// })

// With Arrow

const movementsINR = movements.map((movement) => movement * UsdToInr);
console.log(movementsINR);

// ohter wise using for of loop
const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * UsdToInr);
console.log(movementUSDfor);

const movementsDesc = movements.map(
    (mov, i) =>
        `Movement ${i + 1}: You ${
            mov > 0 ? 'deposited' : 'withdrew'
        } ${Math.abs(mov)}`
);
console.log(movementsDesc);
