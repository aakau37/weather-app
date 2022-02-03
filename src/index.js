let now = new Date();
let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let day = weekdays[now.getDay()];

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = day;

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#current-temp");
  tempElement.innerHTML = `${temp}ºC`;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let showCity = document.querySelector("#city-name");
  showCity.innerHTML = `${city.value}`;
  let apiKey = "541481ee8e5eedb5070ba6391f78db52";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let citySearch = document.querySelector("#city-search-form");
citySearch.addEventListener("submit", search);

function findPosition() {
  navigator.geolocation.getCurrentPosition(showCurrentPosition);
}

function showCurrentPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let city = position.name;
  let showCity = document.querySelector("#city-name");
  showCity.innerHTML = city;
  let apiKey = "541481ee8e5eedb5070ba6391f78db52";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

let myPosition = document.querySelector("#current-position-button");
myPosition.addEventListener("click", findPosition);
