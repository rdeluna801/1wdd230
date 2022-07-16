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

function results(weatherData) {}
