window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Ändra till det antal pixlar som passar din design
      header.classList.add('header-transparent');
    } else {
      header.classList.remove('header-transparent');
    }
  });