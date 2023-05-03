'use strict';

// filter() is used to filer elements that satisfy certain condition
// It also uses a callback function

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (movement) {
    return movement > 0;
});
console.log(deposits);

// using arrow
const withdrawl = movements.filter((movement) => movement < 0);
console.log(withdrawl);
