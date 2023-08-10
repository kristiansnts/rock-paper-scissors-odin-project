function fetchHtml() {
    fetch('game.html')
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.body.innerHTML = html;
      document.body.style.backgroundColor = "white";    
    });
  }

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', () => {
    fetchHtml();
}));