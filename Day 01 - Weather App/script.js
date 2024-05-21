const apiKey = "eb10fab36ea15143380118b9c5dbd60c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon = document.getElementById('weather-icon');
const searchBox = document.getElementById('search-box');
const searchButton = document.getElementById('search-btn');

const error = document.getElementById('error');
const weather = document.getElementById('weather');

weather.style.display = "none";
error.style.display = "none";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);
    var data = await response.json();

    if (response.status == "404") {
        error.style.display = "block";
        weather.style.display = "none";
        return;
    }

    document.getElementById('city').innerText = data.name;
    document.getElementById('temp').innerText = Math.round(data.main.temp) + "°C";
    document.getElementById('humidity').innerText = Math.round(data.main.humidity) + "%";
    document.getElementById('speed').innerText = Math.round(data.wind.speed) + " km/h";

    if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png";
    } else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/mist.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "img/snow.png";
    }

    weather.style.display = "block";
    error.style.display = "none";
}

searchButton.addEventListener('click', () => {
    if (searchBox.value == "") {
        alert("Please enter a city name");
        return;
    } else {
        checkWeather(searchBox.value);
    }
});

checkWeather();