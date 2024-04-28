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
const submitBtn = document.querySelector(".btn-submit")//Btn to submit
const closeBtns = document.querySelectorAll(".close")//X Btn to close
const firstName = document.getElementById("first")//Prénom
const lastName = document.getElementById("last")//Nom
const email = document.getElementById("email")//E-mail
const birthdate = document.getElementById("birthdate")//Date de naissance
const quantity = document.getElementById("quantity")//À combien de tournois GameOn avez-vous déjà participé ?
const radioCities = document.querySelectorAll(".checkbox-input");//A quel tournoi souhaitez-vous participer cette année ?
const conditionCheck = document.getElementById("checkbox1")//Conditions d'utilisation
const newsletterCheck = document.getElementById("checkbox2")//Newsletter
const reserveForm = document.getElementById("reserve-form")//Formulaire Complet
const modalSuccess = document.querySelector(".modalsucces")//Message de validation après verification

//Messages
const firstNameMessage = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
const lastNameMessage = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
const emailMessage = "Veuillez entrer une adresse mail valide."
const birthdateMessage = "Vous devez entrer votre date de naissance."
const quantityMessage = "Vous devez choisir une option."
const radioCitiesMessage = "Vous devez choisir une option."
const conditionCheckMessage = "Vous devez vérifier que vous acceptez les termes et conditions."

//FormData Divs for error style
const firstNameDiv = document.querySelector(".first")
const lastNameDiv = document.querySelector(".last")
const emailDiv = document.querySelector(".email")
const birthdateDiv = document.querySelector(".birthdate")
const quantityDiv = document.querySelector(".quantity")
const radioCitiesDiv = document.querySelector(".location")
const conditionDiv = document.querySelector(".conditions")

//Validation state
firstName.valid = false
lastName.valid = false
email.valid = false
birthdate.valid = false
quantity.valid = false
radioCities.valid = false
conditionCheck.valid = false
newsletterCheck.valid = false

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

// close modal event
closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener("click", closeModal)
});

// close modal form
function closeModal() {
  modalbg.style.display = "none";
  modalSuccess.style.display = "none";
};

//Form Check functions
function checkName(name) {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(name);
};

function checkMail(name) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  return regex.test(name);
};

function validateFirstName () {
  if (!checkName(firstName.value)) {
    firstNameDiv.setAttribute("data-error", firstNameMessage);
    firstNameDiv.setAttribute("data-error-visible", true);
    firstName.valid = false;
  } else {
    firstNameDiv.removeAttribute("data-error");
    firstNameDiv.removeAttribute("data-error-visible");
    firstName.valid = true;
  }
};

function validateLastName () {
  if (!checkName(lastName.value)) {
    lastNameDiv.setAttribute("data-error", lastNameMessage);
    lastNameDiv.setAttribute("data-error-visible", true);
    lastName.valid = false;
  } else {
    lastNameDiv.removeAttribute("data-error");
    lastNameDiv.removeAttribute("data-error-visible");
    lastName.valid = true;
  }
};

function validateEmail () {
  if (!checkMail(email.value)) {
    emailDiv.setAttribute("data-error", emailMessage);
    emailDiv.setAttribute("data-error-visible", true);
    email.valid = false;
  } else {
    emailDiv.removeAttribute("data-error");
    emailDiv.removeAttribute("data-error-visible");
    email.valid = true;
  }
};

function validateBirthdate () {
  if (birthdate.value === "") {
    birthdateDiv.setAttribute("data-error", birthdateMessage);
    birthdateDiv.setAttribute("data-error-visible", true);
    birthdate.valid = false;
  } else {
    birthdateDiv.removeAttribute("data-error");
    birthdateDiv.removeAttribute("data-error-visible");
    birthdate.valid = true;
  }
};

function validateQuantity () {
  if (quantity.value === "") {
    quantityDiv.setAttribute("data-error", quantityMessage);
    quantityDiv.setAttribute("data-error-visible", true);
    quantity.valid = false;
  } else {
    quantityDiv.removeAttribute("data-error");
    quantityDiv.removeAttribute("data-error-visible");
    quantity.valid = true;
  }
};

function validateCities () {
  var isChecked = false;
  for (var i = 0; i < radioCities.length; i++) {
    if (radioCities[i].checked) {
        isChecked = true;
        City = radioCities[i];
        break;
    }
  }
  if (!isChecked) {
    radioCitiesDiv.setAttribute("data-error", radioCitiesMessage);
    radioCitiesDiv.setAttribute("data-error-visible", true);
    radioCities.valid = false;
  } else {
    radioCitiesDiv.removeAttribute("data-error");
    radioCitiesDiv.removeAttribute("data-error-visible");
    radioCities.valid = true;
  }
};

function validateConditions () {
  if (!conditionCheck.checked) {
    conditionDiv.setAttribute("data-error", conditionCheckMessage);
    conditionDiv.setAttribute("data-error-visible", true);
    conditionCheck.valid = false;
  } else {
    conditionDiv.removeAttribute("data-error");
    conditionDiv.removeAttribute("data-error-visible");
    conditionCheck.valid = true;
  }
};

//Validation process

function clearField (element) {
  element.valid = false;
  element.value = '';
  element.checked = false;
};

function formValidation () {
if(firstName.valid === true && lastName.valid === true && email.valid === true && birthdate.valid === true && quantity.valid === true && radioCities.valid === true && conditionCheck.valid === true) {
  closeModal();
  modalSuccess.style.display="block";
  clearField(firstName);
  clearField(lastName);
  clearField(email);
  clearField(birthdate);
  clearField(quantity);
  clearField(City);
  clearField(conditionCheck);
  clearField(newsletterCheck);
  }
};

reserveForm.addEventListener("submit", function (event) {
  event.preventDefault();
  validateFirstName();
  validateLastName();
  validateEmail();
  validateBirthdate();
  validateQuantity();
  validateCities();
  validateConditions();
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(birthdate.value);
  console.log(quantity.value);
  console.log(City.value);
  console.log(conditionCheck.value);
  if (newsletterCheck.checked) {
    console.log(newsletterCheck.value);
  }
  formValidation();
});
