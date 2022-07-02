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

async function populate() {
  const requestURL = "https://rdeluna801.github.io/wdd230/chamber/data.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const members = await response.json();

  populateMembers(members);
  populateCards(members);
}

function populateCards(obj) {
  const section = document.querySelector("section");
  const members = obj["name"];

  for (const member of members) {
    const mySection = document.getElementsByClassName(".directSection");
    const myh3 = document.getElementsByClassName(".names");
    const myp = document.getElementsByClassName(".websites");
    const para = document.createElement("p");

    myh3.textContent = member.name;
    myp.textContent = `${website}`;
    para.textContent = `${phone}`;
    mySection.appendChild(myh3);
    mySection.appendChild(myp);
    mySection.appendChild(para);

    section.appendChild(section);
  }
}
populate();
