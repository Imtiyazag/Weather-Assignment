document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('locationInput').value;
    
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('locationName').textContent = data.name;
                document.getElementById('weatherDescription').textContent = data.weather[0].description;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            })
            .catch(() => {
                alert('Error fetching data. Please try again.');
            });
    } else {
        alert('Please enter a valid city.');
    }
});
