var maxScore = 0;
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
const PLAYER = 1;
const TIE = 0;
const COMPUTER = -1;

let gameFinished = false;
let playerWins = 0;
let computerWins = 0;
let computerOption = document.getElementById("computerchoice");
let scoreboard = document.getElementById("scoreboard");
let body = document.body;
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.onclick = function(e) {
        if (gameFinished) {
            return;
        }
        playGame(button.id)
    }
})
computerOption.onclick = function (e) {}

 
scoreboard.textContent = "Player 0:0 Computer";

// On a click, this function will activate
function playGame(choice) {
    let playerChoice = getPlayerChoice(choice);
    let computerChoice = getComputerChoice();
    updateComputerText(computerChoice);
    victor = playRound(playerChoice, computerChoice);
    updateScoreboard(victor);
}

function updateScoreboard(victor) {
    if(victor == COMPUTER) {
        computerWins++;
    } else if (victor == PLAYER) {
        playerWins++;
    }
    if (computerWins == 5 || playerWins == 5) {
        finalizeGame();
        return;
    }
    scoreboard.textContent = `Player ${playerWins}:${computerWins} Computer`;

}

function finalizeGame() {
    if (computerWins == 5) {
        scoreboard.textContent = `Computer wins ${computerWins}:${playerWins}`;
    } else if (playerWins == 5){
        scoreboard.textContent = `Player wins ${computerWins}:${playerWins}`;
    }
    gameFinished = true;
}

function updateComputerText(computerChoice) {
    if(computerChoice == ROCK) {
        computerOption.textContent = "🪨";
    } else if (computerChoice == SCISSORS) {
        computerOption.textContent = "✂️";
    } else {
        computerOption.textContent = "🧻";
    }
}

function getPlayerChoice(choice) {
    if(choice == 'rock') {
        return ROCK;
    } else if (choice == 'scissors'){
        return SCISSORS;
    } else {
        return PAPER;
    }
}

function playRound(playerChoice, computerChoice) {
    if(playerChoice == computerChoice) {
        return TIE;
    }

    if(playerChoice == SCISSORS && computerChoice == PAPER ||
        playerChoice == PAPER && computerChoice == ROCK ||
        playerChoice == ROCK && computerChoice == SCISSORS) {
        return PLAYER;
    }
    else{
        return COMPUTER;
    }
}

function getComputerChoice() {
    let compChoice = Math.floor(Math.random()*3);
    switch (compChoice) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        default:
            return SCISSORS;
    }
}
