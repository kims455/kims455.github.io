// Welcome alert!
document.addEventListener('DOMContentLoaded', function () {
  alert('We reached the last entry of my Harmonic Collection! I hope you enjoyed it, and here are my instructions for the best winter break back home ʕ•́ᴥ•̀ʔっ♡');
});

// Changing the color of the background as you click the button
let colors = ["#FFFFFF", "#FFCAD4", "#B0D0D3", "#C08497", "#F7AF9D", "#FAF0CA", "#f0f8ff"];
let body = document.querySelector("body");

function handleButtonClick() {
    calculateDays();
    newColor();
}

function newColor() {
    let randIndex = Math.floor(Math.random() * colors.length);
    let randColor = colors[randIndex];
    body.style.backgroundColor = randColor;
}

// Showing and hiding instructions by clicking each steps 
function hideAllInstructions() {
  const allInstructions = document.querySelectorAll('.instruction-text, .instruction-image');
  allInstructions.forEach(instruction => {
      instruction.style.display = 'none';
  });
}

function showInstructions(step) {
  hideAllInstructions();

  const selectedInstruction = document.getElementById(step);
  const selectedImage = document.getElementById(`Image${step}`);
  if (selectedInstruction) {
      selectedInstruction.style.display = 'block';
  }
  if (selectedImage) {
      selectedImage.style.display = 'block';
  }
}

// Calculating the days and time left until the departing date
function calculateDays() {
  const targetDate = new Date('December 21, 2023 00:00:00 GMT+00:00');
  const currentDate = new Date();
    
  const difference = targetDate - currentDate;
    
  const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((difference % (1000 * 60)) / 1000);
    
  const resultContainer = document.getElementById('countdown-result');
  resultContainer.textContent = `D-Day: ${daysRemaining} days, ${hoursRemaining} hours, ${minutesRemaining} minutes, and ${secondsRemaining} seconds until December 21st.`;
}

// function playVideo() {
//   var video = document.querySelector('.video-container video');
//   video.play();
// }