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

function checkWinner(cpuChoice, playerChoice) {
    if (isTied(cpuChoice, playerChoice)) {
        console.log("Tie Game! Next round...");
        return "tie";
    }
     else {
        if (cpuChoice === "rock") {
            if (playerChoice === "scissors") {
                console.log(`CPU wins! ${cpuChoice} beats ${playerChoice}`);
                return "cpu";
            } 
            else {
                console.log(`You win! ${playerChoice} beats ${cpuChoice}`);
                return "player";
            }
        } 
        else if (cpuChoice === "paper") {
            if (playerChoice === "rock") {
                console.log(`CPU wins! ${cpuChoice} beats ${playerChoice}`);
                return "cpu";
            } 
            else {
                console.log(`You win! ${playerChoice} beats ${cpuChoice}`);
                return "player";
            }
        }
        else {
            if (playerChoice === "paper") {
                console.log(`CPU wins! ${cpuChoice} beats ${playerChoice}`);
                return "cpu";
            }
            else {
                console.log(`You win! ${playerChoice} beats ${cpuChoice}`);
                return "player";
            }
        }
    }
}

function isTied(cpuChoice, playerChoice) {
    return (cpuChoice === playerChoice);
}


