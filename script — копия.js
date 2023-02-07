import { data } from "./data.js";

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

//
//
//
//
// import { data } from "./data.js";
// const wrap = document.querySelector(".cards__wrapper");

// function createBoxArray(data) {
//   for (let el of data) {
//     createCard(el);
//   }
// }
// createBoxArray(data);

// function createCard(newData) {
//   const newCard = document.createElement("div");
//   newCard.className = "cards__item";

//   const symbol = document.createElement("p");
//   symbol.textContent = newData.symbol;
//   // symbol.className = "item__emoji";
//   symbol.classList.add("item__emoji");

//   const title = document.createElement("p");
//   title.textContent = newData.title;
//   // title.className = "item__title";
//   title.classList.add("item__title");

//   const keywords = document.createElement("p");
//   keywords.textContent = newData.keywords;
//   // keywords.className = "item__keywords";
//   keywords.classList.add("item__keywords");

//   wrap.append(newCard);
//   newCard.append(symbol, title, keywords);
// }
