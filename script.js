
const cityName = document.querySelector('#weatherInput');
const searchBtn = document.querySelector('#searchBtn');
const form = document.getElementById('weatherForm');
const myCity = document.getElementById('city');
const image = document.getElementById('weatherImage');
const weather = document.getElementById('weatherMain');
const temp = document.querySelector('.temp');
const dates = document.querySelector('.todayDates');
const times = document.getElementById('todayTime');
let date = new Date();


form.addEventListener('submit', function (e) {

  
    e.preventDefault();

    
    let city = cityName.value;
    const myWeatherContainer = document.querySelector('.weatherContainer');
    const apiID = `931f131dde3f4ae2fcbc3289fc646471`;
    // API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiID}`

   
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {

        const tempValue = Math.round(data['main']['temp']);
        const weatherMain = data['weather'][0]['main'];
        weather.innerHTML = weatherMain;

        
        myCity.innerHTML = city;
        temp.innerHTML = `${tempValue}`
        weather.innerHTML = `${weatherMain}`
        temp.innerHTML = `${tempValue}<span><sup>o</sup>C</span.`;

       
        if (weatherMain == 'Clear') {
            image.src = `./Images/sunny.png`
            myWeatherContainer.style.backgroundColor = '#ec6e4c'
        }
        if (weatherMain == 'Clouds') {
            image.src = `./Images/clouds.png`
            myWeatherContainer.style.backgroundColor = '#86d3d3'
        }
        if (weatherMain == 'Rain') {
            image.src = `./Images/Rain.png`
            myWeatherContainer.style.backgroundColor = '#494bcf'
        }
        if (weatherMain == 'Drizzle') {
            image.src = `./Images/Drizzle.png`
            myWeatherContainer.style.backgroundColor = '#8ecfcf'
        }
        if (weatherMain == 'Haze') {
            image.src = `./Images/Drizzle.png`
            myWeatherContainer.style.backgroundColor = '#d8ced2'
        }
    })
})
