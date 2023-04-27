'use-strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const diceEle = document.querySelector('.dice');

const curScore0 = document.getElementById('current--0');
const curScore1 = document.getElementById('current--1');

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

score0Ele.textContent = 0;
score1Ele.textContent = 0;

diceEle.classList.add('hidden');

let currScore = 0;
let currPlayer = 0;
const playerScore = [0, 0];
let gameState = true;

function setCurrScore() {
    document.getElementById(`current--${currPlayer}`).textContent = currScore;
}

function changePlayer() {
    currScore = 0;
    setCurrScore();
    currPlayer = currPlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

rollDiceBtn.addEventListener('click', function () {
    if (gameState) {
        diceEle.classList.remove('hidden');

        const randNum = Math.ceil(Math.random() * 5);
        // console.log(randNum);

        // Setting right image of dice according to number
        diceEle.src = `./images/dice-${randNum}.png`;

        if (randNum !== 1) {
            currScore += randNum;
            setCurrScore();
        } else {
            changePlayer();
        }
    }
});

holdBtn.addEventListener('click', function () {
    if (gameState) {
        playerScore[currPlayer] += currScore;
        document.getElementById(`score--${currPlayer}`).textContent =
            playerScore[currPlayer];
        if (playerScore[currPlayer] >= 20) {
            gameState = false;
            diceEle.classList.add('hidden');

            document
                .querySelector(`.player--${currPlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${currPlayer}`)
                .classList.remove('player--active');
        } else changePlayer();
    }
});
