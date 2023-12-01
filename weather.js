//Complete the Weather API Backend part using openweathermap api

// Progression 1: Create a function and fetch data using "fetch" from openweathermap api and display the data as given in reference image.

async function get() {
  try {

    const city = document.getElementById("cityInput").value
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=799c1811d35323e4c526d38276ec0224`);
    const data = await response.json();
    console.log(data);

    const cityDetails = document.getElementById("cityDetails")
    cityDetails.innerText = city + ", " + data.sys.country

    const date = document.getElementById("date")
    const currentDate = new Date().toDateString();
    date.innerText = currentDate

    const temp = document.getElementById("temp")
    let currentTemp = data.main.temp
    temp.innerText = Math.floor(currentTemp - 273) + "°c"

    const wheather = document.getElementById("wheather")
    wheather.innerText = data.weather[0].main

    const minMax = document.getElementById("minMax")
    let min = Math.floor(data.main.temp_min - 273)
    let max =  Math.ceil(data.main.temp_max - 273)
    minMax.innerText = min+"°c / "+max+"°c"

  } catch (err) {
    console.log(err);
  }
}