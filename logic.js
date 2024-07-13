const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

let currentIndex = 0;
const totalImages = images.length;
const slideWidth = images[0].clientWidth;

function showSlide(index) {
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showSlide(currentIndex);
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

// Optional: auto-slide functionality
setInterval(showNextSlide, 3000); 

const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');
const deals = document.querySelector('.deals');
const deal = document.querySelector('.deal');




