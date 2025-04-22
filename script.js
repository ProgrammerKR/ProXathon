// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Registration form submission
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const hackathon = document.getElementById('hackathon').value;

    // Simulate registration (replace with actual backend logic)
    alert(`Thank you, ${name}! You have registered for the ${hackathon} hackathon.`);
    this.reset();
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    // Simulate form submission (replace with actual backend logic)
    alert(`Thank you, ${name}! Your message has been sent.`);
    this.reset();
});