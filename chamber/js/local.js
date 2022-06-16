function getLastVisit() {
    let today = Date.now();
    let mili = 86400000
    let priorVisit = localStorage.getItem("lastVisit");
    let dateCalc = ((today - priorVisit) / mili).toFixed(1);

    let welcome;
    if (!priorVisit) {
        welcome = "Welcome!"
    } else {
        welcome = `Welcome Back! It has been ${dateCalc} days since you've been here!`
    }
    document.querySelector(".message").innerHTML = welcome;
    localStorage.setItem("lastVisit", today);
}




getLastVisit()