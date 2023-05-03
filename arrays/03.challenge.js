'use strict';

const juliaData = [3, 5, 2, 12, 7];
const kateData = [9, 16, 6, 8, 3];

const allData = [
    [juliaData, kateData],
    [
        [9, 16, 6, 8, 3],
        [10, 5, 6, 1, 4],
    ],
];
const checkDogs = function (juliaData, kateData) {
    // 1.
    const copyJulia = juliaData.slice(1, -2);
    // console.log(copyJulia);

    // 2.
    const combinedData = copyJulia.concat(kateData);

    // 3.
    combinedData.forEach(function (data, index) {
        if (data >= 3)
            console.log(
                `Dog number ${index} is an adult and is ${data} years old`
            );
        else console.log(`Dog number ${index} is still a puppy`);
    });
};

checkDogs(juliaData, kateData);
console.log('------');
checkDogs(allData[1][0], allData[1][1]);
