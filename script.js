// Timer variables
let startTime;
let intervalId;
let running = false;

// Function to update the timer display
function updateTimerDisplay() {
  const currentTime = Date.now() - startTime;
  const minutes = Math.floor(currentTime / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  const milliseconds = currentTime % 1000;

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  document.getElementById('timerDisplay').textContent = formattedTime;
}

// Function to start or stop the timer based on the current state
function toggleTimer() {
  if (running) {
    clearInterval(intervalId);
    running = false;
  } else {
    startTime = Date.now() - (runningTime || 0); // Continue from where we left off
    intervalId = setInterval(updateTimerDisplay, 10);
    running = true;
  }
}

// Event listener for the "keydown" event on the document
document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    toggleTimer();
  }
});

// Event listener for the "Reset" button
document.getElementById('resetBtn').addEventListener('click', () => {
  clearInterval(intervalId);
  document.getElementById('timerDisplay').textContent = '00:00.000';
  running = false;
});

// Event listener for the "Save" button
document.getElementById('saveBtn').addEventListener('click', () => {
  if (running) {
    alert('Stop the timer before saving.');
  } else {
    const savedTime = document.getElementById('timerDisplay').textContent;
    // You can store the savedTime value or implement further logic to handle saved times.
    console.log(`Saved time: ${savedTime}`);
  }
});
