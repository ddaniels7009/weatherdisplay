const testModule = (function () {



    let city = getCity();

    // Get the city from the user using a form element
    function getCity() {
        let location = "fort collins";
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
    function gatherInfo(weather) {

        console.log("the temperature in fort collins is: " + weather.main.temp + " degrees");
        console.log(weather.main.temp);

    }


    getWeather(city);

})();


