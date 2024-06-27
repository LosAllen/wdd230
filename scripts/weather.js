document.addEventListener('DOMContentLoaded', (event) => {
    const apiKey = '12cf8f00f34ed0154299502a63b90b97';
    const city = 'Kansas City';
    const stateCode = 'MO';
    const countryCode = 'US';
    const units = 'imperial';
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${stateCode},${countryCode}&units=${units}&appid=${apiKey}`;

    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

            document.getElementById('current-temp').textContent = temp;
            document.getElementById('weather-description').textContent = description;
            document.getElementById('weather-icon').src = iconUrl;
            document.getElementById('weather-icon').alt = description;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
