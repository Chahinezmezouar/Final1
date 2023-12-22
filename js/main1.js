(function ($) {
  "use strict";
  
  // Dropdown on mouse hover
  $(document).ready(function () {
      function toggleNavbarMethod() {
          if ($(window).width() > 992) {
              $('.navbar .dropdown').on('mouseover', function () {
                  $('.dropdown-toggle', this).trigger('click');
              }).on('mouseout', function () {
                  $('.dropdown-toggle', this).trigger('click').blur();
              });
          } else {
              $('.navbar .dropdown').off('mouseover').off('mouseout');
          }
      }
      toggleNavbarMethod();
      $(window).resize(toggleNavbarMethod);
  });
  
  
  // Back to top button
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });


  // Date and time picker
  $('.date').datetimepicker({
      format: 'L'
  });
  $('.time').datetimepicker({
      format: 'LT'
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      margin: 30,
      dots: true,
      loop: true,
      center: true,
      responsive: {
          0:{
              items:1
          },
          576:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:3
          }
      }
  });
  
})(jQuery);



//my part
//-------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

// Fonction générique pour basculer la visibilité du mot de passe
function togglePasswordVisibility(inputId, toggleId) {
const passwordInput = $(`#${inputId}`);
const togglePassword = $(`#${toggleId}`);

if (passwordInput.attr('type') === 'password') {
  passwordInput.attr('type', 'text');
  togglePassword.text('👀');
} else {
  passwordInput.attr('type', 'password');
  togglePassword.text('👁️');
}
}

//----------------------------

// Fonction générique pour valider les champs requis
function validateRequiredFields(inputs, form) {
let isValid = true;

inputs.each(function () {
  const input = $(this);

  const existingErrorDiv = input.parent().find('div.error');
  if (existingErrorDiv.length) {
    existingErrorDiv.remove();
    input.removeClass('error');
  }

  const value = input.val();

  if (value === '' || (input.attr('type') === 'number' && isNaN(value))) {
    const errorDiv = $('<div>')
      .text('Veuillez remplir ce champ avec une valeur valide.')
      .addClass('error error-message error-container');

    errorDiv.click(function () {
      input.focus();
    });

    input.parent().append(errorDiv);
    input.addClass('error');

    isValid = false;
  }

  input.on('input', function () {
    const existingErrorDiv = input.parent().find('div.error');
    if (existingErrorDiv.length) {
      existingErrorDiv.remove();
      input.removeClass('error');
    }
  });
});

return isValid;
}


//-----------------------------------


//Fonction generique qui verifie les pseudo
function validateLettersOnly(input) {
// Supprimer les messages d'erreur existants
const existingErrorDiv = input.parent().find('div.error');
if (existingErrorDiv.length) {
  existingErrorDiv.remove();
  input.removeClass('error');
}

const lettersRegex = /^[a-zA-Z]+$/;
const inputValue = input.val().trim(); // Supprimer les espaces en début et fin de la valeur

if (!lettersRegex.test(inputValue)) {
 // Créer un élément div pour afficher le message d'erreur
 const errorDiv = $('<div>')
   .text('Veuillez entrer un texte avec des lettres uniquement.')
   .addClass('error error-message error-container');

 // Ajouter l'élément div à la page, à côté de l'input
 input.parent().append(errorDiv);

 // Ajouter la classe 'error' à l'input
 input.addClass('error');

 return false;
}

return true;
}


//-------------------------------------------

// Fonction générique pour valider une adresse e-mail
function validateEmail(emailInput) {
const email = emailInput.val();
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const existingErrorDiv = emailInput.parent().find('div.error');
if (existingErrorDiv.length) {
  existingErrorDiv.remove();
  emailInput.removeClass('error');
}

if (!emailRegex.test(email)) {
  const errorDiv = $('<div>')
    .text('Veuillez entrer une adresse email valide.')
    .addClass('error error-message error-container');

  emailInput.parent().append(errorDiv);
  emailInput.addClass('error');

  return false;
}

return true;
}


//---------------------------------

// Fonction générique pour valider un mot de passe
function validatePassword(passwordInput, passwordRegex, errorMessage) {
const password = passwordInput.val();

const existingErrorDiv = passwordInput.parent().find('div.error');
if (existingErrorDiv.length) {
  existingErrorDiv.remove();
  passwordInput.removeClass('error');
}

if (!passwordRegex.test(password)) {
  const errorDiv = $('<div>')
    .text(errorMessage)
    .addClass('error error-message error-container');

  passwordInput.parent().append(errorDiv);
  passwordInput.addClass('error');

  return false;
}

return true;
}


//------------------------------------

// Fonction générique pour valider la correspondance des mots de passe
function validateConfirmPassword(passwordInput, confirmPasswordInput) {
const password = passwordInput.val();
const confirmPassword = confirmPasswordInput.val();

const existingErrorDiv = confirmPasswordInput.parent().find('div.error');
if (existingErrorDiv.length) {
  existingErrorDiv.remove();
  confirmPasswordInput.removeClass('error');
}

if (password !== confirmPassword) {
  const errorDiv = $('<div>')
    .text('Le mot de passe de confirmation ne correspond pas au mot de passe initial.')
    .addClass('error error-message error-container');

  confirmPasswordInput.parent().append(errorDiv);
  confirmPasswordInput.addClass('error');

  return false;
}

return true;
}


//---------------------------------

