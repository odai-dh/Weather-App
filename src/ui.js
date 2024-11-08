export function displayWeather(weatherData) {
    const weatherDisplay = document.getElementById('weather-display');
    if (!weatherData) {
        weatherDisplay.innerHTML = '<p>Weather data not available.</p>';
        return;
    }

    const { name, main, weather, wind } = weatherData;
    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherDisplay.innerHTML = `
        <h2>${name}</h2>
        <img src="${iconUrl}" alt="${weather[0].description}" />
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp} °C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
    `;
}