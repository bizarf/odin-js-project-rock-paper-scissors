function computerPlay() {
    let computerPlayOptions = [
        "Rock",
        "Paper",
        "Scissors"
    ];

    let randomComputerPlay = computerPlayOptions[Math.floor(Math.random() * computerPlayOptions.length)];
    return randomComputerPlay;
}

function playRound(playerSelection, computerSelection) {
    // player chooses rock
    if (playerSelection === "rock" && computerSelection === "Rock") {
        return "It's a draw!"
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        return "You lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        return "You win! Rock beats Scissors"

        // player choose paper
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        return "You win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a draw!"
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper"

        // player chooses scissors
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You lose! Rock beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a draw!"
    } else {
        return "Please choose from either Rock, Paper, or Scissors"
    }

}

let playerPlay = prompt("Rock, Paper, or Scissors?").toLowerCase();
const playerSelection = playerPlay;
//const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

// console.log(playerSelection);
// console.log(computerSelection);
// console.log(playRound(playerSelection, computerSelection));

function game() {

    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        console.log(i);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Player's score " + playerScore);
    console.log("Computer's score " + computerScore);
    if (playerScore > computerScore) {
        console.log("Player wins!") 
    } else if (computerScore > playerScore) {
        console.log("Computer wins!")
    } else if (playerScore === computerScore) {
        console.log("Draw game")
    }
    
}

game();