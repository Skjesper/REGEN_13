// // JavaScript
// document.addEventListener('DOMContentLoaded', () => {
//   const productsButton = document.querySelector('.middleNav ul li:first-child');
//   const dropdownSection = document.querySelector('.products');

//   // Toggle dropdown visibility when the button is clicked
//   productsButton.addEventListener('click', (event) => {
//     event.stopPropagation(); // Prevent this click from immediately closing the dropdown
//     dropdownSection.classList.toggle('show');
//   });

//   // Close dropdown if clicked outside
//   document.addEventListener('click', (event) => {
//     if (!dropdownSection.contains(event.target)) {
//       dropdownSection.classList.remove('show');
//     }
//   });

//   // Prevent dropdown close when clicking inside the dropdown
//   dropdownSection.addEventListener('click', (event) => {
//     event.stopPropagation();
//   });
// });

