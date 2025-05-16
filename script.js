let humanScore = 0;
let computerScore = 0;

const body = document.querySelector('body');

const buttonRock = document.createElement('button');
buttonRock.textContent = 'Rock';

const buttonPaper = document.createElement('button');
buttonPaper.textContent = 'Paper';

const buttonScissor = document.createElement('button');
buttonScissor.textContent = 'Scissor';

const result = document.createElement('div');
result.textContent = 'Hello.';

body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissor);
body.appendChild(result);

buttonRock.addEventListener('click', () => {playRound('rock', getComputerChoice())});
buttonPaper.addEventListener('click', () => {playRound('paper', getComputerChoice())});
buttonScissor.addEventListener('click', () => {playRound('scissor', getComputerChoice())});

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

function playRound(humanChoice, computerChoice) {
    choice = humanChoice.toLowerCase();
    if (choice === "rock" && computerChoice === "scissor" || 
        choice === "paper" && computerChoice === "rock" || 
        choice === "scissor" && computerChoice === "paper") {
        ++humanScore;
        result.textContent = `You win! ${choice} beats ${computerChoice} Total -> Player: ${humanScore} Computer: ${computerScore}`;
    } else if (choice === computerChoice) {
        result.textContent =`You both chose ${choice}! It's a tie. Total -> Player: ${humanScore} Computer: ${computerScore}`;
    } else {
        ++computerScore;
        result.textContent = `You lose! ${choice} loses to ${computerChoice} Total -> Player: ${humanScore} Computer: ${computerScore}`;
    }
}


/* function playGame(humanChoice, computerChoice) {
    
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Player score: ${humanScore} Computer Score: ${computerScore}`);

    if (humanScore > computerScore) {
        return "Congratulations! You won against the computer";
    } else if (computerScore > humanScore) {
        return "Try again! You lost against the computer";
    } else {
        return "Try again! You tied against the computer";
    }

} */

