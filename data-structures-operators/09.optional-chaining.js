'use strict';

// When we are not sure, whether any property exists or not,
// we can use if else, or we can use optional chaining

const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    // [`day-${4 + 2}`]: {
    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    openingHours,
};

// Suppose in Opening Hours we want to know wheter it is open on Mon or not
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// Or if we are not even sure that openingHours exists or not then
if (restaurant.openingHours && restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);

if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// Using Optional Chaining
console.log(restaurant.openingHours.mon?.open); //if mon exists then only check open, otherwise return undefined

console.log(restaurant.openingHours?.mon?.open); //-> undefined
console.log(restaurant.openingHours?.fri?.open); //-> 11

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`Restaurant opens on ${day} at ${open}`);
}

// Checking if a Method exists or not with Optional Chaining
console.log(restaurant.order(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderMomos?.(2, 1) ?? 'Method does not exist');

// Checking in an Array
const users = [{ name: 'Ujjawal', email: 'ujjawalgupta23@gmail.com' }];
// const users = []

console.log(users[0]?.name ?? 'User array is empty');

// If we want to write above code with if-else
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');
