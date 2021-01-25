const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');

const SLIDES_COUNT = slides.length;

let current_slide = 0;

// Event Listener Left
left.addEventListener('click', () => {
  
  current_slide++;
  if (current_slide > SLIDES_COUNT - 1) {
    current_slide = 0;
  }
  console.log(current_slide);
});

// Event Listener Right
right.addEventListener('click', () => {
  current_slide--;
  if (current_slide < 0) {
    current_slide = SLIDES_COUNT - 1;
  }
  console.log(current_slide);
});