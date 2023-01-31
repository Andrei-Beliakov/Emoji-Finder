import { data } from "./data.js";
const cardsArrayWrap = document.querySelector(".cards__wrapper");

function createBoxArray(data) {
  for (let el of data) {
    console.log(el.symbol, el.title);
    createCard(el);
  }
}
createBoxArray(data);

function createCard(newData) {
  const newCard = document.createElement("div");
  newCard.className = "cards__item";

  const symbol = document.createElement("p");
  symbol.textContent = newData.symbol;
  symbol.className = "item__emoji";

  const title = document.createElement("p");
  title.textContent = newData.title;
  title.className = "item__title";

  const keywords = document.createElement("p");
  keywords.textContent = newData.keywords;
  keywords.className = "item__keywords";

  cardsArrayWrap.append(newCard);
  newCard.append(symbol, title, keywords);
}
