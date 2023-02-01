import { data } from "./data.js";
const wrap = document.querySelector(".cards__wrapper");

function createCard(obj) {
  const newCard = document.createElement("div");
  newCard.className = "cards__item";
  newCard.innerHTML = `<p class="item__emoji">${obj.symbol}</p> 
  <p class="item__title">${obj.title}</p>
  <p class="item__keywords">${obj.keywords}</p>`;
  wrap.append(newCard);
}

data.forEach((card) => createCard(card));

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
