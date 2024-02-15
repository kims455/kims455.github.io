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
    setTimeout(removeDots, 70);
  }
}

removeDots();

// paragraph appear when clicked
const peaceDoves = document.querySelectorAll('.paper-dove1, .paper-dove2, .paper-dove3, .paper-dove4,.paper-dove5');

const overlayTexts = document.querySelectorAll('.overlay-text');

let currentIndex = 0;

overlayTexts.forEach(text => {
    text.style.display = 'none';
});

peaceDoves.forEach(dove => {
    dove.addEventListener('click', () => {
        if (currentIndex < overlayTexts.length) {
            overlayTexts[currentIndex].style.display = 'block';
            currentIndex++;
        }
    });
});

// Disappear when the user scrolls
window.addEventListener('scroll', function() {
  var jumbotron = document.querySelector('.jumbotron');
  var overlay = document.querySelector('.overlay');

  var jumbotronTop = jumbotron.getBoundingClientRect().top;

  if (jumbotronTop >= 0 && jumbotronTop < window.innerHeight) {
      overlay.style.display = 'none';
  } else {
      overlay.style.display = 'block';
  }
});