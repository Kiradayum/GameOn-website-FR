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
const closeBtn = document.querySelector(".close")//X Btn to close
const firstName = document.getElementById("first")//Prénom
const lastName = document.getElementById("last")//Nom
const email = document.getElementById("email")//E-mail
const birthdate = document.getElementById("birthdate")//Date de naissance
const quantity = document.getElementById("quantity")//À combien de tournois GameOn avez-vous déjà participé ?
const radioCities = document.querySelectorAll(".checkbox-input");//A quel tournoi souhaitez-vous participer cette année ?
const conditionCheck = document.getElementById("checkbox1")//Conditions d'utilisation
const newsletterCheck = document.getElementById("checkbox2")//Newsletter
const reserveForm = document.getElementById("reserve-form")//Formulaire Complet

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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
};

// close modal event
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
});

//Form Check

//Names   --/^[a-zA-Z]{2,}$/--
function checkName(name) {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(name);
};

//E-mail --/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/--
function checkMail(name) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  return regex.test(name);
};

reserveForm.addEventListener("submit", function (event) {
  event.preventDefault();

//Prénom 
  if (!checkName(firstName.value)) {
    firstNameDiv.setAttribute("data-error", firstNameMessage);
    firstNameDiv.setAttribute("data-error-visible", true);
  } else {
    firstNameDiv.removeAttribute("data-error");
    firstNameDiv.removeAttribute("data-error-visible");
  };

//Nom
  if (!checkName(lastName.value)) {
    lastNameDiv.setAttribute("data-error", lastNameMessage);
    lastNameDiv.setAttribute("data-error-visible", true);
  } else {
    lastNameDiv.removeAttribute("data-error");
    lastNameDiv.removeAttribute("data-error-visible");
  };

//E-mail
  if (!checkMail(email.value)) {
    emailDiv.setAttribute("data-error", emailMessage);
    emailDiv.setAttribute("data-error-visible", true);
  } else {
    emailDiv.removeAttribute("data-error");
    emailDiv.removeAttribute("data-error-visible");
  };

//Birthdate
  if (birthdate.value === "") {
    birthdateDiv.setAttribute("data-error", birthdateMessage);
    birthdateDiv.setAttribute("data-error-visible", true);
  } else {
    birthdateDiv.removeAttribute("data-error");
    birthdateDiv.removeAttribute("data-error-visible");
  };

//Quantity 
  if (quantity.value === "") {
    quantityDiv.setAttribute("data-error", quantityMessage);
    quantityDiv.setAttribute("data-error-visible", true);
  } else {
    quantityDiv.removeAttribute("data-error");
    quantityDiv.removeAttribute("data-error-visible");
  };

//Cities Radio 
  var radios = document.getElementsByName("location")
  var isChecked = false;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        isChecked = true;
        break;
    }
  if (!isChecked) {
    radioCitiesDiv.setAttribute("data-error", radioCitiesMessage);
    radioCitiesDiv.setAttribute("data-error-visible", true);
  } else {
    radioCitiesDiv.removeAttribute("data-error");
    radioCitiesDiv.removeAttribute("data-error-visible");
  }
};

//Conditions Check
  var firstCheckbox = document.querySelector('input[name="checkbox1]');
  if (!firstCheckbox.checked) {
    conditionDiv.setAttribute("data-error", conditionCheckMessage);
    conditionDiv.setAttribute("data-error-visible", true);
  } else {
    conditionDiv.removeAttribute("data-error");
    conditionDiv.removeAttribute("data-error-visible");
  };
});