function getRound(){
    const url_string = window.location.href;
    const url = new URL(url_string);
    const round = url.searchParams.get("round");
    return round;
}

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
    let n = getRound();
    for(let i = 1; i <= n; i++) {
        result = playRound();
        confirm(`${result}`)
        if(result == 'WIN') {
            point += 1
        }
    }
    confirm(`You WIN ${point} times`);
}