'use strict';

// Spread operator works on all Iterables
// Iterables: Arrays, Strings, Maps, Sets but NOT Objects
// This '...' spread operator was introduced with ES6

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here's your Pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

// naive approach to add elements to new array from old
const arr = [1, 2, 3, 4];
const oldArr = [arr[0], arr[1], arr[2], arr[3], 4, 5];
console.log(oldArr);

// using spread operator: it takes out all the elements
const newArr = [...arr, 5, 6, 7];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Momos'];
console.log(newMenu);

// Checking shallow copy
const a1 = [[1, 2], 3, 4];
const x = [...a1];
x[0] = 44;
console.log(a1);
console.log(x);

// Shallow Copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// To join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

const name = 'Ujjawal';
const letters = [...name, 'G'];
console.log(letters);

// Taking Input
const ingredients = [
    //     prompt("Let's make Pasta, Ingredient 1?"),
    //     prompt('Ingredient 2?'),
    //     prompt('Ingredient 3?'),
];

// instead of orderPasta(ingredients[0], ingredients[1], ingredients[2])
restaurant.orderPasta(...ingredients);

const newRestaurant = { founded: 1998, ...restaurant };
console.log(newRestaurant);

const copyRestaurant = { ...restaurant };
copyRestaurant.name = 'Starbucks';
console.log(restaurant); //both have diff. values
console.log(copyRestaurant);
