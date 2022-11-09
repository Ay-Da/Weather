window.onload = function () {

      // DISPLAY CURRENT WEATHER
      // This .on("click") function will trigger the AJAX Call
      $("#search-button").on("click", function (event) {
            event.preventDefault();
            saveToLocalStorage();
            saveToLocalStorage0();
            saveToLocalStorage1();
            saveToLocalStorage2();
            saveToLocalStorage3();
            saveToLocalStorage4();
            searchHistory();

            // grab text from the search-input box
            var city = $("#search-input").val();

            // construct URL
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";

            // hit the queryURL with $ajax
            //take response data and display it in the city-box within the weather-div
            $.ajax({
                  url: queryURL,
                  method: "GET"

            }).then(function (response) {

                  // Constructing HTML containing the weather information for searched city
                  var cityName = $("<h2>").text(response.name);
                  var cityNameList = $("<li>").text(response.name);
                  cityNameList.addClass("list-group-item");

                  var weatherIcon = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
                  var weatherType = $("<p class='bold'>").text(response.weather[0].main);

                  // kelvin to F
                  var tempInt = parseInt(response.main.temp);
                  var tempF = (tempInt * 9 / 5) - 459.67;
                  var cityTemp = $("<p class='temp'>").text(Math.floor(tempF) + "°");
                  var cityHumidity = $("<p>").text("Humidity: " + response.main.humidity + "%");
                  var cityWindSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + " MPH");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#city-box").empty();
                  $("#city-box").append(cityName, weatherIcon, weatherType, cityTemp, cityHumidity, cityWindSpeed);

                  // prepend the searched city onto city-list
                  $("#list-group").prepend(cityNameList);

                  // UV INDEX
                  var lat = response.coord.lat;
                  var lon = response.coord.lon;

                  // construct URL for UV index
                  var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=000401db107b5cbe165fdf198e9f1e47&lat=" + lat + "&lon=" + lon;

                  $.ajax({
                        url: queryURL2,
                        method: "GET"

                  }).then(function (response2) {

                        var uvIndex = $("<p>").text("UV Index: " + Math.floor(response2.value));
                        $("#city-box").append("<div id='uv-box' class=''></div>");
                        $("#uv-box").append(uvIndex);

                        // UV Index Color Change 
                        if (Math.floor(response2.value) <= 2) {
                              $("#uv-box").addClass("uvFavorable");
                        } if (Math.floor(response2.value) >= 3 && Math.floor(response2.value) <= 8) {
                              $("#uv-box").addClass("uvModerate");
                        } if (Math.floor(response2.value) >= 9) {
                              $("#uv-box").addClass("uvSevere");
                        }

                  });
            });

      });







      // DISPLAY FIVE DAY FORECAST
      $("#search-button").on("click", function (event) {
            event.preventDefault();

            // grab text from the search-input box
            var city = $("#search-input").val();

            // construct URL
            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";

            // hit the queryURL with $ajax
            //take response data and display it in the city-box within the weather-div
            $.ajax({
                  url: queryURL,
                  method: "GET"

            }).then(function (response) {


                  // Constructing HTML containing the five day forecast for searched city
                  // day one
                  var date0 = response.list[0].dt_txt;
                  var slicedate0 = date0.slice(5, 10);

                  var date0 = $("<p>").text(slicedate0);
                  var weatherIcon0 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png");
                  var weatherType0 = $("<p class='bold'>").text(response.list[0].weather[0].main);
                  // kelvin to°
                  var tempHighInt0 = parseInt(response.list[0].main.temp_max);
                  var tempHighF0 = (tempHighInt0 * 9 / 5) - 459.67;
                  var cityHighTemp0 = $("<p class='temp'>").text(Math.floor(tempHighF0) + "°");

                  var humidity0 = $("<p>").text("Humidity: " + response.list[0].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div0").empty();
                  $("#div0").append(date0, weatherIcon0, weatherType0, cityHighTemp0, humidity0);

                  // day two
                  var date1 = response.list[8].dt_txt;
                  var slicedate1 = date1.slice(5, 10);

                  var date1 = $("<p>").text(slicedate1);
                  var weatherIcon1 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png");
                  var weatherType1 = $("<p class='bold'>").text(response.list[8].weather[0].main);
                  // kelvin to°
                  var tempHighInt1 = parseInt(response.list[8].main.temp_max);
                  var tempHighF1 = (tempHighInt1 * 9 / 5) - 459.67;
                  var cityHighTemp1 = $("<p class='temp'>").text(Math.floor(tempHighF1) + "°");

                  var humidity1 = $("<p>").text("Humidity: " + response.list[8].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div1").empty();
                  $("#div1").append(date1, weatherIcon1, weatherType1, cityHighTemp1, humidity1);


                  // day three
                  var date2 = response.list[16].dt_txt;
                  var slicedate2 = date2.slice(5, 10);

                  var date2 = $("<p>").text(slicedate2);
                  var weatherIcon2 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png");
                  var weatherType2 = $("<p class='bold'>").text(response.list[16].weather[0].main);
                  // kelvin to°
                  var tempHighInt2 = parseInt(response.list[16].main.temp_max);
                  var tempHighF2 = (tempHighInt2 * 9 / 5) - 459.67;
                  var cityHighTemp2 = $("<p class='temp'>").text(Math.floor(tempHighF2) + "°");

                  var humidity2 = $("<p>").text("Humidity: " + response.list[16].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div2").empty();
                  $("#div2").append(date2, weatherIcon2, weatherType2, cityHighTemp2, humidity2);

                  // day four
                  var date3 = response.list[24].dt_txt;
                  var slicedate3 = date3.slice(5, 10);

                  var date3 = $("<p>").text(slicedate3);
                  var weatherIcon3 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png");
                  var weatherType3 = $("<p class='bold'>").text(response.list[24].weather[0].main);
                  // kelvin to°
                  var tempHighInt3 = parseInt(response.list[24].main.temp_max);
                  var tempHighF3 = (tempHighInt3 * 9 / 5) - 459.67;
                  var cityHighTemp3 = $("<p class='temp'>").text(Math.floor(tempHighF3) + "°");

                  var humidity3 = $("<p>").text("Humidity: " + response.list[24].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div3").empty();
                  $("#div3").append(date3, weatherIcon3, weatherType3, cityHighTemp3, humidity3);

                  // day five
                  var date4 = response.list[32].dt_txt;
                  var slicedate4 = date4.slice(5, 10);

                  var date4 = $("<p>").text(slicedate4);
                  var weatherIcon4 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png");
                  var weatherType4 = $("<p class='bold'>").text(response.list[32].weather[0].main);
                  // kelvin to°
                  var tempHighInt4 = parseInt(response.list[32].main.temp_max);
                  var tempHighF4 = (tempHighInt4 * 9 / 5) - 459.67;
                  var cityHighTemp4 = $("<p class='temp'>").text(Math.floor(tempHighF4) + "°");

                  var humidity4 = $("<p>").text("Humidity: " + response.list[32].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div4").empty();
                  $("#div4").append(date4, weatherIcon4, weatherType4, cityHighTemp4, humidity4);

            });

      });

}


// LOCAL STORAGE

// save to local storage: city-box (current  weather div)
const storageInput = document.querySelector("#city-box");
const text = document.querySelector("#city-box");
const storedInput = localStorage.getItem('textinput');

if (storageInput) {
      text.innerHTML = storedInput;
}

storageInput.addEventListener('input', letter => {
      text.innerHTML = letter.target.value;
})

const saveToLocalStorage = () => {
      localStorage.setItem('textinput', text.innerHTML);
}

// save to local storage: day 1 five-day-box (5 day forecast)
const storageInput0 = document.querySelector("#div0");
const text0 = document.querySelector("#div0");
const storedInput0 = localStorage.getItem('textinput0');

if (storageInput0) {
      text0.innerHTML = storedInput0;
}

storageInput0.addEventListener('input0', letter0 => {
      text0.innerHTML = letter0.target.value;
})

const saveToLocalStorage0 = () => {
      localStorage.setItem('textinput0', text0.innerHTML);
}

// save to local storage: day 2 five-day-box (5 day forecast)
const storageInput1 = document.querySelector("#div1");
const text1 = document.querySelector("#div1");
const storedInput1 = localStorage.getItem('textinput1');

if (storageInput1) {
      text1.innerHTML = storedInput1;
}

storageInput1.addEventListener('input1', letter1 => {
      text1.innerHTML = letter1.target.value;
})

const saveToLocalStorage1 = () => {
      localStorage.setItem('textinput1', text1.innerHTML);
}

// save to local storage: day 3 five-day-box (5 day forecast)
const storageInput2 = document.querySelector("#div2");
const text2 = document.querySelector("#div2");
const storedInput2 = localStorage.getItem('textinput2');

if (storageInput2) {
      text2.innerHTML = storedInput2;
}

storageInput2.addEventListener('input2', letter2 => {
      text2.innerHTML = letter2.target.value;
})

const saveToLocalStorage2 = () => {
      localStorage.setItem('textinput2', text2.innerHTML);
}

// save to local storage: day 4 five-day-box (5 day forecast)
const storageInput3 = document.querySelector("#div3");
const text3 = document.querySelector("#div3");
const storedInput3 = localStorage.getItem('textinput3');

if (storageInput3) {
      text3.innerHTML = storedInput3;
}

storageInput3.addEventListener('input3', letter3 => {
      text3.innerHTML = letter3.target.value;
})

const saveToLocalStorage3 = () => {
      localStorage.setItem('textinput3', text3.innerHTML);
}

// save to local storage: day 5 five-day-box (5 day forecast)
const storageInput4 = document.querySelector("#div4");
const text4 = document.querySelector("#div4");
const storedInput4 = localStorage.getItem('textinput4');

if (storageInput4) {
      text4.innerHTML = storedInput4;
}

storageInput4.addEventListener('input4', letter4 => {
      text4.innerHTML = letter4.target.value;
})

const saveToLocalStorage4 = () => {
      localStorage.setItem('textinput4', text4.innerHTML);
}


// WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city
function searchHistory() {

      $("#city-list").on('click', 'li', function () {

            console.log($(this).text());
            var city = $(this).text();


            // construct URL
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";

            // hit the queryURL with $ajax
            //take response data and display it in the city-box within the weather-div
            $.ajax({
                  url: queryURL,
                  method: "GET"

            }).then(function (response) {

                  // Constructing HTML containing the weather information for searched city
                  var cityName = $("<h2>").text(response.name);
                  var cityNameList = $("<li>").text(response.name);
                  cityNameList.addClass("list-group-item");

                  var weatherIcon = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
                  var weatherType = $("<p class='bold'>").text(response.weather[0].main);

                  // kelvin to F
                  var tempInt = parseInt(response.main.temp);
                  var tempF = (tempInt * 9 / 5) - 459.67;
                  var cityTemp = $("<p class='temp'>").text("Current Temperature: " + Math.floor(tempF) + "°");
                  var cityHumidity = $("<p>").text("Humidity: " + response.main.humidity + "%");
                  var cityWindSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + " MPH");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#city-box").empty();
                  $("#city-box").append(cityName, weatherIcon, weatherType, cityTemp, cityHumidity, cityWindSpeed);

                  // UV INDEX
                  var lat = response.coord.lat;
                  var lon = response.coord.lon;

                  // construct URL for UV index
                  var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=000401db107b5cbe165fdf198e9f1e47&lat=" + lat + "&lon=" + lon;

                  $.ajax({
                        url: queryURL2,
                        method: "GET"

                  }).then(function (response2) {

                        var uvIndex = $("<p>").text("UV Index: " + Math.floor(response2.value));
                        $("#city-box").append("<div id='uv-box' class=''></div>");
                        $("#uv-box").empty();
                        $("#uv-box").append(uvIndex);

                        // UV Index Color Change 
                        if (Math.floor(response2.value) <= 2) {
                              $("#uv-box").addClass("uvFavorable");
                        } if (Math.floor(response2.value) >= 3 && Math.floor(response2.value) <= 8) {
                              $("#uv-box").addClass("uvModerate");
                        } if (Math.floor(response2.value) >= 9) {
                              $("#uv-box").addClass("uvSevere");
                        }

                  });
            });
      });

      // DISPLAY FIVE DAY FORECAST
      $("#city-list").on('click', 'li', function () {

            console.log($(this).text());
            var city = $(this).text();

            // construct URL
            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";

            // hit the queryURL with $ajax
            //take response data and display it in the city-box within the weather-div
            $.ajax({
                  url: queryURL,
                  method: "GET"

            }).then(function (response) {


                  // Constructing HTML containing the five day forecast for searched city
                  // day one
                  var date0 = response.list[0].dt_txt;
                  var slicedate0 = date0.slice(5, 10);

                  var date0 = $("<p>").text(slicedate0);
                  var weatherIcon0 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png");
                  var weatherType0 = $("<p class='bold'>").text(response.list[0].weather[0].main);
                  // kelvin to°
                  var tempHighInt0 = parseInt(response.list[0].main.temp_max);
                  var tempHighF0 = (tempHighInt0 * 9 / 5) - 459.67;
                  var cityHighTemp0 = $("<p class='temp'>").text(Math.floor(tempHighF0) + "°");

                  var humidity0 = $("<p>").text("Humidity: " + response.list[0].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div0").empty();
                  $("#div0").append(date0, weatherIcon0, weatherType0, cityHighTemp0, humidity0);

                  // day two
                  var date1 = response.list[8].dt_txt;
                  var slicedate1 = date1.slice(5, 10);

                  var date1 = $("<p>").text(slicedate1);
                  var weatherIcon1 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png");
                  var weatherType1 = $("<p class='bold'>").text(response.list[8].weather[0].main);
                  // kelvin to°
                  var tempHighInt1 = parseInt(response.list[8].main.temp_max);
                  var tempHighF1 = (tempHighInt1 * 9 / 5) - 459.67;
                  var cityHighTemp1 = $("<p class='temp'>").text(Math.floor(tempHighF1) + "°");

                  var humidity1 = $("<p>").text("Humidity: " + response.list[8].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div1").empty();
                  $("#div1").append(date1, weatherIcon1, weatherType1, cityHighTemp1, humidity1);


                  // day three
                  var date2 = response.list[16].dt_txt;
                  var slicedate2 = date2.slice(5, 10);

                  var date2 = $("<p>").text(slicedate2);
                  var weatherIcon2 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png");
                  var weatherType2 = $("<p class='bold'>").text(response.list[16].weather[0].main);
                  // kelvin to°
                  var tempHighInt2 = parseInt(response.list[16].main.temp_max);
                  var tempHighF2 = (tempHighInt2 * 9 / 5) - 459.67;
                  var cityHighTemp2 = $("<p class='temp'>").text(Math.floor(tempHighF2) + "°");

                  var humidity2 = $("<p>").text("Humidity: " + response.list[16].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div2").empty();
                  $("#div2").append(date2, weatherIcon2, weatherType2, cityHighTemp2, humidity2);

                  // day four
                  var date3 = response.list[24].dt_txt;
                  var slicedate3 = date3.slice(5, 10);

                  var date3 = $("<p>").text(slicedate3);
                  var weatherIcon3 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png");
                  var weatherType3 = $("<p class='bold'>").text(response.list[24].weather[0].main);
                  // kelvin to°
                  var tempHighInt3 = parseInt(response.list[24].main.temp_max);
                  var tempHighF3 = (tempHighInt3 * 9 / 5) - 459.67;
                  var cityHighTemp3 = $("<p class='temp'>").text(Math.floor(tempHighF3) + "°");

                  var humidity3 = $("<p>").text("Humidity: " + response.list[24].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div3").empty();
                  $("#div3").append(date3, weatherIcon3, weatherType3, cityHighTemp3, humidity3);

                  // day five
                  var date4 = response.list[32].dt_txt;
                  var slicedate4 = date4.slice(5, 10);

                  var date4 = $("<p>").text(slicedate4);
                  var weatherIcon4 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png");
                  var weatherType4 = $("<p class='bold'>").text(response.list[32].weather[0].main);
                  // kelvin to°
                  var tempHighInt4 = parseInt(response.list[32].main.temp_max);
                  var tempHighF4 = (tempHighInt4 * 9 / 5) - 459.67;
                  var cityHighTemp4 = $("<p class='temp'>").text(Math.floor(tempHighF4) + "°");

                  var humidity4 = $("<p>").text("Humidity: " + response.list[32].main.humidity + "%");

                  // Empty the contents of the city-box div, append the current weather of searched city
                  $("#div4").empty();
                  $("#div4").append(date4, weatherIcon4, weatherType4, cityHighTemp4, humidity4);
            });
      });
}