document.addEventListener('DOMContentLoaded', function () {
  alert('We reached the last entry of my Harmonic Collection! Great work this semester and here are my winter break plans :)');
});

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
