const options = {weekday: "long", day: "numeric", month: "long", year: "numeric"};
    document.getElementById("modifiedDate").textContent = new Date().toLocaleDateString('en-UK', options);