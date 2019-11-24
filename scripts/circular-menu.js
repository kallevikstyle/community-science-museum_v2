
const eyeButton = document.querySelector('#eye-button');


eyeButton.addEventListener("click", function(e) {
	e.preventDefault();
	document.querySelector('#circular-buttons').classList.toggle('open');
});