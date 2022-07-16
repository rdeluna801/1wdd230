const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = `http://api.openweathermap.org/data/2.5/forecast?lat=38.9848265&lon=-77.0946459&units=imperial&appid=dc698f3d077ae686717ebdc728067205`;

async function apiFetch(apiURL) {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {}
}

apiFetch(url);

function displayResults(weatherData) {
  currentTemp.innerHTML = `The Current Temperature is: <strong>${weatherData.list[0].main.temp.toFixed(
    0
  )}  °F</strong>`;
  description.innerHTML = `Today has ${weatherData.list[0].weather[0].description} `;

  humidity.innerHTML = `Humidity Levels Are ${weatherData.list[0].humidity}`;

  const iconsrc = `http://
  openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
  humidity.textContent = humidity;
}
