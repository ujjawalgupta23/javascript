"use strict";

// Suppose you want to print a line mulitple times, you will console.log() it multiple times.
// But what if you have to log() 1000 times, here comes for loop to the rescue

// for loop keeps on runnig while the condition is True
for (let i = 1; i <= 10; i++) {
    console.log(`Line ${i}`);
}

const ujjawal = [
    "Ujjawal",
    "Gupta",
    23,
    "Frontend Engineer",
    ["Yojan", "Nihal"],
];

const type = [];
for (let i = 0; i < ujjawal.length; i++) {
    // Reading from ujjawal array
    console.log(`${ujjawal[i]} ${typeof ujjawal[i]}`);

    // .Filling type to type array
    type[i] = typeof ujjawal[i]; // or we can use type.push(typeof ujjawal[i])
}
console.log(type);

const years = [1998, 2000, 2001, 2003];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}
console.log(ages);

// continue and break
for (let i = 0; i <= 20; i++) {
    // print only even
    if (i % 2 !== 0) continue;
    console.log(i);
}

// Looping Backwards
let i = 0;
for (i = ujjawal.length; i >= 0; i--) {
    console.log(ujjawal[i]);
}

for (i = 5; i >= 0; i--) {
    // printing reverse
    console.log(i);
}

// Nested for loops
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting Exercise ${exercise} ----`);
    for (let rep = 1; rep < 5; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}

// While Loop -> When you don't know the number of iterations
i = 5;
while (i) {
    console.log(i);
    i -= 1; // or i--
}
console.log("------");
// Usage or while loop on random number
let dice = Math.floor(Math.random() * 5) + 1;
// console.log(dice);

while (dice != 2) {
    console.log(`You rolled ${dice}`);
    dice = Math.floor(Math.random() * 10) + 1;
    if (dice === 2) console.log("Loop is going to end");
}
