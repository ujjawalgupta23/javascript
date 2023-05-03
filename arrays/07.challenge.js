'use strict';

const dataOne = [5, 2, 4, 1, 15, 8, 3];
const dataTwo = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHuman = function (ages) {
    // 1.
    const humanYears = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
    console.log(humanYears);

    // 2.
    const adultDogs = humanYears.filter((age) => age >= 18);
    console.log(adultDogs);

    // 3.
    // const avgAge = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length
    const avgAge = adultDogs.reduce(
        (acc, age, i, arr) => acc + age / arr.length,
        0
    );
    console.log(avgAge);
};

// 4.
calcAverageHuman(dataOne);
console.log('----dataTwo----');
calcAverageHuman(dataTwo);
