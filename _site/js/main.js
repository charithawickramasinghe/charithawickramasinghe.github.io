
// Get the button element
const gototop = document.getElementById("gototop");

// Add an event listener for scroll events
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) { // Show when scrolled 100px from top
        gototop.classList.add("active");
    } else {
        gototop.classList.remove("active");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentUrl = window.location.pathname; // Get the current path

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active'); // Add the 'active' class
        } else {
            link.classList.remove('active'); // Remove the 'active' class
        }
    });
});