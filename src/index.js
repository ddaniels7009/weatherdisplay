
import {fromUnixTime} from 'date-fns';

const testModule = (function () {

    // Create
    
    let content = document.getElementById('content');
    content.classList.add('content');

    let inputContainer = document.createElement('div');
    inputContainer.classList.add('inputContainer')
    content.appendChild(inputContainer);

    let outerContainer = document.createElement('div');
    outerContainer.classList.add('outer')

    let innercontainer1 = document.createElement('div');
    innercontainer1.classList.add('inner');
    let innercontainer2 = document.createElement('div');
    innercontainer2.classList.add('inner');
    let innercontainer3 = document.createElement('div');
    innercontainer3.classList.add('inner');
    let innercontainer4 = document.createElement('div');
    innercontainer4.classList.add('inner');
    let innercontainer5 = document.createElement('div');
    innercontainer5.classList.add('inner');
    let innercontainer6 = document.createElement('div');
    innercontainer6.classList.add('inner');
    let innercontainer7 = document.createElement('div');
    innercontainer7.classList.add('inner');
    let innercontainer8 = document.createElement('div');
    innercontainer8.classList.add('inner');

    content.appendChild(outerContainer);
    outerContainer.appendChild(innercontainer1);
    outerContainer.appendChild(innercontainer2);
    outerContainer.appendChild(innercontainer3);
    outerContainer.appendChild(innercontainer4);
    outerContainer.appendChild(innercontainer5);
    outerContainer.appendChild(innercontainer6);
    outerContainer.appendChild(innercontainer7);
    outerContainer.appendChild(innercontainer8);

    // Select all inner content boxes
    let innerContent = document.querySelectorAll('.inner');

    // Create input form
    const label1 = document.createElement('label');
    inputContainer.appendChild(label1);
    label1.setAttribute("for", "searchEntry"); //* update id
    label1.innerHTML = "Enter City"

    const searchForm = document.createElement('form')
    inputContainer.appendChild(searchForm);

    const searchEntry = document.createElement('input')
    searchForm.appendChild(searchEntry);
    searchEntry.setAttribute("type", "text");
    searchEntry.setAttribute("id", "searchEntry");
    searchEntry.setAttribute("name", "searchEntry");
    searchEntry.setAttribute("value", "");
    searchEntry.setAttribute('required', 'Required');
    //End

    const searchButton = document.createElement('input')
    searchButton.setAttribute("type", "submit");
    searchButton.setAttribute("value", "Submit");
    console.log(searchEntry.value);
    searchForm.appendChild(searchButton);

    searchForm.addEventListener('submit', function () { label1.innerText = searchEntry.value; getWeather(getCity()); ; event.preventDefault(); });

    //getWeather('london');

    // Get the city from the user using a form element
    function getCity() {
        let location = searchEntry.value;
        searchEntry.value = "";
        return location;
    }


    async function getWeather(city) {

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0579ded93b6e576a535d03e42582732&units=imperial`, { mode: 'cors' });
            const weatherData = await response.json();

            gatherInfo(weatherData);

        }
        catch (err) {
            console.log(err);
        }


    }


    //Function to collect all relevant info from the data and puts it in an object
    function gatherInfo(data) {

        let currentTemp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset;

        // Current Weather Values
        currentTemp = data.main.temp;
        pressure = data.main.pressure;
        humidity = data.main.humidity;
        description = data.weather[0].description;
        feelsLike = data.main.feels_like;
        windSpeed = data.wind.speed;
        sunrise = data.sys.sunrise;
        sunset = data.sys.sunset;

        // create weather object
        currentWeatherData(currentTemp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset);

    }


    function currentWeatherData(temp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset) {

        const dailyWeather = currentWeather(temp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset);

        setAllValues(dailyWeather.getTemp(), dailyWeather.getPressure(), dailyWeather.getHumidity(), dailyWeather.getDescription(),
            dailyWeather.getFeel(), dailyWeather.getWind(), dailyWeather.getSunrise(), dailyWeather.getSunset());


    }


    const currentWeather = (temp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset) => {

        const getTemp = () => temp;
        const getPressure = () => pressure;
        const getHumidity = () => humidity;
        const getDescription = () => description;
        const getFeel = () => feelsLike;
        const getWind = () => windSpeed;
        const getSunrise = () => sunrise;
        const getSunset = () => sunset;

        return { getTemp, getPressure, getHumidity, getDescription, getFeel, getWind, getSunrise, getSunset }
    }

    function setAllValues(temp, pressure, humidity, description, feelsLike, windSpeed, sunrise, sunset) {
        
        const sunriseTime = fromUnixTime(sunrise)
        const sunsetTime = fromUnixTime(sunset);

        innerContent[0].innerText = "Pressure: \n" + pressure + " hPa";
        innerContent[1].innerText = "Humidity: \n" + humidity + "%";
        innerContent[2].innerText = "Conditions: \n" + description;
        innerContent[3].innerText = "Temp: \n" + temp + ' \u00B0';
        innerContent[4].innerText = "Feels Like: \n" + feelsLike + ' \u00B0';
        innerContent[5].innerText = "Wind Speed: \n" + windSpeed + " mph";
        innerContent[6].innerText = "Sunrise: \n" + sunriseTime.getHours() + ":" + sunriseTime.getMinutes() + " MST";
        innerContent[7].innerText = "Sunset: \n" + (sunsetTime.getHours()  )+ ":" + sunsetTime.getMinutes() + " MST";
        

    }


   

})();


