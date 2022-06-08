import { burgerMenu } from "./burgerMenu.js";
import { petPopup } from "./petPopup.js";
import { getPetsArray } from "./getPetsArray.js";
import { carousel } from "./carousel.js";
import { pagination } from "./pagination.js";

let petsArray = [];
getPetsArray(petsArray);

burgerMenu();
petPopup(petsArray);

const carouselDiv = document.getElementsByClassName("carousel")[0];
if (carouselDiv) carousel(petsArray);

const navigationDiv = document.getElementsByClassName("friends__navigation")[0];
if(navigationDiv) pagination(petsArray);
