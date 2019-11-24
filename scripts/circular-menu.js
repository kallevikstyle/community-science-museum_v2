
const eyeButton = document.querySelector('#eye-button');

// Toggle .open class to spread out the exhibition buttons
eyeButton.addEventListener("click", function(e) {
	e.preventDefault();
	document.querySelector('#circular-buttons').classList.toggle('open');
});

// Mouseover event on eye button to give the hidden buttons a nudge
eyeButton.addEventListener("mouseover", function(e) {
	document.querySelector('#circular-buttons').classList.toggle('nudge');
	setTimeout(function() {
		document.querySelector('#circular-buttons').classList.toggle('nudge');
	}, 250);
});