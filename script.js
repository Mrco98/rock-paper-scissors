let humanScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    choice = humanChoice.toLowerCase();
    if (choice === "rock" && computerChoice === "scissor" || 
        choice === "paper" && computerChoice === "rock" || 
        choice === "scissor" && computerChoice === "paper") {
        console.log(`You win! ${choice} beats ${computerChoice}`);
        ++humanScore;
    } else if (choice === computerChoice) {
        console.log(`You both chose ${choice}! It's a tie`)
    } else {
        console.log(`You lose! ${choice} loses to ${computerChoice}`)
        ++computerScore;
    }
}


function playGame() {
    
    for (let i=0; i<5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Player score: ${humanScore} Computer Score: ${computerScore}`)
    }

    if (humanScore > computerScore) {
        return "Congratulations! You won against the computer";
    } else if (computerScore > humanScore) {
        return "Try again! You lost against the computer";
    } else {
        return "Try again! You tied against the computer";
    }

}

console.log(playGame());
