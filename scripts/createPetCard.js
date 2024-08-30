import { createElementWithId, addNewElement, addNewImageElement } from "./elements-utils.js";

export const createPetCard = (id, petsArray) => {
	const pet = petsArray.find((el) => el.id === id);
	const card = createElementWithId("div", "card", id);
	addNewImageElement(card, "card__img", pet.img, pet.name);
	addNewElement(card, "h4", "card__header", pet.name);
	addNewElement(card, "div", ["button", "transparent"], "Learn more");
	return card;
};
