document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    if (!slider) return; // Если нет слайдера на странице, выходим
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth;
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
        currentSlide = slideIndex;
    }


    setInterval(() => {
         currentSlide = (currentSlide + 1) % slides.length
         showSlide(currentSlide);
    }, 3000);
    
});