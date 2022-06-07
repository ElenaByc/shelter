import { burgerMenu } from "./burgerMenu.js";
import { petPopup } from "./petPopup.js";
import { getPetsArray } from "./getPetsArray.js";
import { carousel } from "./carousel.js";

let petsArray = [];
getPetsArray(petsArray);

burgerMenu();
petPopup(petsArray);

const carouselDiv = document.getElementsByClassName("carousel")[0];
if (carouselDiv) carousel(petsArray);
