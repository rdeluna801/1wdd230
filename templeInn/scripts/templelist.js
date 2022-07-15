const requestURL =
  "http://rdeluna801.github.io/wdd230/templeInn/templelist.json";
const templeSection = document.querySelector("templeSection");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);
    let temples = jsonObject["Temples"];
    console.log(temples);

    for (let display = 0; display < 5; display++) {
      let templeSection = document.createElement("section");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      let img = document.createElement("img");
      let div = document.createElement("div");

      h3.textContent = temples[display].name;
      p.textContent = temples[display].location;
      img.src = temples[display].image;
      img.alt = temples[display].milestone[dedicated];

      div.className = "temp";
      img.className = "tempPic";
      h3.className = "templeName";

      templeSection.appendChild(h3);
      templeSection.appendChild(p);
      templeSection.appendChild(div);
      div.appendChild(img);

      document.querySelector("temples_container").appendChild(templeSection);
    }
  });
