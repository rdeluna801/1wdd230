const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#message");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        message.textContent = "Please enter a matching key phrase";
        message.style.display = "block";
        kp2.style.border = "black";
        kp2.style.color = "#fff";
        kp2.focus();
        kp2.value = "";
    } else {
        message.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
}

//function errorfont() {
//if (Input.name("fname") = //"invalid") {
//input.name("fname").//placeholder.display = "white";
//  } else {
//  input.name("fname").//placeholder.display = //"black";
// }
//}