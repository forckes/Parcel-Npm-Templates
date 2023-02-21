const Handlebars = require("handlebars");
import colors from "./colors.json";
import colorCardTpl from "../templates/color-card.hbs";
import "../css/common.css";
import "../css/colorpicker.css";

const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));
console.log(colorCardTpl);
console.log(colors);

const paletteContainer = document.querySelector(".js-palette");
const cardsMarkup = createColorCardsMarkup(colors);
paletteContainer.insertAdjacentHTML("beforeend", cardsMarkup);

paletteContainer.addEventListener("click", onClickColorCard);
paletteContainer.addEventListener("click", onActiveColorCardOne);
// paletteContainer.addEventListener("click", onActiveColorCardMany);

function createColorCardsMarkup(colors) {
  return colors.map(colorCardTpl).join("");
}
function onClickColorCard(e) {
  if (!e.target.classList.contains("color-swatch")) {
    return;
  }
  const colorSwatch = e.target;
  let stack = [];
  stack.push(colorSwatch.dataset.hex);
  stack.push(colorSwatch.dataset.rgb);
  console.log(stack);
}
function onActiveColorCardOne(e) {
  if (!e.target.classList.contains("color-swatch")) {
    return;
  }
  const colorSwatch = e.target;
  const currentActiveCard = document.querySelector(".color-swatch-active");
  colorSwatch.classList.add("color-swatch-active");
  if (currentActiveCard) {
    currentActiveCard.classList.remove("color-swatch-active");
  }
}
function onActiveColorCardMany(e) {
  if (!e.target.classList.contains("color-swatch")) {
    return;
  }
  const colorSwatch = e.target;
  colorSwatch.classList.toggle("color-swatch-active");
}
