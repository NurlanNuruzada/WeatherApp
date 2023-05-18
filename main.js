const apiKey = "59815d79931e474393c103846231805"
fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`)
.then (x=>x.json())
.then (x=>renderWeather(x),);

const weatherContainer = document.querySelector('.weather-container')
const Search = document.querySelector('#searchArea')
Search.addEventListener('keyup', (e)=>{
    let value = e.target.value.trim()
    console.log(value)
})
    
function renderWeather(weather){
    console.log(weather)
    //sellectElemets
    const country = weather.location.country;
    const city = weather.location.name;
    const tempC = weather.current.temp_c;
    const windKhp = weather.current.wind_kph;
    const humidity = weather.current.humidity;
    const feelsLike = weather.current.feelslike_c;
    const uv = weather.current.uv;
    const time = weather.location.localtime
    const icon = weather.current.condition.icon
    //sellectElemets End

    // createStart
    const countrySpan = document.createElement('span');
    countrySpan.innerText= `country: ${country}`;

    const citySpan = document.createElement('span');
    citySpan.innerText= `city: ${city}`;

    const tempCSpan = document.createElement('span');
    tempCSpan.innerText= `temprature Celcius: ${tempC} °C`;

    const windKhpSpan = document.createElement('span');
    windKhpSpan.innerText= `wind Speed Khp :${windKhp} khp`;

    const Humidity = document.createElement('span');
    Humidity.innerText= `humidity : ${humidity}%`;

    const FeelsLike = document.createElement('span');
    FeelsLike.innerText= `feelsLike : ${feelsLike}°C`;

    const Uv = document.createElement('span');
    FeelsLike.innerText= `Uv : ${uv}°C`;

    const Icon = document.createElement('img');
    Icon.src = icon
    
    const Time = document.createElement('span');
    Time.innerText= `time : ${time.slice(10)}`;
    //createEnd

    //append elemnts 
    weatherContainer.appendChild(countrySpan)
    weatherContainer.appendChild(citySpan)
    weatherContainer.appendChild(tempCSpan)
    weatherContainer.appendChild(windKhpSpan)
    weatherContainer.appendChild(Time)
    weatherContainer.appendChild(Humidity)
    weatherContainer.appendChild(FeelsLike)
    weatherContainer.appendChild(Icon)
    //append elemnts end
}