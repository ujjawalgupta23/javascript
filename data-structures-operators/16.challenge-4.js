'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const subBtn = document.querySelector('button');

const sepTrim = function (text) {
    const underArr = text.split('\n');
    const trimmed_arr = [];
    for (const word of underArr) {
        trimmed_arr.push(word.toLowerCase().trim());
    }
    return trimmed_arr;
};

subBtn.addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    // const trimmed_arr = sepTrim(text);
    const rows = text.split('\n');

    for (const [i, row] of rows.entries()) {
        const [first, second] = row.trim().toLowerCase().split('_');

        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
    }
});
