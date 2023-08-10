const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', function(){
    location.href = `bin/game.html?round=${this.id}`;
}));