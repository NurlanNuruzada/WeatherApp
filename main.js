//sellected
const apiKey = "1b092b9711bb4028b48101316231805"
let SearchCity = "agsu"
const weatherContainer = document.querySelector('.weather-container')
const Search = document.querySelector('#searchArea')
const searchBtn = document.querySelector('#SeachButton')
const main = document.querySelector(".main")
const gridItems = document.querySelector(".grid__container")
const cities = document.querySelectorAll(".city")
cities.forEach((city)=>{
    city.addEventListener('click',(e)=>{
        SearchCity = e.target.innerHTML;
        getWeather(SearchCity)
    })
})
//sellected end

// backgroundImg start
backGroundImg = document.createElement('div')
backGroundImg.className = "background__img"
backGroundImg.style.backgroundImage = 'url("./Assets/img/morning_cloud.jpg")';
main.appendChild(backGroundImg)
//backgroundImg End

function getWeather(SearchCity) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${SearchCity}&aqi=no`)
        .then(x => x.json())
        .then(x => renderWeather(x)).catch(() => { rederNotFound() });
}

Search.addEventListener('keyup', (e) => {
    SearchCity = e.target.value.trim()
})


searchBtn.addEventListener("click", () => {
    console.log(SearchCity)
    getWeather(SearchCity)
})

function rederNotFound() {
    const rederNotFound = document.createElement('span')
    rederNotFound.innerHTML = 'city not found!'
    weatherContainer.appendChild(rederNotFound)
}

function renderWeather(weather) {
    console.log(weather)

    if (weatherContainer.childElementCount = 5) {
        weatherContainer.innerHTML = ''
    }
    if (weatherContainer.childElementCount = 5) {
        gridItems.innerHTML = ''
    }
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
    const condition = weather.current.condition.text

    //sellectElemets End

    // createStart
    const countrySpan = document.createElement('span');
    countrySpan.innerText = ` ${country}`;

    const citySpan = document.createElement('span');
    citySpan.innerText = ` ${city}`;
    citySpan.className = "city"


    const tempCSpan = document.createElement('span');
    tempCSpan.innerText = `${tempC}°`;
    tempCSpan.className = "item1"

    const windKhpSpan = document.createElement('span');
    windKhpSpan.innerText = `wind   ${windKhp} khp`;

    const Humidity = document.createElement('span');
    Humidity.innerText = `${time.slice(10)} - humidity - ${humidity}%`;
    Humidity.className = "timeAndHum"

    const FeelsLike = document.createElement('span');
    FeelsLike.innerText = `feels like  ${feelsLike}°C`;

    const Uv = document.createElement('span');
    Uv.innerText = `Uv   ${uv}`;

    const Icon = document.createElement('img');
    Icon.src = icon
    Icon.className = "Icon"

    const Time = document.createElement('span');
    Time.innerText = `time   ${time.slice(10)}`;
    Time.id = "time"
    Time.className = "timeAndHum"

    const Condition = document.createElement("span")
    Condition.innerText = condition
    Condition.className = "condition"
    //createEnd

    //append elemnts 
    weatherContainer.appendChild(countrySpan)
    weatherContainer.appendChild(windKhpSpan)
    weatherContainer.appendChild(Time)
    weatherContainer.appendChild(FeelsLike)
    weatherContainer.appendChild(Uv)
    gridItems.appendChild(citySpan)
    gridItems.appendChild(Icon)
    gridItems.appendChild(Humidity)
    gridItems.appendChild(tempCSpan)
    gridItems.appendChild(Condition)
    //append elemnts end
}


getWeather(SearchCity)