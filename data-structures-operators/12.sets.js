'use strict';

// Set is a collectin of unique values

const ordersSet = new Set(['Momos', 'Chowmein', 'Spring Roll', 'Momos']);
console.log(ordersSet);

// String is also iterable
console.log(new Set('Ujjawal')); //-> {'U', 'j', 'a', 'w', 'l'}

console.log(ordersSet.size);
console.log(ordersSet.has('Momos')); // true
console.log(ordersSet.has('Pizza')); // false

ordersSet.add('Chilli Potato');
ordersSet.delete('Chowmein');
console.log(ordersSet);

// To empty the set
// ordersSet.clear();
// console.log(ordersSet);

// Retrive data from Set - we can't use indexing just like arrays

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// Spread operator works on all Iterables, so in Set as well
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// To check unique positions in restaurant
console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// To check unique characters in a string
console.log(new Set('Ujjawal Gupta').size);
