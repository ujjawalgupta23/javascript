'use strict';

// A map has key-value pairs just like object, but the major difference is
// objects have keys are always strings but a map can have keys of any type

const restaurant = new Map();
restaurant.set('name', 'Haldiram');
restaurant.set(1, 'Nainital, Uttarakhand');
restaurant.set(2, 'Lucknow, UttarPradesh');
console.log(restaurant);

// We can chain the set() method in map to add multiple keys same time

restaurant
    .set('menu', ['Momos', 'Chilli Potato', 'Spring Roll'])
    .set('open', 10)
    .set('close', 21)
    .set(true, 'We are open')
    .set(false, 'We are close');

console.log(restaurant);
console.log(restaurant.get(true));
console.log(restaurant.get(1));
console.log(restaurant[0]);

const time = 14;
console.log(restaurant.get('open') <= time < restaurant.get('close'));

console.log(restaurant.has('name'));
restaurant.delete(true);
console.log(restaurant);
console.log(restaurant.size);

const arr = [1, 2];
restaurant.set(arr, 'Test');
restaurant.set(document.querySelector('h1', 'Heading'));
console.log(restaurant);

console.log(restaurant.get(arr));

// to clear map
// restaurant.clear()

const openingHours = {
    // thu: {       //Instead of this we can also write
    wed: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    [`day-${4 + 2}`]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

// Converting objects to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

const question = new Map([
    ['question', 'What is the best programming language'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Python'],
    [4, 'JavaScript'],
    ['correct', 4],
    [true, 'Correct'],
    [false, 'Try Again!'],
]);

// Quiz
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer?'));
// console.log(answer);
// console.log(
//     question.get('correct') === answer
//         ? question.get(true)
//         : question.get(false)
// );
// or we can use

// console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]); // this is same as question.entries()
console.log([...question.keys()]);
console.log([...question.values()]);
