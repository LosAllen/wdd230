async function fetchWeather() {
    const apiKey = '12cf8f00f34ed0154299502a63b90b97';
    const cityId = '3530103';
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const weather = `
            <div>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
                <p>${data.main.temp}°C</p>
                <p>${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
            </div>
        `;
        document.getElementById('current-weather').innerHTML = weather;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('current-weather').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
    }
}

fetchWeather();
