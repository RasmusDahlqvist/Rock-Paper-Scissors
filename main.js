console.log("toimii");

let playerScore = 0; 
let computerScore = 0; 

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) +1); 
}

function computerPlay() {
   let = randomNumber = getRandomInt(3);  
   switch(randomNumber) {
       case 1: return 'rock'; 
       case 2: return 'paper'; 
       case 3: return 'scissors'
       default: 
        console.log('My apologies something went utterly wrong'); 
        break;
   }
    return 'rock'; 
}

function playRound(playerSelection, computerSelection) {
    const rock = 'rock'; 
    const paper = 'paper'; 
    const scissors = 'scissors'; 
    if(playerSelection.toLowerCase() === rock.toLowerCase() && 
    computerSelection.toLowerCase() === scissors.toLowerCase()) {
        console.log('You won! Rock beats scissors');   
        playerScore++;
       
    } else if(playerSelection.toLowerCase() === paper.toLowerCase() && 
    computerSelection.toLowerCase() === rock.toLowerCase()) {
        console.log('You won! Paper beats rock'); 
        playerScore++;
       
    } else if(playerSelection.toLowerCase() === scissors.toLowerCase() && 
    computerSelection.toLowerCase() === paper.toLowerCase()) {
        console.log('You won! Scissors beats paper'); 
        playerScore++;
        
    } else if(playerSelection.toLowerCase() === rock.toLowerCase() && 
    computerSelection.toLowerCase() === paper.toLowerCase()) {
       console.log('You lose! Paper beats rock'); 
       computerScore++;
      
    } else if(playerSelection.toLowerCase() === paper.toLowerCase() && 
    computerSelection.toLowerCase() === scissors.toLowerCase()) {
        console.log('You lose! Scissors beats paper'); 
        computerScore++;
       
    } else if(playerSelection.toLowerCase() === scissors.toLowerCase() && 
    computerSelection.toLowerCase() === rock.toLowerCase()) {
        console.log('You lose! Rock beats scissors');
        computerScore++;
        
    } else {
       console.log('It is a draw!') 
       
    }
    
}

function game() {
  
    const computerSelection = computerPlay(); 
    let playerSelection = window.prompt('Choose a rock, paper or scissors');

    playRound(playerSelection.toLowerCase(), computerSelection); 
    console.log(`Score  player: ${playerScore} computer: ${computerScore}  `)
    
}

// computerPlay();
function gameLoop() {
    for(let i = 0; i < 5; i++) {
        game(); 
    }
    if(playerScore > computerScore) {
        console.log('Congratulations you won the game!'); 
    } else if (playerScore < computerScore) {
        console.log('You lost the game'); 
    } else {
        console.log('Game ended in a draw'); 
    }
}



gameLoop();
