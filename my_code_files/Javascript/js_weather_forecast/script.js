document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = "faffcc4f29b5417a9a1963a2ce43fafd"
    const weatherInput = document.getElementById("city-input");
    const weatherButton = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');


    weatherButton.addEventListener("click", async () => {
        const location = weatherInput.value.trim();
        if (!location) return;

        try {
            const weatherData = await getWeatherData(location);
             displayWeatherData(weatherData);
        } catch (error) {
            displayError();
        }
    });

    async function getWeatherData (city) {
        // get the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('City not found');
        } 
        const data = await response.json();
        return data

    };

    function displayWeatherData(weatherData) {
        // dipslay the data
        console.log(weatherData); 
        const { name, main, weather } = weatherData
        cityName.textContent = name
        temperature.textContent = `Temperature : ${main.temp}`;
        description.textContent = `Weather: ${weather[0].description}`;

        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');

    };
    
    function displayError() {
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
}); 

