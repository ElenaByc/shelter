import { pets } from "./pets.js";
export const petPopup = () => {
	const body = document.getElementsByTagName("body")[0];
	const petsCards = document.getElementsByClassName("card");
	const popup = document.getElementsByClassName("card__popup")[0];
	const closeBtn = document.getElementsByClassName("close")[0];
	const popupShadow = document.getElementsByClassName("popup-shadow")[0];

	const togglePopup = (event) => {
		console.log("popup!");
		console.log(popup);

		const clickedCard = event.target.closest(".card");
		if (clickedCard) {
			// open, generate popup content
			let pet = pets.find((el) => el.name === clickedCard.id);
			let img = popup.getElementsByClassName("popup__img")[0];
			img.style.backgroundImage = `url(${pet.img})`;
			let name = popup.getElementsByTagName("h3")[0];
			name.innerHTML = pet.name;
			let typeAndBreed = popup.getElementsByTagName("h4")[0];
			typeAndBreed.innerHTML = `${pet.type} - ${pet.breed}`;
		}
		popupShadow.classList.toggle("active");
		body.classList.toggle("scrollblock");
		popup.classList.toggle("open");
	};

	for (let i = 0; i < petsCards.length; i++) {
		petsCards[i].addEventListener("click", togglePopup);
	}
	popupShadow.addEventListener("click", togglePopup);
	popupShadow.addEventListener("mouseover", () => {
		closeBtn.classList.add("hover");
	});
	popupShadow.addEventListener("mouseout", () => {
		closeBtn.classList.remove("hover");
	});

	closeBtn.addEventListener("click", togglePopup);
};
