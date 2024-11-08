import { fetchWeather } from './api';
import { displayWeather } from './ui';
import './style.css';

const errorWindow = document.getElementById('error-window'); // Select the error window

function showError(message) {
    errorWindow.textContent = message; // Set the error message
    errorWindow.classList.add('show'); // Show the error window
    setTimeout(() => {
        errorWindow.classList.remove('show'); // Hide after 3 seconds
    }, 3000);
}

document.getElementById('search-button').addEventListener('click', async () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        console.log(`Searching weather for city: ${city}`);
        const weatherData = await fetchWeather(city);
        
        if (weatherData) {
            console.log('Weather data received:', weatherData);
            displayWeather(weatherData);
        } else {
            console.log('No weather data received.');
        }
    } else {
        showError('Please enter a city name.');
    }
});