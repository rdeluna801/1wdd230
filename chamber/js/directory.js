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
const directSection = document.querySelector(".directSection");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    let name = jsonObject["members"];
    console.log(name);
    members.forEach(displayMembers);

    function displayMembers(members) {
      let directSection = document.createElement("section");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      h3.textContent = obj[member.name];
      p.textContent = obj[member.website];

      card.appendChild(h3);
      card.appendChild(p);

      document
        .querySelector("section.directSection")
        .appendChild(directSection);
    }
  });
