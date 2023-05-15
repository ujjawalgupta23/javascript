'use strict';

// When using '||' 'or' operator, if the first value is a truthy value, it will immediately return the first value

// It will always search for the first truthy value

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
        console.log(`Here's your pizza with ${mainIng} and ${otherIng}`);
    },
};

console.log(2 || 'Ujjawal'); // -> 2
console.log('' || 'Naman'); // -> Naman
console.log(true || 0); // -> true
console.log(undefined || null); // -> null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // -> Hello

// restaurant.numGuests = 20;
// if numGuests = 0, still it will be considered falsy
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 45; // numGuests is undefined
console.log(guests2);

// When using '&&' 'and', it will return first falsy value
// if all are truthy, it will return last truthy value

console.log(0 && 'Ujjawal'); // -> 0
console.log(7 && 'Ujjawal'); // -> Ujjawal
console.log('Hello' && 23 && null && 'Ujjawal'); // -> null

// example
// supopse we do don't know if the variable exists, then
// instead of using 'if' we can use
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushroom', 'spinach');
}

// this can be confusing, and you should not replace all if blocks
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// Nullish Coalescing
// Nullish: null and undefined, it will consider (0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);  // 0
