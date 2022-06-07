export const createElement = (elemType, classNames, innerText) => {
	const elem = document.createElement(elemType);
	if(classNames !== "") {
    Array.isArray(classNames) ? elem.classList.add(...classNames) : elem.classList.add(classNames);
  }
	if (innerText) {
		elem.innerHTML = innerText;
	}
	return elem;
}

export function createElementWithId(elemType, classNames, id, innerText) {
	const elem = createElement(elemType, classNames, innerText);
	elem.setAttribute("id", id);
	return elem;
}

export function createImageElement(classNames, imageUrl, altTxt) {
	const elem = createElement("img", classNames);
	elem.setAttribute("src", imageUrl);
	elem.setAttribute("alt", altTxt);
	return elem;
}

export function addNewElement(parentElem, elemType, classNames, innerText) {
	parentElem.appendChild(createElement(elemType, classNames, innerText));
}

export function addNewImageElement(parentElem, classNames, imageUrl, altTxt) {
	parentElem.appendChild(createImageElement(classNames, imageUrl, altTxt));
}
