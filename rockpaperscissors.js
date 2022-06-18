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
const roundResult = document.querySelector('#roundResult');
const totalScore = document.querySelector('#gameScore');
const winnerText = document.querySelector('#winnerDeclaration');

// Reset button function that will appear after the game ends
const resetOption = document.querySelector('#resetOption');
const resetBtn = document.createElement('button');
resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("rockBtn").disabled = false;
    document.getElementById("paperBtn").disabled = false;
    document.getElementById("scissorsBtn").disabled = false;
    roundResult.textContent = "";
    totalScore.textContent = "";
    winnerText.textContent = "";
    resetOption.removeChild(resetBtn);
})

gameScore.setAttribute('style', 'white-space: pre;'); // CSS style to allow a new line

// rock button
const playerRock = document.querySelector('#rockBtn');
playerRock.addEventListener('click', () => {
    // console.log(playRound("rock", computerPlay()))
    roundResult.textContent = (playRound("rock", computerPlay()));
    totalScore.textContent = (`Player's score: ${playerScore} \r\n`);
    totalScore.textContent += (`Computer 's score: ${computerScore}`);
    scoreCheck();
})

// paper button
const playerPaper = document.querySelector('#paperBtn');
playerPaper.addEventListener('click', () => {
    // console.log(playRound("paper", computerPlay()))
    roundResult.textContent = (playRound("paper", computerPlay()));
    totalScore.textContent = (`Player's score: ${playerScore} \r\n`);
    totalScore.textContent += (`Computer 's score: ${computerScore}`);
    scoreCheck();
})

// scissors button
const playerScissors = document.querySelector('#scissorsBtn');
playerScissors.addEventListener('click', () => {
    // console.log(playRound("scissors", computerPlay()))
    roundResult.textContent = (playRound("scissors", computerPlay()));
    totalScore.textContent = (`Player's score: ${playerScore} \r\n`);
    totalScore.textContent += (`Computer 's score: ${computerScore}`);
    scoreCheck();
})

// checks the total score
function scoreCheck() {
    if (playerScore === 5) {
        winnerText.textContent = "You win!";
        document.getElementById("rockBtn").disabled = true;
        document.getElementById("paperBtn").disabled = true;
        document.getElementById("scissorsBtn").disabled = true;
        resetBtn.classList.add("resetBtn");
        resetBtn.textContent = "Reset Game";
        resetOption.appendChild(resetBtn);
    } else if (computerScore === 5) {
        winnerText.textContent = "You lose";
        document.getElementById("rockBtn").disabled = true;
        document.getElementById("paperBtn").disabled = true;
        document.getElementById("scissorsBtn").disabled = true;
        resetBtn.classList.add("resetBtn");
        resetBtn.textContent = "Reset Game";
        resetOption.appendChild(resetBtn);
    }
}