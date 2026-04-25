// Store the current count, starting at 0
let count = 0;

// Grab the span that displays the number on screen
const value = document.querySelector("#value");

// Grab all three buttons at once
const btns = document.querySelectorAll(".btn");

// Attach a click listener to each button
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        // Get the classes of whichever button was clicked
        const clicked = e.currentTarget.classList;

        // Update count based on which button was clicked
        if (clicked.contains("increase")) count++;
        if (clicked.contains("decrease")) count--;
        if (clicked.contains("reset")) count = 0;

        // Change color based on count value
        if (count > 0) value.style.color = "green";
        if (count < 0) value.style.color = "red";
        if (count === 0) value.style.color = "black";

        // Show the updated count on screen
        value.textContent = count;
    });
});