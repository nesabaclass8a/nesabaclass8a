const counter = document.querySelector('.counter');
const countElement = document.getElementById('count');

let animationStarted = false;

function startAnimationOnScroll() {
    if (isElementInViewport(counter) && !animationStarted) {
        countUp();
        animationStarted = true;
    }
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', startAnimationOnScroll);

function countUp() {
    let count = 0;
    const interval = setInterval(function() {
        countElement.innerText = count;
        count++;
        if (count > 33) {
            clearInterval(interval);
        }
    }, 90); // Ubah nilai ini untuk mengatur kecepatan animasi
}
