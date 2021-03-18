// modal

const	feedbackLink = document.querySelector(".contacts .btn"),
			feedbackPopup = document.querySelector(".modal-feedback"),
			mapLink = document.querySelector(".map"),
			mapPopup = document.querySelector(".modal-map"),
			closeFeedback = document.querySelector(".feedback-close-btn"),
			closeMap = document.querySelector(".map-close-btn");

feedbackLink.addEventListener("click", function(evt) {
	evt.preventDefault();

	feedbackPopup.classList.add("modal-show");

	userName.focus();

	if (storageName) {
		userName.value = storageName;
		userEmail.focus();
	} else {
		userName.focus();
	}
});

closeFeedback.addEventListener("click", function(evt) {
	evt.preventDefault();

	feedbackPopup.classList.remove("modal-show");
	feedbackPopup.classList.remove("modal-error");
});

mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();

	mapPopup.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
	evt.preventDefault();

	mapPopup.classList.remove("modal-show");
});

// feedback form

const	form = feedbackPopup.querySelector("form"),
			userName = feedbackPopup.querySelector("[name=name]"),
			userEmail = feedbackPopup.querySelector("[name=email]"),
			userMessage = feedbackPopup.querySelector("[name=message]"),
			storageName = localStorage.getItem("userName");


form.addEventListener("submit", function(evt) {
	if (!userName.value || !userEmail.value || !userMessage.value) {
		evt.preventDefault();
		feedbackPopup.classList.remove("modal-error");
		feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
		feedbackPopup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
		}	
	}
});

// local storage accessibility

let	isStorageSupport = true,
		storage = "";

try {
	storage = localStorage.getItem("userName");
} catch (err) {
	isStorageSupport = false;
}

// close modal window through esc

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (feedbackPopup.classList.contains("modal-show")) {
			evt.preventDefault();

			feedbackPopup.classList.remove("modal-show");
			feedbackPopup.classList.remove("modal-error");
		}

		if (mapPopup.classList.contains("modal-show")) {
			evt.preventDefault();

			mapPopup.classList.remove("modal-show");
		}
	}
});

// products

const products = document.querySelectorAll(".product-item"),
			controls = document.querySelectorAll(".prod-controls .button");

for (var i = 0; len = controls.length, i < len; i++) {
	(function(index) {
		controls[i].addEventListener("click", function() {
			for (var i = 0; len = controls.length, i < len; i++) {
				controls[i].classList.remove("current");
				this.classList.add("current");
			}

			for (var i = 0; len = products.length, i < len; i++) {
				products[i].classList.remove("current");
				products[index].classList.add("current");
			}
		});
	})(i);
}

// services

const services = document.querySelectorAll(".info-item"),
			serviceButtons = document.querySelectorAll(".service-item");

for (var i = 0; len = serviceButtons.length, i < len; i++) {
	(function(index) {
		serviceButtons[i].addEventListener("click", function(evt) {
			evt.preventDefault();

			for (var i = 0; len = serviceButtons.length, i < len; i++) {
				serviceButtons[i].classList.remove("current");
				this.classList.add("current");
			}

			for (var i = 0; len = services.length, i < len; i++) {
				services[i].classList.remove("current");
				services[index].classList.add("current");
			}
		});
	})(i);
}