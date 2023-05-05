'use strict';

// setTimeout() timer runs just once after a defined time,
// 1st arg = callback function, 2nd arg = time in milliseconds
// the parameter can be passed after setting time

const ingredients = ['olives', 'corn'];
const orderPizza = setTimeout(
    (ing1, ing2) => console.log(`Here's your Pizza with ${ing1} and ${ing2}`),
    2000,
    ...ingredients
    // 'olives',
    // 'corn'
);
console.log('Waiting...');

// We can cancel the timeout too
if (ingredients.includes('corn')) clearTimeout(orderPizza);

// setInterval() timer runs forever until we stop it
// if we want a function to run over and over again
const timerId = setInterval(function () {
    const now = new Date();
    console.log(now);
}, 5000);

// to stop setInterval, we have to use clearInterval()
setTimeout(() => {
    clearInterval(timerId);
    console.log('Timer Stopped');
}, 12000);
