"use strict";

console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

let secretNumber = Math.ceil(Math.random() * 20);

let score = 20;

let highScore = 0;

// to set value in score
// document.querySelector(".score").textContent = 23;

// to set value in the input box
// document.querySelector(".guess").value = 23;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

// Event Listner
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    document.querySelector(".score").textContent = guess;

    if (!guess) {
        // document.querySelector(".message").textContent = "Wrong Input!";
        displayMessage("Wrong Input!");
    } else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "Correct Number!";
        displayMessage("Correct Number!");
        document.querySelector(".number").textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        highScore = Math.max(highScore, score);
        document.querySelector(".highscore").textContent = highScore;
    } else if (guess !== secretNumber) {
        // document.querySelector(".message").textContent =
        //     guess < secretNumber ? "Too Low!" : "Too High";
        displayMessage(guess < secretNumber ? "Too Low!" : "Too High");
        score--;
        if (score > 0) document.querySelector(".score").textContent = score;
        else {
            document.querySelector(".message").textContent =
                "You have lost the game";
            document.querySelector(".score").textContent = 0;
        }
    }

    // else if (guess < secretNumber) {
    //     document.querySelector(".message").textContent = "Too Low!";
    //     score--;
    //     if (score > 0) document.querySelector(".score").textContent = score;
    //     else {
    //         document.querySelector(".message").textContent =
    //             "You have lost the game";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // } else if (guess > secretNumber) {
    //     document.querySelector(".message").textContent = "Too High!";
    //     score--;
    //     if (score > 0) document.querySelector(".score").textContent = score;
    //     else {
    //         document.querySelector(".message").textContent =
    //             "You have lost the game";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.ceil(Math.random() * 20);
    document.querySelector("body").style.backgroundColor = "#2e054d";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    // document.querySelector(".message").textContent = "Start Guessing";
    displayMessage("Start Guessing");
});
