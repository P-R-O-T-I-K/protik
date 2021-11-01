let navbar = document.getElementsByClassName('nav')[0];
let navTrigger = document.getElementsByClassName('navTrigger')[0];
let mainListDiv = document.getElementById('mainListDiv');

var progress = document.getElementById("progressbar");
var totalHeight = document.body.scrollHeight - window.innerHeight;

function fadeIn(el) {
	el.style.opacity = 0;
	el.style.display = "block";

	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .1) > 1)) {
			el.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}

window.onload = function () {
	navTrigger.addEventListener('click', () => {
		navTrigger.classList.toggle('active');
		mainListDiv.classList.toggle('show_list');
		fadeIn(mainListDiv);
	})

	window.onscroll = function () {
		// Navbar
		if (window.scrollY > 50) {
			navbar.classList.add('affix');
		} else {
			navbar.classList.remove('affix');
		}

		// Scrollbar
		var progressHeight = (window.pageYOffset / totalHeight) * 100;
		progress.style.height = progressHeight + "%";
	};
}