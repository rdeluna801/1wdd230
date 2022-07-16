const requestURL =
  "http://rdeluna801.github.io/wdd230/templeInn/templelist.json";
const favSection = document.querySelector("favTemple_container");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.log(jsonObject);
    let temples = jsonObject["Temples"];
    console.log(temples);

    let favSection = document.createElement("section");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p2 = document.createElement("p");
    let h2 = document.createElement("h2");
    let p3 = document.createElement("p");

    h2.textContent = `${"Our Temple Spotlight"}`;
    h3.textContent = temples[5].name;
    img.src = temples[5].image;
    img.alt = temples[5].name;
    p.textContent = `${"Located at: " + temples[5].location.address}`;
    p2.textContent = `${"Under Construction"}`;
    p3.textContent = `${
      temples[5].location.city + ", " + temples[5].location.state
    }`;

    div.className = "favTemple";
    img.className = "favTemplePic";
    h2.className = "favSpotlight";
    h3.className = "favTempleName";
    favSection.className = "favTemple_section";
    p.className = "favInfo";
    p3.className = "favInfo3";
    p2.className = "favInfo2";

    favSection.appendChild(h2);
    favSection.appendChild(h3);
    favSection.appendChild(div);
    div.appendChild(img);
    favSection.appendChild(p);
    favSection.appendChild(p3);
    favSection.appendChild(p2);

    document.querySelector(".favTemple_container").appendChild(favSection);
  });
