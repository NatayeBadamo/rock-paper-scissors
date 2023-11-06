let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const strings = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

function playRound(playerSelection) {
    const computerChoice = getComputerChoice();
    let result = '';

    if (playerSelection === 'rock') {
        if (computerChoice === 'rock') {
            result = 'The game is tie';
        } else if (computerChoice === 'paper') {
            result = 'You lose the game';
            computerScore++;
        } else if (computerChoice === 'scissors') {
            result = 'You win the game';
            playerScore++;
        }

    } else if (playerSelection === 'paper') {
        if (computerChoice === 'rock') {
            result = 'You win the game';
            playerScore++;
        } else if (computerChoice === 'paper') {
            result = 'The game is tie';
        } else if (computerChoice === 'scissors') {
            result = 'You lose the game';
            computerScore++;
        }
    } else if (playerSelection === 'scissors') {
        if (computerChoice === 'rock') {
            result = 'You lose the game';
            computerScore++;
        } else if (computerChoice === 'paper') {
            result = 'You win the game';
            playerScore++;
        } else if (computerChoice === 'scissors') {
            result = 'The game is tie';
        }
    

    }

    document.getElementById('result').textContent = result;

    document.getElementById('playerScore').textContent = `Player Score: ${playerScore}`; 
    document.getElementById('computerScore').textContent = `Computer Score: ${computerScore}`;
    
    function winner() {
        if (playerScore >= 5) {
            document.getElementById('winner').textContent = "You are the winner";
        } else if (computerScore >= 5) {
            document.getElementById('winner').textContent = "The computer wins over you";
        } else {
            document.getElementById('winner').textContent = "Game in progress";
        }
    }

    winner();
    


    
}











    
    





