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
    setTimeout(removeDots, 65);
  }
}

removeDots();


// Overlay container sentences appear every 2 sec
const overlayTexts = document.querySelectorAll('.overlay-text');

let currentIndex = 0;

function showNextText() {
    if (currentIndex < overlayTexts.length) {
        overlayTexts[currentIndex].style.opacity = '1'; // Set opacity to 1 to reveal the text
        currentIndex++;
    }
}

setInterval(showNextText, 2000);

// Disappear when the user scrolls
window.addEventListener('scroll', function() {
  var introContainer = document.querySelector('.intro-container');
  var overlayContainer = document.querySelector('.overlay-container');

  var introContainerTop = introContainer.getBoundingClientRect().top;

  if (introContainerTop >= 0 && introContainerTop < window.innerHeight) {
      overlayContainer.style.display = 'none';
  } else {
      overlayContainer.style.display = 'block';
  }
});

// video
document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.getElementById("video-container");

  videoContainer.addEventListener("mouseleave", function () {
      document.body.style.cursor = "url('assets/peace-dove1-pixel.png'), auto";
  });

  videoContainer.addEventListener("mouseenter", function () {
      document.body.style.cursor = "default";
  });
});

