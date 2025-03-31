    // Set the countdown date (example: December 31, 2023)
    const countdownDate = new Date("2026-01-01T08:00:00").getTime();

    // Update the countdown every second
    const interval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft >= 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML elements
    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
} else {
    // If the countdown is over, display "Event Started"
    clearInterval(interval);
    document.querySelector(".countdown-timer").innerHTML = `
          <h1 class="text-success">Event Started!</h1>
        `;
}
}, 1000);
