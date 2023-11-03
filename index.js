function getComputerChoice(){
    const strings = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
}

function game(playerSelection){
    result = '';

    const computerChoice = getComputerChoice();

    if (playerSelection === 'rock'){
        if (computerChoice === 'rock'){
            result = 'The game is tie';
        }else if (computerChoice === 'paper'){
            result = 'You lose the game';
        }else if (computerChoice === 'scissors'){
            result = 'You win the game';
        }
    } else if (playerSelection === 'paper'){
        if (computerChoice === 'rock'){
            result = 'You win the game';
        }else if (computerChoice === 'paper'){
            result = 'The game is tie';
        }else if (computerChoice === 'scissors'){
            result = 'You lose the game';
        } 
    } else if (playerSelection === 'scissors'){
        if (computerChoice === 'rock'){
            result = 'You lose the game';
        }else if (computerChoice === 'paper'){
            result = 'You win the game';
        }else if (computerChoice === 'scissors'){
            result = 'The game is tie';
        } 
    }

    document.getElementById('result').textContent = result;
}