// Fonction générique pour valider un numéro de téléphone
function validatePhoneNumber(phoneNumberInput) {
const phoneNumber = phoneNumberInput.val();

const existingErrorDiv = phoneNumberInput.next('.error');
if (existingErrorDiv.length) {
  existingErrorDiv.remove();
  phoneNumberInput.removeClass('error');
}

const phoneRegex = /^(0|\+213)([0-9]){9}$/;

if (!phoneRegex.test(phoneNumber)) {
  const errorDiv = $('<div>')
    .text('Veuillez entrer un numéro de téléphone valide.')
    .addClass('error error-message error-container');

  phoneNumberInput.after(errorDiv);
  phoneNumberInput.addClass('error');

  return false;
}

return true;
}




//----------------------------------


// Fonction générique pour valider une plage de dates
function validateDateRange(arrivalDateInput, departureDateInput) {
const arrivalDateStr = arrivalDateInput.val();
const departureDateStr = departureDateInput.val();

const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Format YYYY-MM-DD

const existingErrorDiv = arrivalDateInput.next('.error');
if (existingErrorDiv.length) {
  existingErrorDiv.remove();
  arrivalDateInput.removeClass('error');
}

// Vérification du format de la date d'arrivée
if (!dateRegex.test(arrivalDateStr) || !moment(arrivalDateStr, 'YYYY-MM-DD', true).isValid()) {
  const errorDiv = $('<div>')
    .text('Veuillez entrer une date d\'arrivée valide (format YYYY-MM-DD).')
    .addClass('error error-message error-container');

  arrivalDateInput.after(errorDiv);
  arrivalDateInput.addClass('error');
  return false;
}

// Vérification du format de la date de départ
if (!dateRegex.test(departureDateStr) || !moment(departureDateStr, 'YYYY-MM-DD', true).isValid()) {
  const errorDiv = $('<div>')
    .text('Veuillez entrer une date de départ valide (format YYYY-MM-DD).')
    .addClass('error error-message error-container');

  departureDateInput.after(errorDiv);
  departureDateInput.addClass('error');
  return false;
}

const arrivalDate = moment(arrivalDateStr);
const departureDate = moment(departureDateStr);
const currentDate = moment();

// Vérification des autres conditions
if (arrivalDate.isSameOrAfter(departureDate)) {
  const errorDiv = $('<div>')
    .text('La date d\'arrivée doit être antérieure à la date de départ.')
    .addClass('error error-message error-container');

  arrivalDateInput.after(errorDiv);
  arrivalDateInput.addClass('error');
  return false;
}

if (arrivalDate.isBefore(currentDate) || departureDate.isBefore(currentDate)) {
  const errorDiv = $('<div>')
    .text('Les dates ne doivent pas être antérieures à la date actuelle.')
    .addClass('error error-message error-container');

  arrivalDateInput.after(errorDiv);
  arrivalDateInput.addClass('error');
  return false;
}

return true;
}

//----------------------------


// Fonction générique pour valider un nombre entier (positif)
function validatePositiveInteger(input) {
const existingErrorDiv = input.parent().find('div.error');
if (existingErrorDiv.length) {
  existingErrorDiv.remove();
  input.removeClass('error');
}

const integerValue = parseInt(input.val());

if (isNaN(integerValue) || !Number.isInteger(integerValue) || integerValue <= 0) {
  const errorDiv = $('<div>')
    .text('Veuillez entrer un nombre entier positif valide.')
    .addClass('error error-message error-container');

  input.parent().append(errorDiv);
  input.addClass('error');

  return false;
}

return true;
}




//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------


//------------------------------------------------------------

// Initialisation du formulaire  reserv
function initializeFormreserv() {
const requiredInputs = $('input');
const form = $('#reserv');


handleFormSubmission(form, [
  () => validateRequiredFields(requiredInputs, form),
  () => validateLettersOnly($('#full_name')),
  () => validateEmail($('#email')),
  () => validatePhoneNumber($('#phone')),
  () => validateDateRange($('#date1'), $('#date2')),
  () => validatePositiveInteger($('#adults')),
  () => validatePositiveInteger($('#children')),
  () => validatePositiveInteger($('#suite_quantity')),
  () => validatePositiveInteger($('#double_room_quantity')),
  () => validatePositiveInteger($('#single_room_quantity'))
  
 ]);
}

//------------------------------------------------------------

function handleFormSubmission(form, validationFunctions) {
form.submit(function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Run each validation function
  const isValid = validationFunctions.every(function (validationFunction) {
    return validationFunction();
  });

  // If all validations pass, submit the form
  if (isValid) {
    form.off('submit').submit();
  }
});
}

//------------------------------------------------------------

// Initialisation du formulaire  login
function initializeFormlogin() {
const requiredInputs = $('input');
const form = $('#login');


handleFormSubmission(form, [
  () => validateRequiredFields(requiredInputs, form),
  () => validateLettersOnly($('#username')),
  () => validatePassword($('#password'), /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Le mot de passe doit contenir au moins huit caractères, avec une combinaison de lettres majuscules, de lettres minuscules, de chiffres et de caractères spéciaux. Veuillez inclure au moins un caractère spécial parmi les suivants : @, $, !, %, *, #, &, ?")
 ]);
}

//------------------------------------------------------------

// Appel des fonctions d'initialisation lorsque le document est prêt
$(document).ready(function () {
initializeFormreserv();
initializeFormlogin();
});
