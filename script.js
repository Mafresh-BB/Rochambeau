console.log("Rochambeau script loaded.");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function normalizeChoice(input) {
  // Returns null if user cancelled, otherwise normalized string
  if (input === null) return null;
  return input.trim().toLowerCase();
}

function getHumanChoice() {
  while (true) {
    const raw = prompt("Enter rock, paper, or scissors (Cancel to quit):");
    const choice = normalizeChoice(raw);

    if (choice === null) return null; // user quit

    if (choices.includes(choice)) return choice;

    alert("Invalid choice. Enter: rock, paper, or scissors.");
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return { outcome: "tie", message: `Tie! You both chose ${humanChoice}.` };
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    return {
      outcome: "win",
      message: `You win! ${humanChoice} beats ${computerChoice}.`,
    };
  }

  return {
    outcome: "lose",
    message: `You lose! ${computerChoice} beats ${humanChoice}.`,
  };
}

function playGame(rounds = 5) {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    const humanChoice = getHumanChoice();
    if (humanChoice === null) {
      console.log("Game ended by user.");
      break;
    }

    const computerChoice = getComputerChoice();
    const { outcome, message } = playRound(humanChoice, computerChoice);

    if (outcome === "win") humanScore++;
    if (outcome === "lose") computerScore++;

    console.log(`Round ${i + 1}: ${message}`);
    console.log(`Score -> You: ${humanScore}, Computer: ${computerScore}`);
  }

  const finalMessage = `Final score: You: ${humanScore}, Computer: ${computerScore}`;
  console.log(finalMessage);
  return finalMessage;
}

playGame();
