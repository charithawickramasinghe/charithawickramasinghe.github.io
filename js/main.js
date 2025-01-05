
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

//Contact form
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        document.getElementById('form-message').textContent = "Thank you for contacting us, " + name + "!";
        document.getElementById('form-message').classList.remove('hidden');
        document.getElementById('contact-form').reset(); // Reset the form
    } else {
        alert("Please fill out all fields.");
    }
});