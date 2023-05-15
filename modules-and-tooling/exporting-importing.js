// Importing Module: All the import statements are hoisted
// All the code which is imported will be executed first
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing Module');

addToCart('Mango', 4);

console.log(price, tq);

// If we want to import everything
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('Watermelon', 20);
console.log(ShoppingCart.totalPrice);

// If only one thing is exported from other module

// These import, exports are not just a copy, instead they are live connection
// To point to same place in memory

import add from './shoppingCart.js';
add('Musk Melon', 15);


