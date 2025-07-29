const hobbiesCards = document.querySelectorAll('.hobby-card');
const carousel = document.getElementById('carouselImage');
const photoButtons = document.querySelectorAll(".carousel-button");
let current = 0;
const images = [
    'images/photography1.webp',
    'images/photography2.webp',
    'images/photography3.webp'
];

hobbiesCards.forEach(hobbyCard => {
    hobbyCard.addEventListener('mouseenter', (event) => {
        hobbyCard.classList.add('hover-effect');
    });
    hobbyCard.addEventListener('mouseleave', (event) => {
        hobbyCard.classList.remove('hover-effect');
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