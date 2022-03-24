let container = document.querySelector('.container');
let slides = document.querySelectorAll('.slide');
let index = 0, deg = 0;
setInterval(() => {
    if (index == 4) { index = 0; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    container.style.transform = `rotateY(${deg}deg)`;
    slides[index].classList.add('active');
    index++
    deg += 90
}, 5000);