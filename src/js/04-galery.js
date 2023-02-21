import countries from "./countries.json";
import itemsTemplate from "../templates/gallery-items.hbs";

const galleryRef = document.querySelector(".js-gallery");

const markup = itemsTemplate(countries);
galleryRef.insertAdjacentHTML("beforeend", markup);
console.log(markup);
