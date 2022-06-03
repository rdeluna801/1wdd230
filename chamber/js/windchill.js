function doInputOutput() {
    let temp = parseFloat(document.getElementById('tempInput').value);
    let wind = parseFloat(document.getElementById('windInput').value);
    let f = windChill(temp, wind);
    document.getElementById('outputDiv').innerHTML = f;

}

function windChill(tempF, speed) {
    let f = 35.74 + (0.6215 * tempF) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * (tempF * (Math.pow(speed, 0.16))));
    return f;
} //input type = "text" id = "tempInput"  Insert Temperature 

// input type = "text"
//id = "windInput"  Insert Wind Speed 

// button type = "button"
//onclick = "doInputOutput()"  Wind Chill  
//div id = "outputDiv"   

function doInputOutput() {
    // Get temperature from the text field that has the id
    // of "temperatureInputBox" and store it in a variable named temperature.
    let temperature = parseFloat(document.getElementById('temperatureInputBox').value);

    // Get wind speed from the text field that has the id
    // of "windSpeedInputBox" and store it in a variable named windSpeed.
    let windSpeed = parseFloat(document.getElementById('windSpeedInputBox').value);

    // Declare a variable to hold the wind chill factor
    let f = windChill(temperature, windSpeed);

    // Display the total amount due.
    document.getElementById('outputDiv').innerHTML = f + '°F';
}

function windChill(tempF, speed) {

    // Declare a variable to hold the wind chill factor
    let f = 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) +
        (0.4275 * tempF * (speed ** 0.16));

    // Round the wind chill factor to one decimal place
    f = round(f, 1);

    return f;
}

/* Defining Table
 * Input: A number "n" and the number of decimal places "dec" to round it to.
 * Processing: Round the number "n" to the number of decimal places in "dec".
 * Output: The number "n" rounded to the number of decimal places "dec".
 */
function round(n, dec) {

    // Declare a variable to hold the multiplier
    let multiplier = 10 ** dec;

    // Round n to the number of places in dec
    let result = Math.round(n * multiplier) / multiplier;

    return result;
}
//input type = "text"
//id = "temperatureInputBox"
//placeholder = "Fahrenheit"
//input type = "text"
//id = "windSpeedInputBox"
//placeholder = "miles per hour"