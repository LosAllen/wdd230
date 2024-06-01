const temperatureInput = document.getElementById('temperature');
const windSpeedInput = document.getElementById('windspeed');

function calculateWindChill() {
  const temperature = parseFloat(temperatureInput.value);
  const windSpeed = parseFloat(windSpeedInput.value);

  if (isNaN(temperature) || isNaN(windSpeed) || temperature > 50 || windSpeed <= 3) {
    document.getElementById('windchill').textContent = 'N/A';
  } else {
    const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    document.getElementById('windchill').textContent = `Wind Chill: ${windChill.toFixed(2)}°F`;
  }
}

temperatureInput.addEventListener('input', calculateWindChill);
windSpeedInput.addEventListener('input', calculateWindChill);