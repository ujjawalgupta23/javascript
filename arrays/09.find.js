'use strict';

// find() method returns the first elements which satisfies the condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawl = movements.find((move) => move < 0);
console.log(firstWithdrawl);

/* filter() vs find()
the filter method return a new array satifying a condition,
while find method only return the first element that satisfies its condition
*/

// findIndex() - returns index of ele if inside array otherwise -1
const index = movements.findIndex(mov => mov === 770)
console.log(index);
console.log(movements.indexOf(-400));

/* diff b/w findIndex vs indexOf
    mainly indexOf is used to searchs a specific value in an array, 
    while findIndex() searches for an element that satisfies a specific condition
    specified in a callback function.
    But, both can use callback function
*/
const index1 = movements.indexOf(-650 , 2, mov => mov === -650)
// here -650 is the element we want the index of, 2 is from which index should the search start
// and then the callback function
console.log(index1);
