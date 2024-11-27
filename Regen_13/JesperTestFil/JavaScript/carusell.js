document.addEventListener('DOMContentLoaded', () => {
    let currentSofa = 1;
    let currentMaterial = 1;
    const totalSofas = 3;

    // Navigation Event Listeners
    const navSelectors = document.querySelectorAll('.sofa-selector');
    navSelectors.forEach(selector => {
        selector.addEventListener('click', () => {
            const direction = selector.dataset.direction;
            
            if (direction === 'next') {
                currentSofa = currentSofa % totalSofas + 1;
            } else {
                currentSofa = currentSofa - 1 || totalSofas;
            }

            // Reset to first material when changing sofa
            currentMaterial = 1;

            // Update UI
            updateSofaDisplay();
        });
    });

    // Material Selector Event Listeners
    const materialButtons = document.querySelectorAll('.material-btn');
    materialButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all material buttons
            materialButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update current material and show image
            currentMaterial = button.dataset.material;
            showSofaImage(currentSofa, currentMaterial);
        });
    });

    function updateSofaDisplay() {
        // Update material buttons
        const materialButtons = document.querySelectorAll('.material-btn');
        materialButtons.forEach(btn => btn.classList.remove('active'));
        materialButtons[0].classList.add('active');

        // Hide all sofa images
        const sofaImages = document.querySelectorAll('.sofa-image');
        sofaImages.forEach(img => img.classList.add('hidden'));

        // Show selected sofa's first material
        showSofaImage(currentSofa, 1);
    }

    function showSofaImage(sofaNumber, materialNumber) {
        // Hide all sofa images
        const sofaImages = document.querySelectorAll('.sofa-image');
        sofaImages.forEach(img => img.classList.add('hidden'));

        // Show selected sofa and material
        const selectedImage = document.querySelector(
            `.sofa-image[data-sofa="${sofaNumber}"][data-material="${materialNumber}"]`
        );

        // Add error checking
        if (selectedImage) {
            selectedImage.classList.remove('hidden');
        } else {
            console.error(`No image found for sofa ${sofaNumber}, material ${materialNumber}`);
        }
    }
});