
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