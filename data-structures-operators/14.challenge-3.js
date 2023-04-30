'use strict';

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4. // .entries() is not needed
// for (const [key, value] of gameEvents.entries()) {
//     console.log(
//         key <= 45
//             ? `[FIRST HALF] ${key}: ${value}`
//             : `[SECOND HALF] ${key}: ${value}`
//     );
// }

for (const [key, value] of gameEvents) {
    const half = key <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${key}: ${value}`);
}
