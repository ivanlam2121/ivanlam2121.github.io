const images = [
   "img/DSC02441.JPG",
   "img/DSC02455.JPG",
   "img/DSC02465.JPG",
   "img/DSC02466.JPG",
   "img/DSC02468.JPG"
];

let currentIndex = 0;

function showSlide(index) {
   const imgElement = document.querySelector('.slideshow-img');
   if (index >= images.length) currentIndex = 0;
   else if (index < 0) currentIndex = images.length - 1;
   else currentIndex = index;
   imgElement.src = images[currentIndex];
}

function changeSlide(n) {
   showSlide(currentIndex + n);
}

// Auto-advance every 3 seconds
const intervalId = setInterval(() => {
   changeSlide(1);
}, 3000);