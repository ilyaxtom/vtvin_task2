let currentSlide = 1;

function showSlide(n) {
    const slidesWrapper = document.querySelector('.slides-wrapper');
    const slides = document.getElementsByClassName('slide');
    
    if (n > slides.length) {
        currentSlide = 1;
    }
    
    if (n < 1) {
        currentSlide = slides.length;
    }
    
    const transformValue = -(currentSlide - 1) * 100 + '%';
    slidesWrapper.style.transform = 'translateX(' + transformValue + ')';
}

function nextSlide() {
    showSlide(currentSlide += 1);
}

function prevSlide() {
    showSlide(currentSlide -= 1);
}

// Показываем первый слайд при загрузке страницы
showSlide(currentSlide);