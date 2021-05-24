game();

function game() {
    let cpuScore = 0,
        playerScore = 0,
        winner = "",
        cpuChoice = "",
        playerChoice = "";
    
    displayWelcomeMessage();
    while (playerScore < 5 && cpuScore < 5) {
        displayScore(cpuScore, playerScore);
        cpuChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        displayChoices(cpuChoice, playerChoice);
        winner = checkWinner(cpuChoice, playerChoice);
        if (winner === "tie") console.log("It's a tie! Try again.");
        else if (winner === "cpu") {
            console.log(`CPU wins! ${cpuChoice} beats ${playerChoice}`);
            ++cpuScore;
        }
        else {
            console.log(`You win! ${playerChoice} beats ${cpuChoice}`);
            ++playerScore;
        }
    }
    displayWinner(cpuScore, playerScore);
}

function displayWelcomeMessage() {
    console.log("Welcome to Rock Paper Scissors!\nYou will play against a computer.\nThe first to reach a score of 5 wins. Good luck!");
}

function displayScore(cpuScore, playerScore) {
    console.log(`CPU Score: ${cpuScore}`);
    console.log(`Your Score: ${playerScore}`);
}

function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
}

function getPlayerChoice() {
    let choice = prompt("Make your choice: ").toLowerCase();
    choice = validatePlayerChoice(choice);
    return choice;
}

function validatePlayerChoice(c) {
    while (c === undefined || (c !== "rock" && c !== "paper" && c !== "scissors")) {
        console.log("Invalid input. Try again.");
        c = prompt("Make your choice: ").toLowerCase();
    }
    return c;
}

function displayChoices(cpuChoice, playerChoice) {
    console.log(`CPU chose: ${cpuChoice}`);
    console.log(`You chose: ${playerChoice}`);
}

function checkWinner(cpuChoice, playerChoice) {
    if (isTied(cpuChoice, playerChoice)) {
        return "tie";
    }
     else {
        if (cpuChoice === "rock") {
            if (playerChoice === "scissors") {
                return "cpu";
            } 
            else {
                return "player";
            }
        } 
        else if (cpuChoice === "paper") {
            if (playerChoice === "rock") {
                return "cpu";
            } 
            else {
                return "player";
            }
        }
        else {
            if (playerChoice === "paper") {
                return "cpu";
            }
            else {
                return "player";
            }
        }
    }
}

function isTied(cpuChoice, playerChoice) {
    return (cpuChoice === playerChoice);
}

function displayWinner(cpuScore, playerScore) {
    if (cpuScore === 5) console.log("Drats! You lost :(");
    else console.log("Congratulations! You won!");
    console.log("Refresh the page to play again.");
}