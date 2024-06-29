document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '12cf8f00f34ed0154299502a63b90b97';
    const city = 'Kansas City';

    function fetchWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const description = data.weather[0].description;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;

                document.getElementById('weather-description').textContent = `Description: ${description}`;
                document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            })
            .catch(error => {
                console.error('Error fetching the weather data:', error);
            });

        // Fetch forecast data
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
        fetch(forecastUrl)
            .then(response => response.json())
            .then(data => {
                const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
                const forecastContainer = document.getElementById('forecast');
                forecast.forEach(item => {
                    const date = new Date(item.dt_txt).toLocaleDateString();
                    const temp = item.main.temp;
                    const description = item.weather[0].description;
                    forecastContainer.innerHTML += `<p>${date}: ${temp}°C, ${description}</p>`;
                });
            })
            .catch(error => {
                console.error('Error fetching the forecast data:', error);
            });
    }

    fetchWeather();
});
