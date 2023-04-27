'use-strict';

const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');

const curScore0 = document.getElementById('current--0');
const curScore1 = document.getElementById('current--1');

const rollDiceBtn = document.querySelector('.btn--roll');

score0Ele.textContent = 0;
score1Ele.textContent = 0;

diceEle.classList.add('hidden');

let currScore = 0;

rollDiceBtn.addEventListener('click', function () {
    diceEle.classList.remove('hidden');

    const randNum = Math.ceil(Math.random() * 5);
    // console.log(randNum);

    // Setting right image of dice according to number
    diceEle.src = `./images/dice-${randNum}.png`;

    currScore += randNum;
    if (randNum !== 1) {
        curScore0.textContent = currScore;
    } else {
    }
});
