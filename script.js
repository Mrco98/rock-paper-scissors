function getComputerChoice() {
    let decision = Math.floor(Math.random() * 3 + 1);
    switch (decision) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissor";
    }
}

function getHumanChoice() {
    let input = prompt("Choose to play either rock, paper, or scissor:");
    return input;
}