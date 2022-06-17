const winResult = "You win!";
const loseResult = "You lose!";
const drawResult = "It's a draw!";

// Determines the computer's choice
function computerPlay() {
    const computerPlayOptions = [
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
        return drawResult
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        computerScore++;
        return loseResult
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        playerScore++;
        return winResult

        // player choose paper
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        playerScore++;
        return winResult
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        return drawResult
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        computerScore++;
        return loseResult

        // player chooses scissors
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        computerScore++;
        return loseResult
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        playerScore++;
        return winResult
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        return drawResult
    } else {
        return "Please choose from either Rock, Paper, or Scissors"
    }

}

// let playerPlay = prompt("Rock, Paper, or Scissors?").toLowerCase();
// const playerSelection = playerPlay;

let playerScore = 0;
let computerScore = 0;

function game() {

    for (let i = 0; i < 5; i++) {
        // const computerSelection = computerPlay(); // This allows the computer to make a different choice for each round. 
        console.log(`Round ${i + 1}`);
        // console.log(playRound(playerSelection, computerSelection));
        console.log(playRound(playerSelection, computerPlay()));
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

// game(); // Starts the game
const roundResult = document.querySelector("#roundResult")

const playerRock = document.querySelector('#rockBtn');
playerRock.addEventListener('click', () => {
    // console.log(playRound("rock", computerPlay()))

    roundResult.textContent = (playRound("rock", computerPlay()))
})

const playerPaper = document.querySelector('#paperBtn');
playerPaper.addEventListener('click', () => {
    // console.log(playRound("paper", computerPlay()))
    roundResult.textContent = (playRound("paper", computerPlay()))
})

const playerScissors = document.querySelector('#scissorsBtn');
playerScissors.addEventListener('click', () => {
    // console.log(playRound("scissors", computerPlay()))
    roundResult.textContent = (playRound("scissors", computerPlay()))
})