const API_KEY = '7478db3c82c0337b8b5db0bc36c18b7c'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(city) {
    const API_KEY = '7478db3c82c0337b8b5db0bc36c18b7c'; 
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
    
    try {
        const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        console.log('API Request URL:', url); 
        
        const response = await fetch(url);
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error response from API:', errorData);
            throw new Error(errorData.message || 'City not found');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert(error.message);
        return null;
    }
}