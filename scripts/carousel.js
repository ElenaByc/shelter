import { createPetCard } from "./createPetCard.js";
import { petPopup } from "./petPopup.js";

export const carousel = (petsArray) => {
	const BTN_LEFT = document.getElementsByClassName("left-arrow")[0];
	const BTN_RIGHT = document.getElementsByClassName("right-arrow")[0];
	const CAROUSEL = document.getElementsByClassName("carousel")[0];
	const ITEM_LEFT = document.getElementsByClassName("carousel__left")[0];
	const ITEM_RIGHT = document.getElementsByClassName("carousel__right")[0];
	const ITEM_CENTER = document.getElementsByClassName("carousel__center")[0];

	const moveLeft = () => {
		CAROUSEL.classList.add("transition-left");
		BTN_LEFT.removeEventListener("click", moveLeft);
		BTN_RIGHT.removeEventListener("click", moveRight);
	};

	const moveRight = () => {
		CAROUSEL.classList.add("transition-right");
		BTN_LEFT.removeEventListener("click", moveLeft);
		BTN_RIGHT.removeEventListener("click", moveRight);
	};

	const transitionEnd = (animationEvent) => {
		let changedItem;
		if (animationEvent.animationName === "move-left") {
			CAROUSEL.classList.remove("transition-left");
			changedItem = ITEM_LEFT;
			ITEM_RIGHT.innerHTML = ITEM_CENTER.innerHTML;
		}
		if (animationEvent.animationName === "move-right") {
			CAROUSEL.classList.remove("transition-right");
			changedItem = ITEM_RIGHT;
			ITEM_LEFT.innerHTML = ITEM_CENTER.innerHTML;
		}

		const itemIds = [...changedItem.getElementsByClassName("card")].map((el) => Number(el.id));
		console.log(itemIds);
		ITEM_CENTER.innerHTML = changedItem.innerHTML;
		changedItem.innerHTML = "";
		for (let i = 0; i < 3; i++) {
			let petId = Math.floor(Math.random() * 8);
			while (itemIds.includes(petId)) {
				petId = Math.floor(Math.random() * 8);
			}
      itemIds.push(petId);
			const card = createPetCard(petId, petsArray);
			changedItem.appendChild(card);
		}

		BTN_LEFT.addEventListener("click", moveLeft);
		BTN_RIGHT.addEventListener("click", moveRight);
		petPopup(petsArray);
	};

	BTN_LEFT.addEventListener("click", moveLeft);
	BTN_RIGHT.addEventListener("click", moveRight);
	CAROUSEL.addEventListener("animationend", transitionEnd);
};
