'use strict';

const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const openingHours = {
    // thu: {       //Instead of this we can also write
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    [`day-${4 + 2}`]: {
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

    // order: function (starterIndex, mainIndex) {  // instead of writing 'function', we can directly write
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // openingHours: openingHours // Instead of writing this
    openingHours,
};

// Property Names
const properties = Object.keys(openingHours); //Object.keys() give an Array
console.log(`We are open on ${properties.length} days.`);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
    // console.log(day);
    openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
    console.log(`On ${key} we open at ${open} and clost at ${close}`);
}
