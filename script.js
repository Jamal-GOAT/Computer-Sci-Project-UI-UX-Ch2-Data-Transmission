// fade in effect
const els = document.querySelectorAll('.home-section2 .wrapper div');

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