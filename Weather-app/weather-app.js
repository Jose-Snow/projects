
//DOM ELEMENTS
const date = document.getElementById('date-data');
const city = document.getElementById('city-data');
const tempImg = document.getElementById('weather-img');
const temp = document.getElementById('temperature');
const description = document.getElementById('description');
const tempHigh = document.getElementById('high-temp');
const tempLow = document.getElementById('low-temp');

//DATES FORMATTING
const months =["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

let dateObj = new Date();
let month= months[dateObj.getMonth()];
let day = dateObj.getDate();
let year = dateObj.getFullYear();


date.innerHTML = `${month} ${day}, ${year}`;
const app = document.getElementById('app-container');

//function displayWeatherData(data){}
const getWeather= async ()=> {
  try{
    document.getElementById('errorText').innerHTML = '';
    const oldError = document.getElementById('error-message');
    if(oldError){
      oldError.remove()
    }

    const cityName= document.getElementById('input-search').value;

    const weatherDataFetch = await fetch (`http://localhost:3001/api/weather?city=${cityName}`,{
      headers: {
        Accept:'application/json'
      }});

    const weatherData = await weatherDataFetch.json();
    console.log(weatherData);
    
  
    city.innerHTML=`${weatherData.name}`;

    description.innerHTML = `${weatherData.weather[0].description}`;

    tempImg.innerHTML = `<img src = https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png>` ;

    temperature.innerHTML = `${weatherData.main.temp}°C` ;
    tempHigh.innerHTML=`${weatherData.main.temp_max}°C`;
    tempLow.innerHTML=`${weatherData.main.temp_min}°C`

    
      localStorage.setItem('getWeather', JSON.stringify(weatherData));
  }

  catch(error){
    console.log(error);

    city.innerHTML = '';
    description.innerHTML = '';
    tempImg.innerHTML = '';
    temperature.innerHTML = '';
    tempHigh.innerHTML = '';
    tempLow.innerHTML = '';

    console.log('error fetching weather data');
    document.getElementById('errorText').innerHTML = `Error fetching weather data. Please try again or check your spelling.`;


  }

}

//Load data on page load
window.addEventListener('DOMContentLoaded', ()=>{
  
  const storage = JSON.parse(localStorage.getItem('getWeather'));
  if(storage){
    document.getElementById('city-data').innerHTML = `${storage.name}`;
    document.getElementById('weather-img').innerHTML = `<img src='https://openweathermap.org/img/wn/${storage.weather[0].icon}@2x.png'>`;
    document.getElementById('description').innerHTML = `${storage.weather[0].description}`;
    document.getElementById('temperature').innerHTML = `${storage.main.temp}°C`;
    document.getElementById('high-temp').innerHTML = `${storage.main.temp_max}°C`;
    document.getElementById('low-temp').innerHTML = `${storage.main.temp_min}°C`

  }
})
