'use strict';

const poll = {
    question: 'What is your favourite language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

    // Ṭhis generates [0, 0, 0, 0].
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const input = Number(
            prompt(
                `${this.question} \n${this.options.join('\n')}
                \n(Write option number)`
            )
        );
        // console.log(typeof input)

        // 0 <= input < 4 ? this.answers[input] += 1 : console.log("Invalid");
        // if (0 <= input < 4) this.answers[input] += 1;
        // else console.log('Invalid');
        typeof input === 'number' &&
            input < this.answers.length &&
            this.answers[input]++;

        // console.log(this.answers);
        this.displayResutls();
        this.displayResutls('string');
    },
};

//2.
document
    .querySelector('.poll')
    .addEventListener('click', poll.registerNewAnswer.bind(poll));

// 3.
poll.displayResutls = function (type = 'array') {
    if (type === 'array') console.log(this.answers);
    else if (type === 'string')
        console.log(`Poll results are: ${this.answers.join(', ')}`);
};

// Bonus
poll.displayResutls.call({ answers: [5, 2, 3] }, 'string');
poll.displayResutls.call({ answers: [1, 5, 3, 9, 6, 1] });
