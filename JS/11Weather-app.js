// GRAB MY API KEY
const API_KEY = "a9a5a7f85b9dbdf2cd59f28fc66a3dc4";

//GRAB ALL ELEMENTS FROM HTML BY ID
const searchInput = document.getElementById("searchInput");
const searchBtn   = document.getElementById("searchBtn");
const loading     = document.getElementById("loading");
const error       = document.getElementById("error");
const result      = document.getElementById("weatherResult");
const weatherIcon = document.getElementById("weatherIcon");
const cityName    = document.getElementById("cityName");
const country     = document.getElementById("country");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike   = document.getElementById("feelsLike");
const humidity    = document.getElementById("humidity");
const wind        = document.getElementById("wind");


// Maps weather condition codes to emoji icons
function getWeatherIcon(code) {
    if (code >= 200 && code < 300) return "⛈️";
    if (code >= 300 && code < 400) return "🌦️";
    if (code >= 500 && code < 600) return "🌧️";
    if (code >= 600 && code < 700) return "❄️";
    if (code >= 700 && code < 800) return "🌫️";
    if (code === 800)              return "☀️";
    if (code > 800)               return "☁️";
    return "🌡️";
}


// Shows only the element you pass in — hides the other two
function showSection(section) {
    loading.style.display = "none";
    error.style.display   = "none";
    result.style.display  = "none";
    section.style.display = "block";
}

// ── Main fetch function ──
async function getWeather() {
    const city = searchInput.value.trim();

    // Do nothing if search box is empty
    if (!city) return;

    // Show loading while fetching
    showSection(loading);

    try {
        // Build the API URL
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        // Fetch data from the API
        const response = await fetch(url);

        // If the city was not found the API returns an error status
        if (!response.ok) {
            showSection(error);
            return;
        }

        // Convert the response to a usable JS object
        const data = await response.json();

        // Pull values out of the data object
        const code = data.weather[0].id;

        // Populate the UI with the retrieved data
        weatherIcon.textContent  = getWeatherIcon(code);
        cityName.textContent     = data.name;
        country.textContent      = data.sys.country;
        temperature.textContent  = `${Math.round(data.main.temp)}°C`;
        description.textContent  = data.weather[0].description;
        feelsLike.textContent    = `${Math.round(data.main.feels_like)}°C`;
        humidity.textContent     = `${data.main.humidity}%`;
        wind.textContent         = `${Math.round(data.wind.speed)} m/s`;

        // Show the result section
        showSection(result);

    } catch (err) {
        // Network failure or any unexpected error
        showSection(error);
    }
}

// Search on button click
searchBtn.addEventListener("click", getWeather);

// Search on Enter key press
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") getWeather();
});
