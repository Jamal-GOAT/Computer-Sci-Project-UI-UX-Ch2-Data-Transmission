// fade in effect
const els = document.querySelectorAll('.home-section2 .wrapper div, .dp-section1 .cards .card, .duplex .duplex-cards .card');

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

if(buttons.length > 1) {
    buttons[0].addEventListener("click", () => {
        switchBox.className = 'card serial'
    })

    buttons[1].addEventListener("click", () => {
        switchBox.className = 'card parallel'
    })
}


//break
//arq timeout interactive thing
const arqButton = document.querySelector('.arq-button');
const dataPacket = document.querySelector('.arq-network .data-packet');
const ackPacket = document.querySelector('.arq-network .ack-packet');
let timer = document.querySelector('.arq-simulator .arq-timer-container .timer-text');
let timerLabel = document.querySelector('.timer-label')
if (dataPacket && arqButton && ackPacket && timerLabel) {

    arqButton.addEventListener("click", () => {

        timerLabel.innerHTML =
            "<span>Timeout Timer </span><span class='timer-text'>10.00s</span>";

        timer = timerLabel.querySelector(".timer-text");
        let timeLeft = 10;
        dataPacket.classList.remove("animate");
        ackPacket.classList.remove("animate");
        //refreshes to layout calc browser
        void dataPacket.offsetWidth;

        dataPacket.classList.add("animate");

        
        //50 50 chance, add delay for anim
        const randomNumber = Math.random() * 13.8 + 3.1;

        const countdown = setInterval(() => {

            timeLeft -= 0.01;

            if (timeLeft <= 0) {
                clearInterval(countdown);

                timerLabel.innerHTML ="<b style='font-size: 22px;color: var(--error)'>TIMEOUT</b>";
                return;
            }

            timer.textContent = timeLeft.toFixed(2) + "s";
        }, 10);


        setTimeout(() => {
            if (randomNumber < 10) {
                clearInterval(countdown);
                ackPacket.classList.add("animate");
                setTimeout(()=>{
                    timerLabel.innerHTML ="<b style='color: var(--success)'>ACK RECEIVED</b>";
                }, 2000)
            }

        }, randomNumber * 1000);

    });
}
