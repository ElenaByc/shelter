import { pets } from "./pets.js";
export const petPopup = () => {
	const body = document.getElementsByTagName("body")[0];
	const petsCards = document.getElementsByClassName("card");
	const popup = document.getElementsByClassName("card__popup")[0];
	const closeBtn = document.getElementsByClassName("close")[0];
	const popupShadow = document.getElementsByClassName("popup-shadow")[0];

	const togglePopup = (event) => {
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
			let description = popup.getElementsByTagName("p")[0];
			description.innerHTML = pet.description;
			let age = popup.getElementsByClassName("age")[0];
			age.innerHTML = pet.age;
      let inoculations = popup.getElementsByClassName("inoculations")[0];
			inoculations.innerHTML = pet.inoculations;
      let diseases = popup.getElementsByClassName("diseases")[0];
			diseases.innerHTML = pet.diseases;
      let parasites = popup.getElementsByClassName("parasites")[0];
			parasites.innerHTML = pet.parasites;
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
