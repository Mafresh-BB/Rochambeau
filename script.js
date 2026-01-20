console.log("Rochambeau script loaded.");
// Additional game logic will be implemented here.

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

//console.log(getComputerChoice());

const getHumanChoice = () => {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!choices.includes(choice)) {
        choice = prompt("Enter valid choice:").toLowerCase()
    }
    return choice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    let result = "";
    if (humanChoice === choices[0] && computerChoice === choices[1]) {
        computerScore += 1;
        result = "You lose! Paper beats Rock";
    } else if (humanChoice === choices[1] && computerChoice === choices[0]) {
        humanScore += 1;
        result = "You won! Paper beats Rock";
    } else if (humanChoice === choices[0] && computerChoice === choices[2]) {
        result = "You won! Rock beats Scissors";
        humanScore += 1;
    } else if (humanChoice === choices[2] && computerChoice === choices[0]) {
        result = "You lose! Rock beats Scissors";
        computerScore += 1;
    } else if (humanChoice === choices[1] && computerChoice === choices[2]) {
        result = "You lose! Scissors beats Paper";
        computerScore += 1;
    } else if (humanChoice === choices[2] && computerChoice === choices[1]) {
        result = "You won! Scissors beats Paper";
        humanScore += 1;
    } else {
        result = "Tie!";
    }
    console.log(result);
    return result;
};



function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    
    const message = `Final score: You: ${humanScore}, Computer: ${computerScore}`;
    console.log(message);
    return message;
};

playGame();
