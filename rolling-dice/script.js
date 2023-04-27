'use-strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
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
let currPlayer = 0;

function currScoreTo0() {
    document.getElementById(`current--${currPlayer}`).textContent = currScore;
}

rollDiceBtn.addEventListener('click', function () {
    diceEle.classList.remove('hidden');

    const randNum = Math.ceil(Math.random() * 5);
    // console.log(randNum);

    // Setting right image of dice according to number
    diceEle.src = `./images/dice-${randNum}.png`;

    if (randNum !== 1) {
        currScore += randNum;
        currScoreTo0();
    } else {
        currScore = 0;
        currScoreTo0();
        currPlayer = currPlayer === 0 ? 1 : 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
});
