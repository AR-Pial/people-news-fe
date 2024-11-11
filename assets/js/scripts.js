
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('navbarToggle');
    const menuIcon = document.getElementById('nav-menu-icon');
    const closeIcon = document.getElementById('nav-close-icon');

    toggleButton.addEventListener('click', function() {
        console.log("ok clocked")
        menuIcon.classList.toggle('d-none'); 
        closeIcon.classList.toggle('d-none'); 
    });
});