function getComputerChoice() {
    let choice = "";
    let randNum = Math.floor(Math.random() * 3);
    switch (randNum) {
        case 0:
            return choice = "rock";
        case 1:
            return choice = "paper";
        case 2:
            return choice = "scissors"
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
