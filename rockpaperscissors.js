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
        return "You lose! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats Scissors"

        // player choose paper
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return "It's a draw!"
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper"

        // player chooses scissors
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return "It's a draw!"
    } else {
        return "Please choose from either Rock, Paper, or Scissors"
    }

}

const playerSelection = "scissors";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection);
console.log(computerSelection);

function game() {
    
}