// Navigation buttons functionality
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselItems = document.querySelectorAll('.carousel-item');
const modelBtns = document.querySelectorAll('.model-btn');
const materialBtns = document.querySelectorAll('.material-btn');
let currentIndex = 0;

// Function to show the selected model and update material buttons
function showSlide(index) {
  carouselItems.forEach((item, i) => {
    item.style.transform = `translateX(-${index * 100}%)`;
  });

  // Update active class for model buttons
  modelBtns.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });

  // Set the first material to be active by default for the selected model
  const activeMaterialBtn = carouselItems[index].querySelector('.material-btn');
  materialBtns.forEach((btn) => btn.classList.remove('active'));
  activeMaterialBtn.classList.add('active');
}

// Switch to previous model
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

// Switch to next model
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// Switch between sofa models
modelBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const index = parseInt(e.target.getAttribute('data-index'));
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Change material functionality
materialBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const image = e.target.closest('.carousel-item').querySelector('.carousel-image');
    const newMaterial = e.target.getAttribute('data-material');
    
    // Change the image source to the selected material
    image.src = newMaterial;

    // Remove active class from all buttons and add it to the clicked button
    const buttons = e.target.closest('.material-buttons').querySelectorAll('.material-btn');
    buttons.forEach(button => button.classList.remove('active'));
    e.target.classList.add('active');
  });
});

// Initialize the first slide
showSlide(currentIndex);
