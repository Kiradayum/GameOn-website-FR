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
/* Verifier si besoin de fonction plus complexe, comme pour "launch modal event" plus haut*/


//Form Check

//Names   --/^[a-zA-Z]{2,}$/--
function checkName(name) {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(name);
};

//Prénom (reservForm enlevé pour test)
firstName.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!checkName(firstName.value)) {
    formData.setAttribute("data-error", firstNameMessage);
    formData.setAttribute("data-error-visible", true);
  } else {
    formData.removeAttribute("data-error");
    formData.removeAttribute("data-error-visible");
  }
});

//Nom (reservForm enlevé pour test)
lastName.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!checkName(lastName.value)) {
    formData.setAttribute("data-error", lastNameMessage);
    formData.setAttribute("data-error-visible", true);
  } else {
    formData.removeAttribute("data-error");
    formData.removeAttribute("data-error-visible");
  }
});

//E-mail --/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/--
function checkMail(name) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  return regex.test(name);
};
//(reservForm enlevé pour test)
email.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!checkMail(email.value)) {
    formData.setAttribute("data-error", emailMessage);
    formData.setAttribute("data-error-visible", true);
  } else {
    formData.removeAttribute("data-error");
    formData.removeAttribute("data-error-visible");
  }
});

//Birthdate (reservForm enlevé pour test)
birthdate.addEventListener("submit", function (event) {
  event.preventDefault();
  
  if (birthdate.value === "") {
    formData.setAttribute("data-error", birthdateMessage);
    formData.setAttribute("data-error-visible", true);
  } else {
    formData.removeAttribute("data-error");
    formData.removeAttribute("data-error-visible");
  }
});

//Quantity (reservForm enlevé pour test)
quantity.addEventListener("submit", function (event) {
  event.preventDefault();
  
  if (quantity.value === "") {
    formData.setAttribute("data-error", quantityMessage);
    formData.setAttribute("data-error-visible", true);
  } else {
    formData.removeAttribute("data-error");
    formData.removeAttribute("data-error-visible");
  }
});

//Cities Radio (reservForm enlevé pour test))
radioCities.addEventListener("submit", function (event) {
  event.preventDefault();
  var radios = document.getElementsByName("location")
  var isChecked = false;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        isChecked = true;
        break;
    }
  if (!isChecked) {
    formData.setAttribute("data-error", radioCitiesMessage);
    formData.setAttribute("data-error-visible", true);
  } else {
    formData.removeAttribute("data-error");
    formData.removeAttribute("data-error-visible");
  }
}
});

//Conditions Check

conditionCheck.addEventListener("submit", function (event) {
  event.preventDefault();
  var firstCheckbox = document.querySelector('input[name="checkbox1]');
  
  if (!firstCheckbox.checked) {
    formData.setAttribute("data-error", conditionCheckMessage);
    formData.setAttribute("data-error-visible", true);
  } else {
    formData.removeAttribute("data-error");
    formData.removeAttribute("data-error-visible");
  }
});

/* Notes

Si je dois utiliser les element de radio :
radioElements.forEach(radio => {

});


const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit-btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = document.querySelector(".formData");
  let nameInput = document.querySelector("#name");
  let nameValue = nameInput.value;

  console.log(nameValue);
  console.log(checkName(nameValue));

  if (!checkName(nameValue)) {
    formData.setAttribute("data-error", "Le nom est pas bon");
    formData.setAttribute("data-error-visible", true);
  } else {
    formData.removeAttribute("data-error");
    formData.removeAttribute("data-error-visible");
  }
});

function checkName(name) {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(name);
}


*/