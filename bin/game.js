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
    const compImg = document.querySelector('.comp-img');
    compImg.setAttribute("src", `../img/${computer}.png`);
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

function showResult(result, text){
    if(result == 'DRAW'){
        text.innerHTML = `
            <h1 class="title">It's Draw <img src="../img/draw-icon.png"></h1>
            <p class="score">Score: ${pointPlayer} </p>
        `
    } else if (result == 'LOSE') {
        text.innerHTML = `
            <h1 class="title">You Lose <img src="../img/lose-icon.png"></h1>
            <p class="score">Score: ${pointPlayer} </p>
        `
    } else {
        text.innerHTML = `
            <h1 class="title">You Win <img src="../img/win-icon.png"></h1>
            <p class="score">Score: ${pointPlayer} </p>
        `
    }
}

function resultUI(result, pointPlayer, pointComp){
    const text = document.querySelector('.text');
    console.log(pointComp)
    showResult(result, text);
    if(pointComp == 5){
        text.innerHTML = `
        <h1 class="title">Computer Win <img src="../img/lose-icon.png"></h1>
        <a href="" class="btn play-again">Play Again</a>
    `
    } else if(pointPlayer == 5) {
        text.innerHTML = `
        <h1 class="title">You Win <img src="../img/win-icon.png"></h1>
        <a href="" class="btn play-again">Play Again</a>
    `
    }
}

let pointComp = 0;
let pointPlayer = 0;
function game(playerChoice) {
    let n = getRound();
    for(let i = 1; i <= n; i++) {
        if(i <= n){
            result = playRound(playerChoice);
            if(result == 'WIN'){
                pointPlayer += 1;
            } else if (result == 'LOSE'){
                pointComp += 1;
            } else {
                pointComp += 0;
                pointPlayer += 0;
            }
            resultUI(result, pointPlayer, pointComp);
        } else{
            alert('balik')
        }
    }
}

window.addEventListener('click', function(e){
    if(e.target.classList.contains('play-again')){
        location.href = `bin/game.html`;
    }
})