y.addEventListener("click", validateForm);
const message = document.querySelector(".resmessage");

function validateForm() {
  var y,
    i,
    valid = true;
  y = document.getElementsByClassName("req");

  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
      alert("Please enter all required fields");
    }
  }
  if (valid) {
    message.textContent = "Thank You";
  }
  return valid;
}
