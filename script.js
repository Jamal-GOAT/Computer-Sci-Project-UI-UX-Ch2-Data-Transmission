// fade in effect
const els = document.querySelectorAll('.home-section2 .wrapper div, .dp-section1 .cards .card');

function isInScreen() {
    els.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.85) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', isInScreen);

isInScreen();
//break
//click card
const cards = document.querySelectorAll('.dp-section2 .cards .card');

function isClicked(el) {
    el.currentTarget.classList.toggle('clicked');
}

cards.forEach(card => {
    card.addEventListener('click', isClicked);
})
//break
//switch
const switchBox = document.querySelector('.serial-vs-parallel .card'); 
const buttons = document.querySelectorAll('.serial-vs-parallel .card .switch div');

buttons[0].addEventListener("click", () => {
    switchBox.className = 'card serial'
})

buttons[1].addEventListener("click", () => {
    switchBox.className = 'card parallel'
})
