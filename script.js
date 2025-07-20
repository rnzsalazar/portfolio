const skillCards = document.querySelectorAll('.skill-card');
const carousel = document.getElementById('carouselImage');
const photoButtons = document.querySelectorAll(".carousel-button");
let current = 0;
const images = [
    'images/photography1.webp',
    'images/photography2.webp',
    'images/photography3.webp'
];

skillCards.forEach(skillCard => {
    skillCard.addEventListener('mouseenter', (event) => {
        skillCard.classList.add('hover-effect');
    });
    skillCard.addEventListener('mouseleave', (event) => {
        skillCard.classList.remove('hover-effect');
    })
})

photoButtons[0].addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    carousel.src = images[current];
});

photoButtons[1].addEventListener("click", () => {
    current = (current + 1) % images.length;
    carousel.src = images[current];
});