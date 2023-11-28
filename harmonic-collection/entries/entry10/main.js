    // JavaScript to display homesickness instructions and update the clock
    function displayHomesicknessInstructions() {
      const instructions = [
        "Be ready to hug your family.",
        "Fasten your seatbelt of memories."

      ];

      const randomIndex = Math.floor(Math.random() * instructions.length);
      document.getElementById('instructions').textContent = instructions[randomIndex];
    }

    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateTime, 1000);
    displayHomesicknessInstructions();





