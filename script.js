document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    // Initialize first slide
    slides[0].classList.add('active');

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
                slide.style.transform = 'translateX(0)';
            } else if (index < currentSlide) {
                slide.classList.remove('active');
                slide.style.transform = 'translateX(-100%)';
            } else {
                slide.classList.remove('active');
                slide.style.transform = 'translateX(100%)';
            }
        });

        // Update button states
        prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentSlide === slides.length - 1 ? '0.5' : '1';
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlides();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlides();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentSlide > 0) {
            currentSlide--;
            updateSlides();
        } else if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlides();
        }
    });
}); 