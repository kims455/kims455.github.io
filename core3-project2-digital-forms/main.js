const text = "Have you thought about what is beneath our feet? Have you thought about what is beneath our feet? Have you thought about what is beneath our feet?";

const typingElement = document.querySelector('.typing');
let index = 0;

function type() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50);
    }
}

type();