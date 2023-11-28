    // Function to hide all instruction texts
    function hideAllInstructions() {
      const allInstructions = document.querySelectorAll('.instruction-text');
      allInstructions.forEach(instruction => {
        instruction.style.display = 'none';
      });
    }

    // Function to show a specific instruction
    function showInstructions(step) {
      hideAllInstructions();

      const selectedInstruction = document.getElementById(step);
      if (selectedInstruction) {
        selectedInstruction.style.display = 'block';
      }
    }

