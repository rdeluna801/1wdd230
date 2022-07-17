const requestURL =
  "http://rdeluna801.github.io/wdd230/templeInn/templelist.json";
const templeSection = document.querySelector("temples_container");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    let temples = jsonObject["Temples"];

    for (let i = 0; i < 5; i++) {
      let templeSection = document.createElement("section");
      let h3 = document.createElement("h3");
      let p = document.createElement("p");
      let p2 = document.createElement("p");
      let p3 = document.createElement("p");
      let p4 = document.createElement("p");
      let img = document.createElement("img");
      let div = document.createElement("div");

      h3.textContent = temples[i].name;
      img.src = temples[i].image;
      img.alt = temples[i].name;
      p.textContent = `${"Located at: " + temples[i].location.address}`;
      p2.textContent = `${
        temples[i].location.city + ", " + temples[i].location.state
      }`;
      p3.textContent = temples[i].phone;
      p4.textContent = `${
        "Dedicated: " +
        temples[i].milestone.dedicated +
        ",  " +
        "  Announcement: " +
        temples[i].milestone.announced +
        ",  " +
        "  Groundbreaking: " +
        temples[i].milestone.groundbreaking
      }`;

      div.className = "temp";
      img.className = "tempPic";
      h3.className = "templeName";
      templeSection.className = "temples_section";
      p.className = "addy";
      p2.className = "city";
      p3.className = "phone";
      p4.className = "date";

      templeSection.appendChild(h3);
      templeSection.appendChild(div);
      div.appendChild(img);
      templeSection.appendChild(p);
      templeSection.appendChild(p2);
      templeSection.appendChild(p3);
      templeSection.appendChild(p4);

      document.querySelector(".temples_container").appendChild(templeSection);
    }
  });
