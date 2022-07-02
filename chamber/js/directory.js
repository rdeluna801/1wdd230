const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
console.log;

const requestURL = "https://rdeluna801.github.io/wdd230/chamber/data.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
  });
const members = jsonObject["members"];
members.forEach(displayMembers);
function displayMembers(member) {
  let directSection = document.createElement("section");
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  h3.textContent = member.name;

  card.appendChild(h3);
  card.appendChild(p);

  document.querySelector("section.directSection").appendChild(directSection);
}

populate();
