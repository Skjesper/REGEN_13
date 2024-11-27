document.addEventListener('DOMContentLoaded', () => {
    const productsButton = document.querySelector('.middleNav ul li:nth-child(1)');  // "Produkter" button
    const informationButton = document.querySelector('.middleNav ul li:nth-child(4)');  // "Information" button
    const productsDropdown = document.querySelector('.products');  // Products dropdown
    const informationDropdown = document.querySelector('.information');  // Information dropdown

    // Toggle products dropdown
    productsButton.addEventListener('click', (event) => {
        event.stopPropagation();
        // Close information dropdown if open
        if (informationDropdown.classList.contains('show')) {
            informationDropdown.classList.remove('show');
        }
        // Toggle products dropdown visibility
        productsDropdown.classList.toggle('show');
        productsDropdown.style.zIndex = productsDropdown.classList.contains('show') ? '101' : '100';  // Bring Products to the front
    });

    // Toggle information dropdown
    informationButton.addEventListener('click', (event) => {
        event.stopPropagation();
        // Close products dropdown if open
        if (productsDropdown.classList.contains('show')) {
            productsDropdown.classList.remove('show');
        }
        // Toggle information dropdown visibility
        informationDropdown.classList.toggle('show');
        informationDropdown.style.zIndex = informationDropdown.classList.contains('show') ? '101' : '100';  // Bring Information to the front
    });

    // Close dropdowns if clicked outside
    document.addEventListener('click', (event) => {
        if (!productsDropdown.contains(event.target) && !productsButton.contains(event.target)) {
            productsDropdown.classList.remove('show');
            productsDropdown.style.zIndex = '100';  // Reset zIndex when hidden
        }
        if (!informationDropdown.contains(event.target) && !informationButton.contains(event.target)) {
            informationDropdown.classList.remove('show');
            informationDropdown.style.zIndex = '100';  // Reset zIndex when hidden
        }
    });

    // Prevent dropdown close when clicking inside the dropdown
    productsDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    informationDropdown.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
