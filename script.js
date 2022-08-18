const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    // console.log(userChoice);
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Draw!";
    }
    if (computerChoice === 'Rock' && computerChoice === 'Paper') {
        result = "You Win!";
    }
    if (computerChoice === 'Rock' && computerChoice === 'Scissors') {
        result = "You Lost!";
    }
    if (computerChoice === 'Paper' && computerChoice === 'Rock') {
        result = "You Lost!";
    }
    if (computerChoice === 'Paper' && computerChoice === 'Scissors') {
        result = "You Win!";
    }
    if (computerChoice === 'Scissors' && computerChoice === 'Rock') {
        result = "You Win!";
    }
    if (computerChoice === 'Scissors' && computerChoice === 'Paper') {
        result = "You Lost!";
    }

    resultDisplay.innerHTML = result;
}