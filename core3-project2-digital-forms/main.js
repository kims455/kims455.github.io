// Define the text for the typing effect
const text = "Have you thought about what is beneath our feet? Have you thought about what is beneath our feet? Have you thought about what is beneath our feet?";

// Function to simulate typing effect
const typingElement = document.querySelector('.typing');
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50); // Adjust the typing speed (50ms delay between characters)
    }
}

// Start the typing animation
type();