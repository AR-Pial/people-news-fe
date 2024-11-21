document.addEventListener('DOMContentLoaded', function() {
    const dropdownMenuDistrict = document.querySelector('.dropdown-menu-full-district');  
    const dropdownMenuMore = document.querySelector('.dropdown-menu-full-more');  
    const topbar = document.querySelector('.topbar');  // Get the navbar element
    const navbar = document.querySelector('.navbar');  // Get the navbar element

    // Check if dropdownMenuDistrict exists
    if (!dropdownMenuDistrict || !navbar) {
        console.error('Dropdown menu or Navbar not found!');
        return;
    }

    // Get the height of the navbar
    const navbarHeight = navbar.offsetHeight;
    const topbarHeight = topbar.offsetHeight;
    const combinedHeight = navbarHeight + topbarHeight - 15;
    after_scroll_height = navbarHeight - 15;

    // Set the initial top value for the dropdown menu
    dropdownMenuDistrict.style.top = `${combinedHeight}px`;  

    // Listen for scroll events to adjust the dropdown menu position
    window.addEventListener('scroll', function() {
        // Check if the page is scrolled past the navbar
        if (window.scrollY > topbarHeight) {
            // If scrolled past navbar, adjust dropdown's top position
            dropdownMenuDistrict.style.top = `${after_scroll_height}px`; // Adjust top dynamically based on scroll
        } else {
            // If above the navbar, reset the dropdown's top to just below the navbar
            dropdownMenuDistrict.style.top = `${combinedHeight}px`;
        }
    });

    dropdownMenuMore.style.top = `${combinedHeight}px`;  

    // Listen for scroll events to adjust the dropdown menu position
    window.addEventListener('scroll', function() {
        // Check if the page is scrolled past the navbar
        if (window.scrollY > topbarHeight) {
            // If scrolled past navbar, adjust dropdown's top position
            dropdownMenuMore.style.top = `${after_scroll_height}px`; // Adjust top dynamically based on scroll
        } else {
            // If above the navbar, reset the dropdown's top to just below the navbar
            dropdownMenuMore.style.top = `${combinedHeight}px`;
        }
    });
});


