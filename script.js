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
result.textContent = "Hello. Let's Play!";
result.style.whiteSpace = 'pre-line';

const buttonReset = document.createElement('button');
buttonReset.textContent = 'PLAY AGAIN';

body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissor);
body.appendChild(result);

buttonRock.addEventListener('click', () => {playRound('rock', getComputerChoice())});
buttonPaper.addEventListener('click', () => {playRound('paper', getComputerChoice())});
buttonScissor.addEventListener('click', () => {playRound('scissor', getComputerChoice())});
buttonReset.addEventListener('click', resetGame);

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
        result.textContent = `You win! ${choice} beats ${computerChoice} \nTotal -> Player: ${humanScore} Computer: ${computerScore}`;
    } else if (choice === computerChoice) {
        result.textContent =`You both chose ${choice}! It's a tie. \nTotal -> Player: ${humanScore} Computer: ${computerScore}`;
    } else {
        ++computerScore;
        result.textContent = `You lose! ${choice} loses to ${computerChoice} \nTotal -> Player: ${humanScore} Computer: ${computerScore}`;
    }

    if (humanScore === 5 ) {
        result.textContent = `CONGRATULATIONS! You won. \nPlayer: ${humanScore} Computer: ${computerScore}`;
        body.appendChild(buttonReset);

    } else if (computerScore ===5) {
        result.textContent = `GAME OVER! You lost. \nPlayer: ${humanScore} Computer: ${computerScore}`;
        body.appendChild(buttonReset);
        
    }
}

function resetGame() {
    result.textContent = "Hello. Let's Play!";
    humanScore = 0;
    computerScore = 0;
    buttonReset.parentNode.removeChild(buttonReset);
}