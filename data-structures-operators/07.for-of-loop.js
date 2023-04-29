'use strict';

// For of loop

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

// .entries is same as enumerate in python
for (const food of menu.entries()) {
    console.log(`${food[0] + 1}: ${food[1]}`);
}

for (const [ind, food] of menu.entries()) console.log(ind, food);

console.log(...menu.entries());

// just checking to rename
