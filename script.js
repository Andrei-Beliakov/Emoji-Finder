// import { data } from "./data.js";
const response = await fetch("https://emoji.ymatuhin.workers.dev/");
const data = await response.json();

const wrap = document.querySelector(".cards__wrapper");
const search = document.querySelector(".cards__input");

function createCard(obj) {
  let checkedKeywords = [...new Set(obj.keywords.split(" "))].join(" ");
  const newCard = document.createElement("div");
  newCard.className = "cards__item";
  newCard.innerHTML = `<p class="item__emoji">${obj.symbol}</p> 
     <p class="item__title">${obj.title}</p>
     <p class="item__keywords">${checkedKeywords}</p>`;
  return newCard;
}

function searchFunction(event) {
  wrap.innerHTML = "";
  console.log(event.target.value);
  let value = event.target.value.trim().toLowerCase();
  data
    .filter(
      (elem) =>
        elem.title.trim().toLowerCase().includes(value) ||
        elem.keywords.trim().toLowerCase().includes(value)
    )
    .forEach((elem) => wrap.append(createCard(elem)));
}
search.addEventListener("input", searchFunction);
data.forEach((newCard) => wrap.append(createCard(newCard)));
