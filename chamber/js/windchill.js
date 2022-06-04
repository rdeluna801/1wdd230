doInputOutput();

function doInputOutput() {
    // Get temperature from the text field that has the id
    // of "temperatureInputBox" and store it in a variable named temperature.
    let temperature = (document.querySelector('.temp').innerHTML);
    console.log(temperature);
    // Get wind speed from the text field that has the id
    // of "windSpeedInputBox" and store it in a variable named windSpeed.
    let windSpeed = (document.querySelector('.speed').innerHTML);
    console.log(windSpeed);
    // Declare a variable to hold the wind chill factor
    let f = windChill(temperature, windSpeed);
    console.log(f);
    // Display the total amount due.
    document.querySelector('.chill').innerHTML = f + '°F';
}

function windChill(tempF, speed) {

    // Declare a variable to hold the wind chill factor
    let f = 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) +
        (0.4275 * tempF * (speed ** 0.16));

    // Round the wind chill factor to one decimal place
    f = f.toFixed(1);
    console.log(f);
    return f;
}

/* Defining Table
 * Input: A number "n" and the number of decimal places "dec" to round it to.
 * Processing: Round the number "n" to the number of decimal places in "dec".
 * Output: The number "n" rounded to the number of decimal places "dec".
 */
//function round(n, dec) {

// Declare a variable to hold the multiplier
//  let multiplier = 10 ** dec;

// Round n to the number of places in dec
//let result = Math.round(n * multiplier) / multiplier;

// return result;
//}
//input type = "text"
//id = "temperatureInputBox"
//placeholder = "Fahrenheit"
//input type = "text"
//id = "windSpeedInputBox"
//placeholder = "miles per hour"