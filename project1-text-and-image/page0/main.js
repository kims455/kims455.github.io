let currentIndex = 0;
const sentences = document.querySelectorAll('.overlay-text');

// Show the next sentence
function showNextSentence() {
    if (currentIndex < sentences.length) {
        sentences[currentIndex].style.opacity = 1;
        currentIndex++;
    }
}

// Reset sentences to their initial state
function resetSentences() {
    currentIndex = 0;
    sentences.forEach(sentence => {
        sentence.style.opacity = 0;
    });
}

// Click event handler for the photo
document.querySelector('.paper-dove1').addEventListener('click', function() {
    showNextSentence();
});

// Click event handler for the photo
document.querySelector('.paper-dove2').addEventListener('click', function() {
    showNextSentence();
});
