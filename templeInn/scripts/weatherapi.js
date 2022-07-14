const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = `http://api.openweathermap.org/data/2.5/forecast?lat=38.9848265&lon=-77.0946459&units=imperial&appid=dc698f3d077ae686717ebdc728067205`;
const description = document.querySelector("#description");

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
  const iconsrc = `http://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  //const desc = weatherData.list.main[0].temp;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
}
