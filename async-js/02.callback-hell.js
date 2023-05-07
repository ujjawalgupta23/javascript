'use strict'

/* Importance:
Callbacks are super powerful way to handle async operations in JS
    Async programming exists because of Callbacks

*/
/* ISSUES:
 1. Callback Hell makes our code look very messy, because of callback inside callback inside callback....
// Even it makes our code hard to mantain(unmaintainable) and even more difficutl to understand
 which leads the code hard to understand, hard to add featured, and hard to debug

 2. Inversion of Control
 We loose control of our program, because we pass our callback func. to another function
 and now the control of this function is with another function, and we don't know
 whether that function will ever execute our function or not
 */
// To solve callback hell, we use promises

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            }, 1000);
        }, 1000);
    }, 1000)
}, 1000)
