// Exporting Module
console.log('Exporting Module');

// the variables are scoped to current module
// Export only works at top level code
const shippnigCost = 10;
const cart = []

export const addToCart = function(product, quantity) {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to Cart`);
}

const totalPrice = 40;
const totalQuantity = 4

// We can export them as variables
export {totalPrice, totalQuantity as tq}

// If we only want to export only one thing from module

export default function(product, quantity) {
    cart.push({product, quantity})
    console.log(`${quantity} ${product} added to Cart`);
}
