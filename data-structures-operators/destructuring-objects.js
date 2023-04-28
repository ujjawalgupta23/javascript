'use strict';

// We generally destructure objects during API Call

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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

    orderDelivery: function ({
        time = '10:00PM',
        starterIndex = 2,
        address,
        mainIndex = 0,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
        );
    },
};

// To destructure objects we use {}, we use same name as it is in the object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// If we don't want our variable names same as the object variable..
// this is very helpful when we fetch third party data
const {
    name: restuarantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restuarantName, openingHours, tags);

// Suppose we want to fetch a value which does'nt exist in object, we can assign default value just as array
const { menu = [], starterMenu: starters = [] } = restaurant;
// here menu is not present in restaurant, so default [] is provied
// otherwise 'undefined' would have been alloted to it if we havn't provided default
console.log(menu, starters);

const { fri } = openingHours;
console.log(fri); // this will again give object of open, close

const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Sometimes there may be too many parameters, so we can pass object in any order
restaurant.orderDelivery({
    mainIndex: 2,
    address: 'Tallital, Nainital',
    starterIndex: 0,
    time: '9:30PM',
});

restaurant.orderDelivery({ address: 'Cinema Road' });
