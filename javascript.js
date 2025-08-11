var maxScore = 0;
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

let playerWins = 0;
let computerWins = 0;

function playGame() {

    let humanChoice;
    let computerChoice;

    while(maxScore < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Player - " + playerWins + "    Computer - " + computerWins);
        maxScore = Math.max(playerWins, computerWins);
    }

    if(computerWins == 5) {
        console.log("Computer wins!");
    } else {
        console.log("Human wins!");
    }

}


function playRound(humanChoice, computerChoice) {
    if(humanChoice == computerChoice) {
        return;
    }

    if(humanChoice == SCISSORS && computerChoice == PAPER ||
        humanChoice == PAPER && computerChoice == ROCK ||
        humanChoice == ROCK && computerChoice == SCISSORS) {
        playerWins++;
        return;
    }
    else{
        computerWins++;
    }
}

function getHumanChoice() {
    var choice;
    choice = prompt("Enter your choice as \"Rock\", \"Paper\", or \"Scissors\": ");

    while(!choiceValid()){
        console.log("Sorry, that was not a valid input.\n");
        choice = prompt("Enter your choice as \"Rock\", \"Paper\", or \"Scissors\": ");

    }
    
    if (choice == "Rock") {
        choice = ROCK;
    }
    if (choice == "Paper") {
        choice = PAPER;
    }
    if (choice == "Scissors") {
        choice = SCISSORS;
    }

    return choice;

    function choiceValid() {
        if(choice == "Rock" || choice == "Paper" || choice == "Scissors") {
            return true;
        }
        return false;
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

playGame();