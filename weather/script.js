const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '43e0ad1477msh94cebdfcc93d1ecp1d5ce1jsn03562b7165c6',
    'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
  }
};


const getWeatherDetails = (location) => {
  const weather = document.getElementById('weather-type')
  const temp = document.getElementById('temp')
  const feelTemp = document.getElementById('feel-temp')
  const wind = document.getElementById('wind')
  
  try {
    Object.keys(location.current).map(info => {
      console.log(info);
      
      weather.innerText = location.current.symbolPhrase
      temp.innerText = location.current.temperature
      feelTemp.innerText = location.current.feelsLikeTemp
      wind.innerText =  location.current.windSpeed
      
    });
  }
  catch (error) {
    console.log(error);
  }
}
const state = 'arizona'




const getWeather = async (city) => {
  try {
    const response1 = await fetch(`https://foreca-weather.p.rapidapi.com/location/search/${city}?lang=en`, options)
    const locationData = await response1.json()
    console.log(locationData.locations[1], 'hi')
    let stateId = locationData.locations[1].id

    const response2 = await fetch(`https://foreca-weather.p.rapidapi.com/current/${stateId}?alt=0&tempunit=F&windunit=MPH&tz=Europe%2FLondon&lang=en`, options)

    const weatherData = await response2.json()

    console.log(weatherData.current)
    // getWeatherDetails(weatherData.current)
  
  getWeatherDetails(weatherData)
  }
  catch (error) {
    console.log(error)
  }
} // .catch(err => console.error(er

// getWeather()


const searchCity = () => {
  let cityname = document.getElementById('city-input')
  let cityDisplay = document.getElementById('city-name')
  console.log(cityname.value)
  getWeather(cityname.value)
  cityDisplay.innerText = cityname.value
}

