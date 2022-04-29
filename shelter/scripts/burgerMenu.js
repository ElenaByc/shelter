export const burgerMenu = () => {
	const burgerBtn = document.getElementsByClassName("header__burger-btn")[0];
	const navList = document.getElementsByClassName("header__nav-list")[0];
	const navLinks = document.getElementsByClassName("nav-link");
	const menuShadow = document.getElementsByClassName("menu-shadow")[0];
	const header = document.getElementsByClassName("header")[0];
	const body = document.getElementsByTagName("body")[0];

	const toggleMenu = () => {
		if (window.screen.width < 768) {
			burgerBtn.classList.toggle("active");
			navList.classList.toggle("active");
			menuShadow.classList.toggle("active");
			header.classList.toggle("active");
			body.classList.toggle("scrollblock");
		}
	};

	burgerBtn.addEventListener("click", toggleMenu);
	menuShadow.addEventListener("click", toggleMenu);
	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener("click", toggleMenu);
	}
};
