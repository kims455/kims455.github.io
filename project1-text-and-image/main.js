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
