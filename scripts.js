let computerSelection;
let playerSelection = prompt("Rock, paper, or scissors?", "");

function getComputerChoice() {
    let choice = Math.random() * 3;
    if (choice <= 1) {
        choice = "rock";
    } else if (choice <= 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return computerSelection = choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return alert("It's a tie!");
    } else if 
        ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")){
        return alert("You lose, " + computerSelection + " beats " + playerSelection.toLowerCase() + ".")
    } else if
        ((playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ||
        (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") ||
        (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors")){
        return alert("You win, " + playerSelection.toLowerCase() + " beats " + computerSelection + ".")
    } else {
        return alert("Wrong choice!\nChoose between rock, paper, and scissors!")
    }
}

console.log(getComputerChoice());
console.log(playRound(playerSelection, computerSelection));