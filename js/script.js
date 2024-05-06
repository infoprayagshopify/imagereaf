// Header Mobile Menu Code
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const nav = document.getElementById('nav');

    hamburgerMenu.addEventListener('click', function() {
        nav.classList.toggle('show-menu');
    });
});