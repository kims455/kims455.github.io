// audio and photo
document.addEventListener('DOMContentLoaded', function() {
    const photo = document.getElementById('paper-photo');
    const audio = document.getElementById('audio');

    photo.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});

// // Mouse tracer
// const tracer = document.getElementById("tracer");
// const dots = [];

// document.addEventListener("mousemove", function(event) {
//   const dot = document.createElement("div");
//   dot.className = "dot";
//   dot.style.left = event.clientX + "px";
//   dot.style.top = event.clientY + "px";

//   tracer.appendChild(dot);
//   dots.push(dot);


//   if (dots.length > 50) {
//     tracer.removeChild(dots.shift());
//   }
// });


// function removeDots() {
//   if (dots.length > 0) {
//     tracer.removeChild(dots.shift());
//     setTimeout(removeDots, 90);
//   }
// }

// removeDots();