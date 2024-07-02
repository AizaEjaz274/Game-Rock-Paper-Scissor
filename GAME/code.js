
let userScore = 0;
let compScore = 0;
let clickCount = 0; // Track the number of user clicks

// Access choice
const choices = document.querySelectorAll(".choice");

// Access message
const msg = document.querySelector("#msg");

// Access scores to update
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// For indicating user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        if (clickCount < 20) { // Check if less than 20 clicks
            const userChoice = choice.getAttribute("id");
            console.log("Choice was clicked", userChoice);
            playGame(userChoice);
            clickCount++; // Increment click count
        } else {
            // If 20 or more clicks, the game is over
            showFinalWinner();
        }
    });
});

// Function for generating comp choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// Draw game function
const drawGame = () => {
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "gray";
}

// Function for showing winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

// Function for showing the final winner
const showFinalWinner = () => {
    let finalMessage;
    if (userScore > compScore) {
        finalMessage = "Game Over! You are the overall winner!";
        msg.style.backgroundColor = "green";
    } else if (userScore < compScore) {
        finalMessage = "Game Over! The computer is the overall winner!";
        msg.style.backgroundColor = "red";
    } else {
        finalMessage = "Game Over! It's a tie overall!";
        msg.style.backgroundColor = "gray";
    }
    msg.innerText = finalMessage;
}

// Play game function
const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userChoice == compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}








