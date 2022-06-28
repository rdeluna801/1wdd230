const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const message = document.querySelector("#message");

kp2.addEventListener("focusout", checkSame);




// This should be refactored.
function checkSame() {
    if (kp1.value !== kp2.value) {
        alert("Please enter a matching key phrase");
        kp2.focus();
        kp2.value = "";
    } else {
        message.textContent = "Thank You";
    }
}