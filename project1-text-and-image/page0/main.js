// Mouse tracer
const tracer = document.getElementById("tracer");
const dots = [];

document.addEventListener("mousemove", function(event) {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = event.clientX + "px";
  dot.style.top = event.clientY + "px";

  tracer.appendChild(dot);
  dots.push(dot);


  if (dots.length > 50) {
    tracer.removeChild(dots.shift());
  }
});


function removeDots() {
  if (dots.length > 0) {
    tracer.removeChild(dots.shift());
    setTimeout(removeDots, 90);
  }
}

removeDots();


/*
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

*/