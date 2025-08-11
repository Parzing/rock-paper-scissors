const numberRounds = 5;
const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;


function playGame() {

    let humanChoice;
    let computerChoice;

    for(let i = 0; i < numberRounds; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

}


function playRound(humanChoice, computerChoice) {

}

function getHumanChoice() {
    var choice;
    choice = prompt("Enter your choice as \"Rock\", \"Paper\", or \"Scissors\": ");
    

    while(choiceNotValid()){
        console.log("Sorry, that was not a valid input.\n");
        prompt("Enter your choice as \"Rock\", \"Paper\", or \"Scissors\": ");

    }


    function choiceNotValid() {
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





