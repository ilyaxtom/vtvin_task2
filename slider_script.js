// Функция для обработки изменений размеров окна
function handleResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1200) {
        showslider();
    }
}

// Добавить обработчик события resize
window.addEventListener('resize', handleResize);

handleResize();

function showslider() {
    const sliderLine = document.querySelector('.sliderline');
    const slides = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.slider-button-prev');
    const nextButton = document.querySelector('.slider-button-next');
    const dots = document.querySelectorAll('.slider-dot');

    // Variables
    let currentSlide = 0;

    // Functions
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none';
      });
      updateDots(index);
    }

    function updateDots(index) {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === index);
      });
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    function initSlider() {
      showSlide(currentSlide);

      // Event listeners
      prevButton.addEventListener('click', prevSlide);
      nextButton.addEventListener('click', nextSlide);

      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
      });

      // Automatic slide transition
      setInterval(nextSlide, 5000); // Adjust the time interval (in milliseconds) as needed
    }

    // Initialize the slider
    initSlider();
}