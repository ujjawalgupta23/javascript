'use strict';

/**
 * Event loop continuously monitors the Global Execution Context (GEC), 
    as soon as the GEC empties i.e all the global lines are executed,
    the event loop will now pass the items present inside micro-task queue,
    then from the callback queue.
    Note- Event loop always prioritises the Microtask queue, 
    when all the task get finish from Microtask queue, then the callback queue gets chance

    If any task sends another task to Microtask queue, and it goes on continously,
    then it will lead to starvation, as the Callback queue will never get chance,
    to send its tasks to GEC.
 */

console.log('Testing Started');

// This will lead to Trust issues with setTimeout
setTimeout(function () {
    // Callback Queue: It doesn't matter if is runs within 0ms
    console.log('Timeout 1'); // still it will get chance to execute after the Microtask queue finishes
}, 0);

Promise.resolve('Promise 1').then((response) => console.log(response)); // Microtask Queue

Promise.resolve('Proimse 2').then((response) => {
    for (let i = 0; i < 1000000000; i++) {} // this will take time
    console.log(response);
});

console.log('Test End');
