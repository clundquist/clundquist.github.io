// get all img with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionObserver
const imgOptions = {
	threshold: 1,
    rootmargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
	image.setAttribute("src", image.getAttribute("data-src"));
	image.onload = () => { image.removeAttribute("data-src");};
};

// first check to see if Intersection Observer is supported
if("IntersectionObserver" in window) {
	const observer = new IntersectionObserver((items, observer) => {
		items.forEach((item) => {
			if(item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	}, imgOptions);

	// loop through img on check status and load if necessary
	imagesToLoad.forEach((img) => {
		observer.observe(img);
	});
}
else {
	imagesToLoad.forEach((img) => {
		loadImages(img);
	});
}