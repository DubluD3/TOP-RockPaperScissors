function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"]
    const randomChoice = computerChoice[Math.floor(Math.random()*computerChoice.length)]
    
    return randomChoice
}

function capitalize(inputText) {
    return inputText.charAt(0).toUpperCase() + inputText.toLowerCase().slice(1)
}

function playRound(playerSelection, computerSelection) {

    const playerSelectionFormat = capitalize(playerSelection)

    if (playerSelectionFormat === 'Scissors' && computerSelection === "Paper") {
        return "You won! Scissors beats Paper!"
    } else if (playerSelectionFormat === 'Paper' && computerSelection === "Rock") {
        return "You won! Paper beats Rock!"
    } else if (playerSelectionFormat === 'Rock' && computerSelection === "Scissors") {
        return "You won! Rock beats Scissors!"
    } else if (playerSelectionFormat === 'Paper' && computerSelection === "Scissors") {
        return "You lose! Scissors beats Paper!"
    } else if (playerSelectionFormat === 'Scissors' && computerSelection === "Rock") {
        return "You lose! Rock beats Scissors!"
    } else {
        return "You lose! Paper beats Rock!"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors ?");
        playRound(playerSelection, getComputerChoice())

        console.log(playRound(playerSelection, getComputerChoice()))
    }
}

game()