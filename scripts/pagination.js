import { createPetCard } from "./createPetCard.js";
import { petPopup } from "./petPopup.js";
import { shuffleArray } from "./shuffleArray.js";

export const pagination = (petsArray) => {
	const CONTAINER = document.getElementsByClassName("friends__cards-container")[0];
	const BTN_FIRST = document.querySelector("#btn-first");
	const BTN_LAST = document.querySelector("#btn-last");
	const BTN_PREV = document.querySelector("#btn-prev");
	const BTN_NEXT = document.querySelector("#btn-next");
	const BTN_CURRENT = document.querySelector("#btn-current");
	const SCREEN_WIDTH = window.innerWidth;
	const CARDS_TOTAL = 48;
	let cardsPerPage;
	let lastPageNumber;
	let currentPage = 1;

	const createAllIdsArray = () => {
		const array = [];
		const idsArray = [...Array(8).keys()];
		if (cardsPerPage === 8) {
			for (let i = 0; i < 6; i++) {
				shuffleArray(idsArray);
				array.push(...idsArray);
			}
		} else {
			shuffleArray(idsArray);
			array.push(...idsArray);
			const four1 = idsArray.slice(0, 4);
			const four2 = idsArray.slice(4, 8);
			for (let i = 0; i < 5; i++) {
				shuffleArray(four1);
				array.push(...four1);
				shuffleArray(four2);
				array.push(...four2);
			}
		}
		return array;
	};

	const lockLeftButtons = () => {
		BTN_FIRST.removeEventListener("click", firstPage);
		BTN_PREV.removeEventListener("click", prevPage);
		BTN_FIRST.classList.add("inactive");
		BTN_PREV.classList.add("inactive");
	};

	const unlockLeftButtons = () => {
		BTN_FIRST.addEventListener("click", firstPage);
		BTN_PREV.addEventListener("click", prevPage);
		BTN_FIRST.classList.remove("inactive");
		BTN_PREV.classList.remove("inactive");
	};

	const lockRightButtons = () => {
		BTN_LAST.removeEventListener("click", lastPage);
		BTN_NEXT.removeEventListener("click", nextPage);
		BTN_LAST.classList.add("inactive");
		BTN_NEXT.classList.add("inactive");
	};

	const unlockRightButtons = () => {
		BTN_LAST.addEventListener("click", lastPage);
		BTN_NEXT.addEventListener("click", nextPage);
		BTN_LAST.classList.remove("inactive");
		BTN_NEXT.classList.remove("inactive");
	};

	const prevPage = () => {
		if (currentPage === lastPageNumber) {
			unlockRightButtons();
		}
		currentPage--;
		BTN_CURRENT.innerHTML = `<h4>${currentPage}</h4>`;
		if (currentPage === 1) {
			lockLeftButtons();
		}
		displayCards(currentPage);
	};

	const nextPage = () => {
		if (currentPage === 1) {
			unlockLeftButtons();
		}
		currentPage++;
		BTN_CURRENT.innerHTML = `<h4>${currentPage}</h4>`;
		if (currentPage === lastPageNumber) {
			lockRightButtons();
		}
		displayCards(currentPage);
	};

	const firstPage = () => {
		if (currentPage === lastPageNumber) {
			unlockRightButtons();
		}
		currentPage = 1;
		BTN_CURRENT.innerHTML = "<h4>1</h4>";
		lockLeftButtons();
		displayCards(currentPage);
	};

	const lastPage = () => {
		if (currentPage === 1) {
			unlockLeftButtons();
		}
		currentPage = lastPageNumber;
		BTN_CURRENT.innerHTML = `<h4>${lastPageNumber}</h4>`;
		lockRightButtons();
		displayCards(currentPage);
	};

	const displayCards = (page, firstTime) => {
		if (firstTime) {
			CONTAINER.innerHTML = "";
			allIdsArray.slice((page - 1) * cardsPerPage, page * cardsPerPage).forEach((petId) => {
				const card = createPetCard(petId, petsArray);
				CONTAINER.appendChild(card);
				petPopup(petsArray);
			});
		} else {
			const cards = document.getElementsByClassName("card");
			for (let i = 0; i < cards.length; i++) {
				cards[i].classList.add("fade");
			}
			setTimeout(() => {
				CONTAINER.innerHTML = "";
				allIdsArray
					.slice((page - 1) * cardsPerPage, page * cardsPerPage)
					.forEach((petId) => {
						const card = createPetCard(petId, petsArray);
						CONTAINER.appendChild(card);
						petPopup(petsArray);
					});
			}, 500);
		}
	};

	if (SCREEN_WIDTH >= 1280) {
		cardsPerPage = 8;
	} else if (SCREEN_WIDTH >= 768) {
		cardsPerPage = 6;
	} else {
		cardsPerPage = 3;
	}
	lastPageNumber = CARDS_TOTAL / cardsPerPage;

	const allIdsArray = createAllIdsArray();
	console.log(allIdsArray);
	displayCards(currentPage, true);
	petPopup(petsArray);

	BTN_PREV.addEventListener("click", prevPage);
	BTN_NEXT.addEventListener("click", nextPage);
	BTN_FIRST.addEventListener("click", firstPage);
	BTN_LAST.addEventListener("click", lastPage);
};
