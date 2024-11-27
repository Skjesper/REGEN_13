document.addEventListener('DOMContentLoaded', () => {
    const informationButton = document.querySelector('.middleNav ul li:nth-child(4)');  // Target the 4th li (Information)
    const dropdownSection = document.querySelector('.information');  // Target the information section

    // Toggle dropdown visibility when the button is clicked
    informationButton.addEventListener('click', (event) => {
        event.stopPropagation();
        dropdownSection.classList.toggle('show');  // Show the dropdown
        dropdownSection.classList.toggle('hide');  // Hide the dropdown when clicking again
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!dropdownSection.contains(event.target) && !informationButton.contains(event.target)) {
            dropdownSection.classList.remove('show');
            dropdownSection.classList.add('hide');
        }
    });

    // Prevent dropdown close when clicking inside the dropdown
    dropdownSection.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
