const skillCards = document.querySelectorAll('.skill-card');


skillCards.forEach(skillCard => {
    skillCard.addEventListener('mouseenter', (event) => {
        skillCard.classList.add('hover-effect');
    });
    skillCard.addEventListener('mouseleave', (event) => {
        skillCard.classList.remove('hover-effect');
    })
})