// Pseudocode

// Input
// Get Computer Choice
// - set array
// - set random number from 1 - 3
// Get Player Choice
// - make prompt
// Game Set

const n = parseInt(prompt('How many times you will play?'));

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random()*3);
    return choice[random];
}

function getPlayerChoice() {
    const player = prompt("write your input: rock/paper/scissors").toLowerCase();
    return player;
}

function playRound() {
    const computer = getComputerChoice();
    const player = getPlayerChoice();

    if(player == computer) {
        return 'DRAW'
    } else if (computer == 'rock' && player == 'paper') {
        return 'WIN'
    } else if (computer == 'paper' && player == 'scissors') {
        return 'WIN'
    } else if (computer == 'scissors' && player == 'rock') {
        return 'WIN'
    } else {
        return 'LOSE'
    }
}

let point = 0;
function game() {
    for(let i = 1; i <= n; i++) {
        result = playRound();
        confirm(`${result}`)
        if(result == 'WIN') {
            point += 1
        }
    }
    confirm(`You WIN ${point} times`);
}

game();