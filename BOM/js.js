const scriptures = document.querySelector("#scripture");
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const listItem = document.createElement("li");
  const listText = document.createElement("span");
  const listBtn = document.createElement("button");

  const myItem = input.value;
  input.value = "";

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = "Delete";
  listBtn.addEventListener("click", () => {
    list.removeChild(listItem);
  });
  input.focus();
});
