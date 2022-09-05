const swiper1 = new Swiper(".swiper1", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	navigation: {
		nextEl: ".newst_next",
		prevEl: ".newst_prev",
	},
	breakpoints: {
		300: { slidesPerView: 1, spaceBetween: 8 },
		700: { slidesPerView: 2, spaceBetween: 15 },
		1300: { slidesPerView: 3, spaceBetween: 25 },
	},
});

const swiper1Img1 = new Swiper(".swiper1Img1", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: ".next_img",
		prevEl: ".prev_img",
	},
});
const swiper1Img2 = new Swiper(".swiper1Img2", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: ".next_img",
		prevEl: ".prev_img",
	},
});
const swiper1Img3 = new Swiper(".swiper1Img3", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: ".next_img",
		prevEl: ".prev_img",
	},
});
const swiper1Img4 = new Swiper(".swiper1Img4", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: ".next_img",
		prevEl: ".prev_img",
	},
});

const swiper2 = new Swiper(".swiper2", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 25,
	loop: true,
	navigation: {
		nextEl: ".proposal_next",
		prevEl: ".proposal_prev",
	},
	breakpoints: {
		300: { slidesPerView: 1, spaceBetween: 5 },
		768: { slidesPerView: 2 },
	},
});

const swiper3 = new Swiper(".swiper3", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	navigation: {
		nextEl: ".weblog_next",
		prevEl: ".weblog_prev",
	},
	breakpoints: {
		300: { slidesPerView: 1, spaceBetween: 8 },
		700: { slidesPerView: 2, spaceBetween: 15 },
		1300: { slidesPerView: 3, spaceBetween: 25 },
	},
});

const swiper4 = new Swiper(".swiper4", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 5,
	spaceBetween: 5,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	breakpoints: {
		300: { slidesPerView: 3 },
		1200: { slidesPerView: 4 },
		1400: { slidesPerView: 5 },
	},

	pagination: {
		el: ".swiper-pagination",
	},
});

const swiper5 = new Swiper(".swiper5", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
});

const swiper6 = new Swiper(".swiper6", {
	// Optional parameters
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 5,
	loop: true,
});

const searchSelectBtn = document.querySelectorAll(".search_select");

searchSelectBtn.forEach((list) => {
	list.addEventListener("click", (e) => {
		e.preventDefault();

		const ulElem = list.querySelector("ul");
		const svgElem = list.querySelector("svg");

		if (ulElem.style.height == "0px") {
			ulElem.style.height = "10rem";
			ulElem.style.padding = "1rem 2rem";
			svgElem.style.transform = "rotate(0)";
		} else {
			ulElem.style.height = "0px";
			ulElem.style.padding = "0";
			svgElem.style.transform = "rotate(-90deg)";
		}
	});
});

const hamburgerMenu = document.querySelector("#hamburger_menu");

hamburgerMenu.addEventListener("click", () => {
	document.querySelector(".mobile_menu").style.width = "100%";
	document.querySelector(".mobile_menu").style.padding = "1.9rem 2.8rem";
});

const mobileExitBtn = document.querySelector(".exitBtn");

mobileExitBtn.addEventListener("click", () => {
	document.querySelector(".mobile_menu").style.width = "0";
	document.querySelector(".mobile_menu").style.padding = "0";
});
