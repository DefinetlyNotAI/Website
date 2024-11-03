// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a parallax effect on scroll for the header
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        document.querySelector('header').style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Add dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.top = '10px';
    darkModeToggle.style.right = '10px';
    darkModeToggle.style.padding = '10px';
    darkModeToggle.style.backgroundColor = '#1f1f1f';
    darkModeToggle.style.color = '#ffffff';
    darkModeToggle.style.border = '1px solid #ffffff';
    darkModeToggle.style.cursor = 'pointer';

    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});