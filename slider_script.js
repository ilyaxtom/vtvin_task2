const sliderLine = document.querySelector('.sliderline');
const slides = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const dots = document.querySelectorAll('.slider-dot');

let currentSlide = 0;

function showSlide(index) {
  for (let i = 0; i < 3; i++) {
    slides[i].classList.remove('active-item');
    dots[i].classList.remove('active-dot')
  }
  slides[index].classList.add('active-item')
  dots[index].classList.add('active-dot')
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0)
    currentSlide = 2;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > 2)
    currentSlide = 0;
  showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

for (let i = 0; i < 3; i++)
  dots[i].addEventListener('click', () => showSlide(i));

// // Функция для обработки изменений размеров окна
// function handleResize() {
//     const windowWidth = window.innerWidth;
//     if (windowWidth <= 1200) {
//         showslider();
//     }
// }

// // Добавить обработчик события resize
// window.addEventListener('resize', handleResize);

// handleResize();

// function showslider() {
//     const sliderLine = document.querySelector('.sliderline');
//     const slides = document.querySelectorAll('.slider-item');
//     const prevButton = document.querySelector('.slider-button-prev');
//     const nextButton = document.querySelector('.slider-button-next');
//     const dots = document.querySelectorAll('.slider-dot');

//     // Variables
//     let currentSlide = 0;

//     // Functions
//     function showSlide(index) {
//       for (let i = 0; i < 3; i++)
//         slides[i].style.display = 'none';
//       slides[currentSlide].style.display = 'flex';
//       updateDots(index);
//     }

//     function updateDots(index) {
//       for (let i = 0; i < 3; i++)
//         dots[i].classList.remove('active-dot');
//       dots[currentSlide].classList.add('active-dot');
//     }

//     function prevSlide() {
//       currentSlide--;
//       if (currentSlide < 0)
//         currentSlide = 2;
//       showSlide(currentSlide);
//     }

//     function nextSlide() {
//       currentSlide++;
//       if (currentSlide > 2) 
//         currentSlide = 0;
//       showSlide(currentSlide);
//     }

//     function initSlider() {
//       showSlide(currentSlide);

//       // Event listeners
//       prevButton.addEventListener('click', prevSlide());
//       nextButton.addEventListener('click', nextSlide());

//       dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => showSlide(index));
//       });
//     }
//   }

//     // Initialize the slider
//     initSlider();