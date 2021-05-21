function computerPlay() {
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

