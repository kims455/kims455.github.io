    function hideAllInstructions() {
      const allInstructions = document.querySelectorAll('.instruction-text');
      allInstructions.forEach(instruction => {
        instruction.style.display = 'none';
      });
    }

    function showInstructions(step) {
      hideAllInstructions();

      const selectedInstruction = document.getElementById(step);
      if (selectedInstruction) {
        selectedInstruction.style.display = 'block';
      }
    }

    function calculateDays() {
      const targetDate = new Date('December 21, 2023 00:00:00 GMT+00:00');
      const currentDate = new Date();

      const difference = targetDate - currentDate;

      const daysRemaining = Math.floor(difference / (1000 * 60 * 60 * 24));

      const resultContainer = document.getElementById('countdown-result');
      resultContainer.textContent = `D-Day: ${daysRemaining} days until December 21st.`;
    }

