let timer;
let timeLeft = 25 * 60; // Default Pomodoro Time (25 mins)
let running = false; // Track if the timer is running

// Get Elements
const timerDisplay = document.getElementById("pomodoro-timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

const modeButtons = document.querySelectorAll(".mode");

// Update Timer Display
function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.textContent = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}

// Start / Pause Timer
function toggleTimer() {
    if (running) {
        clearInterval(timer);
        running = false;
        startButton.textContent = "start";
    } else {
        running = true;
        startButton.textContent = "pause";

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                running = false;
                startButton.textContent = "start"; 
            }
        }, 1000);
    }
}

// Reset Timer (Fix: Reset to selected mode time)
function resetTimer() {
    clearInterval(timer);
    running = false;
    startButton.textContent = "start"; 

    // Get active mode and reset time accordingly
    const activeMode = document.querySelector(".mode.active").id;
    if (activeMode === "pomodoro") timeLeft = 25 * 60;
    if (activeMode === "short-break") timeLeft = 5 * 60;
    if (activeMode === "long-break") timeLeft = 15 * 60;

    updateDisplay();
}

// Mode Switching (Fix: Ensure reset works with mode changes)
modeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        modeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        resetTimer(); // Reset time based on mode
    });
});

// Event Listeners
startButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);



// Initialize Display
updateDisplay();