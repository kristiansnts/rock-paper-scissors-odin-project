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

const options = document.querySelectorAll('.option');

options.forEach(option => option.addEventListener('click', function(){
    let playerChoice = option.id;
    game(playerChoice);
}));


function playRound(playerChoice) {
    const computer = getComputerChoice();
    const player = playerChoice;
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
function game(playerChoice) {
    let n = getRound();
    for(let i = 1; i <= n; i++) {
        result = playRound(playerChoice);
        confirm(`${result}`)
        if(result == 'WIN') {
            point += 1
        }
    }
    confirm(`You WIN ${point} times`);
}