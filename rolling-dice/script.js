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
const newgameBtn = document.querySelector('.btn--new');

score0Ele.textContent = 0;
score1Ele.textContent = 0;

diceEle.classList.add('hidden');

let currScore, currPlayer, playerScore, gameState, winner;

function init() {
    currScore = 0;
    currPlayer = 0;
    playerScore = [0, 0];
    gameState = true;
    winner = 0;

    score0Ele.textContent = 0;
    score1Ele.textContent = 0;
    curScore0.textContent = 0;
    curScore1.textContent = 0;

    document
        .querySelector(`.player--${currPlayer}`)
        .classList.remove('player--winner');

    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

init();

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

newgameBtn.addEventListener('click', init);
