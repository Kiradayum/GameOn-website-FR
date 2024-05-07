function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const modalbg = document.querySelector(".bground"); //Modal
const modalBtn = document.querySelectorAll(".modal-btn"); //Open Modal Btn
const formData = document.querySelector(".formData"); //All form by class
const submitBtn = document.querySelector(".btn-submit"); //Btn to submit
const closeBtns = document.querySelectorAll(".close"); //X Btn to close
const firstName = document.getElementById("first"); //Prénom
const lastName = document.getElementById("last"); //Nom
const email = document.getElementById("email"); //E-mail
const birthdate = document.getElementById("birthdate"); //Date de naissance
const quantity = document.getElementById("quantity"); //À combien de tournois GameOn avez-vous déjà participé ?
const radioCities = document.querySelectorAll(".radio"); //A quel tournoi souhaitez-vous participer cette année ?
const conditionCheck = document.getElementById("checkbox1"); //Conditions d'utilisation
const newsletterCheck = document.getElementById("checkbox2"); //Newsletter
const reserveForm = document.getElementById("reserve-form"); //Formulaire Complet
const modalSuccess = document.querySelector(".modalsucces"); //Message de validation après verification

//Messages
const firstNameMessage = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const lastNameMessage = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const emailMessage = "Veuillez entrer une adresse mail valide.";
const birthdateMessage = "Veuillez entrer une date de naissance valide.";
const quantityMessage = "Veuillez entrer une valeur.";
const radioCitiesMessage = "Vous devez choisir une option.";
const conditionCheckMessage = "Vous devez vérifier que vous acceptez les termes et conditions.";

//FormData Divs for error style
const firstNameDiv = document.querySelector(".first");
const lastNameDiv = document.querySelector(".last");
const emailDiv = document.querySelector(".email");
const birthdateDiv = document.querySelector(".birthdate");
const quantityDiv = document.querySelector(".quantity");
const radioCitiesDiv = document.querySelector(".location");
const conditionDiv = document.querySelector(".conditions");

//Validation state
firstName.valid = false;
lastName.valid = false;
email.valid = false;
birthdate.valid = false;
quantity.valid = false;
radioCities.valid = false;
conditionCheck.valid = false;
newsletterCheck.valid = false;
let city = null;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

// close modal event
closeBtns.forEach((closeBtn) => {
	closeBtn.addEventListener("click", closeModal);
});

// close modal form
function closeModal() {
	modalbg.style.display = "none";
	modalSuccess.style.display = "none";
}

//Form Check functions
function checkName(name) {
	const regex = /^[a-zA-Z]{2,}$/;
	return regex.test(name);
}

function checkMail(name) {
	const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
	return regex.test(name);
}

function validateInput(checked, inputDiv, inputCheck, inputMessage) {
	if (!checked) {
		inputDiv.setAttribute("data-error", inputMessage);
		inputDiv.setAttribute("data-error-visible", true);
		inputCheck.valid = false;
	} else {
		inputDiv.removeAttribute("data-error");
		inputDiv.removeAttribute("data-error-visible");
		inputCheck.valid = true;
	}
}

function validateFirstName() {
	validateInput(checkName(firstName.value), firstNameDiv, firstName, firstNameMessage);
}

function validateLastName() {
	validateInput(checkName(lastName.value), lastNameDiv, lastName, lastNameMessage);
}

function validateEmail() {
	validateInput(checkMail(email.value), emailDiv, email, emailMessage);
}

function validateBirthdate() {
	var ofAge = false;
	if (birthdate.value.length > 0) {
		var birthDate = new Date(birthdate.value);
		var today = new Date();
		var age = today.getFullYear() - birthDate.getFullYear();
		if (age > 12) {
			ofAge = true;
		}
	}
	validateInput(ofAge, birthdateDiv, birthdate, birthdateMessage);
}

function validateQuantity() {
	validateInput(quantity.value, quantityDiv, quantity, quantityMessage);
}

function validateCities() {
	var isChecked = false;
	for (var i = 0; i < radioCities.length; i++) {
		if (radioCities[i].checked) {
			isChecked = true;
			city = radioCities[i];
			break;
		}
	}
	validateInput(isChecked, radioCitiesDiv, radioCities, radioCitiesMessage);
}

function validateConditions() {
	validateInput(conditionCheck.checked, conditionDiv, conditionCheck, conditionCheckMessage);
}

//Validation process
function clearField(element) {
	element.valid = false;
	element.value = "";
	element.checked = false;
	isChecked = false;
	ofAge = false;
}

function displayValuesInConsole() {
	console.log("Prénom : " + firstName.value);
	console.log("Nom : " + lastName.value);
	console.log("E-mail : " + email.value);
	console.log("Date de naissance : " + birthdate.value);
	console.log("Nombre de participation : " + quantity.value);
	console.log("Ville : " + city.value);
	console.log("Conditions : " + (conditionCheck.checked ? "oui" : "non"));
	console.log("Newsletter : " + (newsletterCheck.checked ? "oui" : "non"));
}

function clearFields() {
	clearField(firstName);
	clearField(lastName);
	clearField(email);
	clearField(birthdate);
	clearField(quantity);
	clearField(city);
	clearField(conditionCheck);
	clearField(newsletterCheck);
}

function formValidation() {
	if (
		firstName.valid === true &&
		lastName.valid === true &&
		email.valid === true &&
		birthdate.valid === true &&
		quantity.valid === true &&
		radioCities.valid === true &&
		conditionCheck.valid === true
	) {
		displayValuesInConsole();
		closeModal();
		clearFields();
		modalSuccess.style.display = "block";
	}
}

function validateFields() {
  validateFirstName();
	validateLastName();
	validateEmail();
	validateBirthdate();
	validateQuantity();
	validateCities();
	validateConditions();
}

reserveForm.addEventListener("submit", function (event) {
	event.preventDefault();
	validateFields();
	formValidation();
});
