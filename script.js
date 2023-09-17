let find = document.getElementById('searchbar');
let search = document.getElementById('icon');
let city_name = document.getElementById('city_name')
const apikey = "d4bc99cc6ab5f2c5c7e886e55d58bea1";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let temp = document.getElementById('temp');
let windspeed = document.getElementById('windspeed');
let humidity = document.getElementById('humidity');
let img = document.getElementById('img');

async function checkweather() {
    const response = await fetch(apiurl + find.value + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
    if (response.status == 404) {
        alert("Invalid City Name");
    }
    city_name.innerText = data.name.charAt(0).toUpperCase() + find.value.slice(1);
    temp.innerText = Math.round(data.main.temp) + "°C";
    humidity.innerText = data.main.humidity + "%";
    windspeed.innerText = data.wind.speed + " km/h";
    // if (data.main.humidity > 70) {
    //     img.src = "weather2.png";
    // }
    // else {
    //     img.src = "weather1.png";
    // }
}

search.addEventListener("click", searching_function);
function searching_function() {
    if (find.value == "") {
        alert("Please enter a valid area")
    }
    else {
        checkweather();
    }
}