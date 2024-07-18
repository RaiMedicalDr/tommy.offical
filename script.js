// script.js

document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.introduction img');
    const header = document.querySelector('.header');

    // Function to add active class for fade-in effect
    function fadeIn() {
        if (profileImg.getBoundingClientRect().top < window.innerHeight / 1.3) {
            profileImg.classList.add('active');
            window.removeEventListener('scroll', fadeIn);
        }
    }

    window.addEventListener('scroll', fadeIn);

    // Function to toggle header background on scroll
    function toggleHeaderBackground() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', toggleHeaderBackground);

    // Smooth scroll functionality
    const scrollLinks = document.querySelectorAll('.header nav ul li a');

    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});


