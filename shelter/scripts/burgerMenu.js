export const burgerMenu = () => {
	const burgerBtn = document.getElementsByClassName("header__burger-btn")[0];
	const navList = document.getElementsByClassName("header__nav-list")[0];
	const navLinks = document.getElementsByClassName("nav-link");
	const shadow = document.getElementsByClassName("shadow-box")[0];
	const header = document.getElementsByClassName("header")[0];

	const toggleMenu = () => {
		burgerBtn.classList.toggle("active");
		navList.classList.toggle("active");
		shadow.classList.toggle("active");
		header.classList.toggle("active");
	};

	burgerBtn.addEventListener("click", toggleMenu);
	shadow.addEventListener("click", toggleMenu);
	for (let i = 0; i < navLinks.length; i++) {
		navLinks[i].addEventListener("click", toggleMenu);
	}
};
