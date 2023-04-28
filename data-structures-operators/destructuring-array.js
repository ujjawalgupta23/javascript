'use strict';

// Destructuring is breaking a complex data structure down to a smaller DS.

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

// Destructuring Array
// Method 1:
const arr = [1, 2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const d = arr[3];
console.log(a, b, c, d);

// Method 2
const [p, q, r, s] = arr;
console.log(p, q, r, s);

const [first, second] = restaurant.categories;
console.log(first, second); //-> italian, pizzeria

// If you don't want second one, then just skip is position by doing this
let [one, , three] = restaurant.categories;
console.log(one, three); //-> italian, vegetarian

// If we want to swap variables
// Method 1:
const temp = one;
one = three;
three = temp;
console.log(one, three);

// Method 2:
[one, three] = [three, one];
console.log(one, three);

// Receive 2 return values from a function
const [starter, main] = restaurant.order(0, 1);
console.log(starter, main);

const nested = [1, 2, [3, 4]];
const [i, , j] = nested;
console.log(i, j);

// destructoring inside destrucotring
const [l, , [m, n]] = nested;
console.log(l, m, n);

// If we don't know how many values to be destructure(unpack)
const [t, u, v] = [1, 2]; // v will have undefined
console.log(t, u, v);

// else we can also provide default value too..
const [x = 1, y = 1, z = 1] = [5];
console.log(x, y, z);
