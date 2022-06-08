import { createPetCard } from "./createPetCard.js";
import { petPopup } from "./petPopup.js";

export const pagination = (petsArray) => {
	const BTN_FIRST = document.querySelector("#btn-first");
	const BTN_LAST = document.querySelector("#btn-last");
	const BTN_PREV = document.querySelector("#btn-prev");
	const BTN_NEXT = document.querySelector("#btn-next");
	const BTN_CURRENT = document.querySelector("#btn-current");
	const SCREEN_WIDTH = window.innerWidth;
	const CARDS_TOTAL = 48;
	let lastPageNumber;

	let currentPage = Number(BTN_CURRENT.getElementsByTagName("h4")[0].innerText);

	console.log(SCREEN_WIDTH);
	console.log(currentPage);

	if (SCREEN_WIDTH >= 1280) {
		lastPageNumber = CARDS_TOTAL / 8;
	} else if (SCREEN_WIDTH >= 768) {
		lastPageNumber = CARDS_TOTAL / 6;
	} else {
		lastPageNumber = CARDS_TOTAL / 3;
	}
	console.log(lastPageNumber);

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
	};

	const firstPage = () => {
		if (currentPage === lastPageNumber) {
			unlockRightButtons();
		}
		currentPage = 1;
		BTN_CURRENT.innerHTML = "<h4>1</h4>";
		lockLeftButtons();
	};

	const lastPage = () => {
		if (currentPage === 1) {
			unlockLeftButtons();
		}
		currentPage = lastPageNumber;
		BTN_CURRENT.innerHTML = `<h4>${lastPageNumber}</h4>`;
		lockRightButtons();
	};

	BTN_PREV.addEventListener("click", prevPage);
	BTN_NEXT.addEventListener("click", nextPage);
	BTN_FIRST.addEventListener("click", firstPage);
	BTN_LAST.addEventListener("click", lastPage);
};
