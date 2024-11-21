// Hämta element från DOM
const menuButton = document.querySelector('.headerButtonMobile');
const slideMenu = document.querySelector('.slide-menu-mobile');
const closeButton = document.querySelector('.close-menu');

// Öppna menyn när hamburgermenyn klickas
menuButton.addEventListener('click', () => {
  slideMenu.classList.add('open');
});

// Stäng menyn när stäng-knappen klickas
closeButton.addEventListener('click', () => {
  slideMenu.classList.remove('open');
});

document.addEventListener('click', (event) => {
  if (!slideMenu.contains(event.target) && !menuButton.contains(event.target)) {
    slideMenu.classList.remove('open');
  }
});