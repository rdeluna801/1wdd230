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
    let members = jsonObject["members"];
    console.log(members);
    // members.forEach(displayMembers);

    for (let dog = 0; dog < 9; dog++) {
      let directSection = document.createElement("section");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      let img = document.createElement("img");
      let div = document.createElement("div");
      console.log(members[dog]);
      h3.textContent = members[dog].name;
      p.textContent = members[dog].website;
      img.src = members[dog].logo;
      img.alt = members[dog].name;
      div.className = "logo";
      img.className = "gridImg";
      h3.className = "directnames";
      directSection.appendChild(h3);
      directSection.appendChild(p);
      div.appendChild(img);
      directSection.appendChild(div);

      document.querySelector("article.grid").appendChild(directSection);
    }
    function displayMembers(members) {}
  });
