// Fonction d'initialisation du formulaire
// fonction en commun 
function togglePasswordVisibility() {
  console.log('Fonction appelée');
  const passwordInput = $('#password');
  const togglePassword = $('#toggle-password');

  if (passwordInput.attr('type') === 'password') {
    passwordInput.attr('type', 'text');
    togglePassword.text('👀');
  } else {
    passwordInput.attr('type', 'password');
    togglePassword.text('👁️');
  }
}

function toggleConfirmPasswordVisibility() {
  const confirmPasswordInput = $('#confirm-password');
  const toggleConfirmPassword = $('#toggle-confirm-password');

  if (confirmPasswordInput.attr('type') === 'password') {
    confirmPasswordInput.attr('type', 'text');
    toggleConfirmPassword.text('👀');
  } else {
    confirmPasswordInput.attr('type', 'password');
    toggleConfirmPassword.text('👁️');
  }
}
function validateEmail() {
  const emailInput = $('#email');
  const email = emailInput.val();
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Supprimer les messages d'erreur existants
  const existingErrorDiv = emailInput.parent().find('div.error');
  if (existingErrorDiv.length) {
    existingErrorDiv.remove();
    emailInput.removeClass('error');
  }

  if (!emailRegex.test(email)) {
    // Créer un élément div pour afficher le message d'erreur
    const errorDiv = $('<div>')
      .text('Veuillez entrer une adresse email valide.')
      .addClass('error error-message error-container');

    // Ajouter l'élément div à la page, à côté de l'input
    emailInput.parent().append(errorDiv);

    // Ajouter la classe 'error' à l'input
    emailInput.addClass('error');

    return false;
  }

  return true;
}
function validatePassword() {
  const passwordInput = $('#password');
  const password = passwordInput.val();

  // Supprimer les messages d'erreur existants
  const existingErrorDiv = passwordInput.parent().find('div.error');
  if (existingErrorDiv.length) {
    existingErrorDiv.remove();
    passwordInput.removeClass('error');
  }

  // Vérifier si le mot de passe est valide
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    // Créer un élément div pour afficher le message d'erreur
    const errorDiv = $('<div>')
      .text(
        "Le mot de passe doit contenir au moins huit caractères, avec une combinaison de lettres majuscules, de lettres minuscules, de chiffres et de caractères spéciaux. Veuillez inclure au moins un caractère spécial parmi les suivants : @, $, !, %, *, #, &, ?"
      )
      .addClass('error error-message error-container');

    // Ajouter l'élément div à la page, à côté de l'input
    passwordInput.parent().append(errorDiv);

    // Ajouter la classe 'error' à l'input
    passwordInput.addClass('error');

    return false;
  }

  return true;
}
function validateConfirmPassword() {
  const passwordInput = $('#password');
  const confirmPasswordInput = $('#confirm-password');
  const password = passwordInput.val();
  const confirmPassword = confirmPasswordInput.val();

  // Supprimer les messages d'erreur existants
  const existingErrorDiv = confirmPasswordInput.parent().find('div.error');
  if (existingErrorDiv.length) {
    existingErrorDiv.remove();
    confirmPasswordInput.removeClass('error');
  }

  if (password !== confirmPassword) {
    // Créer un élément div pour afficher le message d'erreur
    const errorDiv = $('<div>')
      .text('Le mot de passe de confirmation ne correspond pas au mot de passe initial.')
      .addClass('error error-message error-container');

    // Ajouter l'élément div à la page, à côté de l'input de confirmation du mot de passe
    confirmPasswordInput.parent().append(errorDiv);

    // Ajouter la classe 'error' à l'input de confirmation du mot de passe
    confirmPasswordInput.addClass('error');

    return false;
  }

  return true;
}
function validateLettersOnly(input) {
  // Supprimer les messages d'erreur existants
  const existingErrorDiv = input.parent().find('div.error');
  if (existingErrorDiv.length) {
    existingErrorDiv.remove();
    input.removeClass('error');
  }

  const lettersRegex = /^[a-zA-Z_ ]+$/;
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
function validatePhoneNumber() {
  const phoneNumberInput = $('#phone');
  const phoneNumber = phoneNumberInput.val();

  // Supprimer les messages d'erreur existants
  const existingErrorDiv = phoneNumberInput.next('.error');
  if (existingErrorDiv.length) {
    existingErrorDiv.remove();
    phoneNumberInput.removeClass('error');
  }

  // Expression régulière pour valider le numéro de téléphone
  const phoneRegex = /^(0|\+213)([0-9]){9}$/;

  // Vérifier si le numéro de téléphone est valide
  if (!phoneRegex.test(phoneNumber)) {
    // Créer un élément div pour afficher le message d'erreur
    const errorDiv = $('<div>')
      .text('Veuillez entrer un numéro de téléphone valide.')
      .addClass('error error-message error-container');

    // Ajouter l'élément div à la page, à côté de l'input
    phoneNumberInput.after(errorDiv);

    // Ajouter la classe 'error' à l'input
    phoneNumberInput.addClass('error');

    return false;
  }

  return true;
}
//fonction generique pour gerer une date de naiss
function validateDateOfBirth(dateInput) {
  const dateOfBirth = dateInput.val();
  const dateRegex = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

  const existingErrorDiv = dateInput.parent().find('div.error');
  if (existingErrorDiv.length) {
    existingErrorDiv.remove();
    dateInput.removeClass('error');
  }

  if (!dateRegex.test(dateOfBirth)) {
    const errorDiv = $('<div>')
      .text("Veuillez entrer une date de naissance valide au format YYYY-MM-DD.")
      .addClass('error error-message error-container');

    dateInput.parent().append(errorDiv);
    dateInput.addClass('error');

    return false;
  }

  const parts = dateOfBirth.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);

  const currentYear = new Date().getFullYear();

  if (year > currentYear || month > 12 || day > 31) {
    const errorDiv = $('<div>')
      .text("Veuillez entrer une date de naissance valide.")
      .addClass('error error-message error-container');

    dateInput.parent().append(errorDiv);
    dateInput.addClass('error');

    return false;
  }

  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    const errorDiv = $('<div>')
      .text("Le mois spécifié ne peut pas avoir plus de 30 jours.")
      .addClass('error error-message error-container');

    dateInput.parent().append(errorDiv);
    dateInput.addClass('error');

    return false;
  }

  if (month === 2) {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    if (isLeapYear && day > 29) {
      const errorDiv = $('<div>')
        .text("Le mois de février d'une année bissextile ne peut pas avoir plus de 29 jours.")
        .addClass('error error-message error-container');

      dateInput.parent().append(errorDiv);
      dateInput.addClass('error');

      return false;
    } else if (!isLeapYear && day > 28) {
      const errorDiv = $('<div>')
        .text("Le mois de février d'une année non bissextile ne peut pas avoir plus de 28 jours.")
        .addClass('error error-message error-container');

      dateInput.parent().append(errorDiv);
      dateInput.addClass('error');

      return false;
    }
  }

  return true;
}
function validateDuration() {
  const input = $('#duration');
  const durationValue = input.val().trim();

  // Expression régulière pour le format "N jours N heures N minutes" ou "N heures N minutes"
  const durationRegex = /^(\d+j\s*)?(\d+h\s*)?(\d+j\s*\d+h\s*\d+min\s*)?(\d+j\s*\d+min\s*)?(\d+h\s*\d+min\s*)?$/;






  // Supprimer les messages d'erreur existants
  const existingErrorDiv = input.parent().find('div.error');
  if (existingErrorDiv.length) {
      existingErrorDiv.remove();
      input.removeClass('error');
  }

  // Test de la chaîne avec l'expression régulière
  let isValid = durationRegex.test(durationValue);

  if (durationValue === '0j' || durationValue === '0h' || durationValue === '0min' || durationValue==="0j0h0min" || durationValue==="0h0min" || durationValue==="0j0h" ||durationValue==="0j0h0min" ) {
      const errorDiv = $('<div>')
          .text("La durée ne peut pas être égale à '0j', '0h' ou '0min'.")
          .addClass('error error-message error-container');

      // Ajouter l'élément div à la page, à côté de l'input
      input.parent().append(errorDiv);

      isValid = false;
  }

  if (!isValid) {
      const errorDiv = $('<div>')
          .text('Veuillez entrer une valeur ex: 1j2h30min ou 2h30min ou 5j30mi')
          .addClass('error error-message error-container');

      // Ajouter l'élément div à la page, à côté de l'input
      input.parent().append(errorDiv);
  }

  return isValid;
}
function validatecapacity() {
  const input = $("input[name='capacity']");

  // Supprimer les messages d'erreur existants
  const existingErrorDiv = input.parent().find('div.error');
  if (existingErrorDiv.length) {
      existingErrorDiv.remove();
      input.removeClass('error');
  }

  var inputValue = input.val();
  var regex = /^[1-9]\d*$/;

  // Vérifier si la valeur correspond à l'expression régulière
  if (!regex.test(inputValue)) 
  {
    const errorDiv = $('<div>')
    .text('Veuillez entrer un nombre valid.')
    .addClass('error error-message error-container');

// Ajouter l'élément div à la page, à côté de l'input
input.parent().append(errorDiv);
return false;
  }
return true;
}
  
//-------------------------->
//user
function initializeForm() {
  const requiredInputs = $('input');
  const form = $('#f1');

  

  function validateRequiredFields() {
    let isValid = true;

    requiredInputs.each(function () {
      const input = $(this);

      // Supprimer les messages d'erreur existants
      const existingErrorDiv = input.parent().find('div.error');
      if (existingErrorDiv.length) {
        existingErrorDiv.remove();
        input.removeClass('error');
      }

      if (input.val() === '') {
        // Créer un élément div pour afficher le message d'erreur
        const errorDiv = $('<div>')
          .text('Veuillez remplir ce champ.')
          .addClass('error error-message error-container');

        // Ajouter un gestionnaire d'événements au label pour le clic
        errorDiv.click(function () {
          input.focus();
        });

        // Ajouter l'élément div à la page, à côté de l'input
        input.parent().append(errorDiv);

        // Ajouter la classe 'error' à l'input
        input.addClass('error');

        isValid = false;
      }

      // Ajouter un gestionnaire d'événements pour l'événement de saisie
      input.on('input', function () {
        // Si l'utilisateur commence à écrire, supprimer le message d'erreur
        const existingErrorDiv = input.parent().find('div.error');
        if (existingErrorDiv.length) {
          existingErrorDiv.remove();
          input.removeClass('error');
        }
      });
    });

    return isValid;
  }

  
 

  

  form.submit(function (event) {
    event.preventDefault();
    let isValid =
      validateRequiredFields() &&validateLettersOnly($('#username'))&&
      validateEmail() &&validatePhoneNumber()&&validateDateOfBirth($('#birth'))&&
      validatePassword() &&
      validateConfirmPassword();

    if (isValid) {
      form[0].submit();
    }
  });
}
//-----------------------------------------------> 
//propretaire
// Fonction d'initialisation du formulaire
function initializeFormprop() {
  const requiredInputs = $('input');
  const form = $('#prop');

  function validateRequiredFields() {
    let isValid = true;

    requiredInputs.each(function () {
      const input = $(this);

      // Supprimer les messages d'erreur existants
      const existingErrorDiv = input.parent().find('div.error');
      if (existingErrorDiv.length) {
        existingErrorDiv.remove();
        input.removeClass('error');
      }

      if (input.val() === '') {
        // Créer un élément div pour afficher le message d'erreur
        const errorDiv = $('<div>')
          .text('Veuillez remplir ce champ.')
          .addClass('error error-message error-container');

        // Ajouter un gestionnaire d'événements au label pour le clic
        errorDiv.click(function () {
          input.focus();
        });

        // Ajouter l'élément div à la page, à côté de l'input
        input.parent().append(errorDiv);

        // Ajouter la classe 'error' à l'input
        input.addClass('error');

        isValid = false;
      }

      // Ajouter un gestionnaire d'événements pour l'événement de saisie
      input.on('input', function () {
        // Si l'utilisateur commence à écrire, supprimer le message d'erreur
        const existingErrorDiv = input.parent().find('div.error');
        if (existingErrorDiv.length) {
          existingErrorDiv.remove();
          input.removeClass('error');
        }
      });
    });

    return isValid;
  }


  form.submit(function (event) {
    event.preventDefault();
    let isValid =
      validateRequiredFields() &&validateLettersOnly($('#username'))&&
      validateEmail() &&
      validatePassword() &&
      validateConfirmPassword();

    if (isValid) {
      form[0].submit();
    }
  });
}
//ajouthotel
function initializeFormhotel() {
  
  const formajouthotel = $('#ajouthotel');

  
  function validateRequiredFields() {
    let isValid = true;
    let roomTypeSelected = false;
    let roomTypeSelectedlang = false; // Variable pour suivre si au moins un type de chambre est sélectionné

    // Sélecteur spécifique pour les champs requis
    const requiredInputs = $("input[type='text'], input[type='file'], textarea[name='description'], input[type='checkbox'][name='room_types[]'], input[type='checkbox'][name='languages[]']");

    requiredInputs.each(function () {
        const input = $(this);

        // Supprimer les messages d'erreur existants
        const existingErrorDiv = input.parent().find('div.error');
        if (existingErrorDiv.length) {
            existingErrorDiv.remove();
            input.removeClass('error');
        }

        // Si le champ est vide et n'est pas coché
        if (input.val() === '' && !input.prop('checked')) {
            // Créer un élément div pour afficher le message d'erreur
            const errorDiv = $('<div>')
                .text('Veuillez remplir ce champ.')
                .addClass('error error-message error-container');

            // Ajouter un gestionnaire d'événements au label pour le clic
            errorDiv.click(function () {
                input.focus();
            });

            // Ajouter l'élément div à la page, à côté de l'input
            input.parent().append(errorDiv);

            // Ajouter la classe 'error' à l'input
            input.addClass('error');

            isValid = false;
        }

        // Si le champ de type checkbox est associé à 'room_types[]', marquez qu'au moins un type de chambre est sélectionné
        if (input.attr('type') === 'checkbox' && input.attr('name') === 'room_types[]' && input.prop('checked')) {
            roomTypeSelected = true;
        }
        if (input.attr('type') === 'checkbox' && input.attr('name') === 'languages[]' && input.prop('checked')) {
          roomTypeSelectedlang = true;
      }
    });

    // Ajouter une vérification supplémentaire pour le message d'erreur de chambre
    if (!roomTypeSelected) {
        const roomTypeErrorDiv = $('<div>')
            .text('Veuillez sélectionner au moins un type de chambre.')
            .addClass('error error-message error-container');

        // Ajouter l'élément div à la page, à côté de la première checkbox 'room_types[]'
        $('.form-group2 input[type="checkbox"][name="room_types[]"]').first().parent().append(roomTypeErrorDiv);

        isValid = false;
    }
    if (!roomTypeSelectedlang) {
      const roomTypeErrorDiv = $('<div>')
          .text('Veuillez sélectionner au moins une langue.')
          .addClass('error error-message error-container');

      // Ajouter l'élément div à la page, à côté de la première checkbox 'room_types[]'
      $('.form-group2 input[type="checkbox"][name="languages[]"]').first().parent().append(roomTypeErrorDiv);

      isValid = false;
  }

    return isValid;
}


 
 
  function validateRoom() {
    // Tableau pour suivre les types de chambre sélectionnés
    const selectedRoomTypes = ['single', 'double', 'suite'];
  
    // Vérifier chaque type de chambre sélectionné
    for (const roomType of selectedRoomTypes) {
      const checkbox = $(`#${roomType}`);
      const descriptionInput = $(`#room_description_${roomType}`);
      const numRoomsInput = $(`#number_of_rooms_${roomType}`);
      const roomRateInput = $(`#room_rate_${roomType}`);
  
      // Ajoutez des console.log pour déboguer
      console.log(`Type de chambre : ${roomType}`);
      console.log(`Checkbox : ${checkbox.length}`);
      console.log(`Description : ${descriptionInput.length}`);
      console.log(`Numéro de chambres : ${numRoomsInput.length}`);
      console.log(`Tarif : ${roomRateInput.length}`);
  
      // Vérifier si le type de chambre est sélectionné
      if (checkbox.prop('checked')) {
         // Vérifier si le champ du nombre de chambres est vide
         if (numRoomsInput.val() === '' || numRoomsInput.val() <= 0||isNaN(numRoomsInput.val())||!Number.isInteger(parseFloat(numRoomsInput.val()))) {
          alert(`Veuillez entrer un nombre entier valide de chambres pour le type ${roomType}.`);
          return false;
        }
        // Vérifier si la description est vide
        if (descriptionInput.val() === '') {
          alert(`Veuillez entrer la description pour le type ${roomType}.`);
          return false;
        }
  
       
  
        // Vérifier si le champ du tarif est vide
        if (roomRateInput.val() === '' || roomRateInput.val() <= 0 || isNaN(roomRateInput.val()) ) {
          alert(`Veuillez entrer un tarif valide pour le type ${roomType}.`);
          return false;
        }
      }
      else if(descriptionInput.val()!="") {

        if(checkbox.prop('checked')==false)
        {
          alert(`Veuillez veuillez selectionner la chambre de ce type ${roomType}.`);
          return false;
        }
        if (numRoomsInput.val() === '' || numRoomsInput.val() <= 0||isNaN(numRoomsInput.val())||!Number.isInteger(parseFloat(numRoomsInput.val()))) {
          alert(`Veuillez entrer un nombre entier valide de chambres pour le type ${roomType}.`);
          return false;
        }
        if (roomRateInput.val() === '' || roomRateInput.val() <= 0 || isNaN(roomRateInput.val()) ) {
          alert(`Veuillez entrer un tarif valide pour le type ${roomType}.`);
          return false;
        }
    }
   else if(numRoomsInput.val()!="") 
    {
      if(checkbox.prop('checked')==false)
      {
        alert(`Veuillez veuillez selectionner la chambre de ce type ${roomType}.`);
        return false;
      }
      if(descriptionInput.val() === '') {
        alert(`Veuillez entrer la description pour le type ${roomType}.`);
        return false;
      }
      if (roomRateInput.val() === '' || roomRateInput.val() <= 0 || isNaN(roomRateInput.val()) ) {
        alert(`Veuillez entrer un tarif valide pour le type ${roomType}.`);
        return false;
      }
      
    }
  else if(roomRateInput.val()!="")
  {
    if(checkbox.prop('checked')==false)
    {
      alert(`Veuillez veuillez selectionner la chambre de ce type ${roomType}.`);
      return false;
    }
    if(descriptionInput.val() === '') {
      alert(`Veuillez entrer la description pour le type ${roomType}.`);
      return false;
    }
    if (numRoomsInput.val() === '' || numRoomsInput.val() <= 0||isNaN(numRoomsInput.val())||!Number.isInteger(parseFloat(numRoomsInput.val()))) {
      alert(`Veuillez entrer un nombre entier valide de chambres pour le type ${roomType}.`);
      return false;
    }
  }
   
    }
    return true;
}
  

  formajouthotel.submit(function (event) {

    event.preventDefault();
    let isValid =
   validateRequiredFields() && validateRoom() &&  validateLettersOnly($('#hotel_name'))&& validatePhoneNumber()&&
      validateEmail();

    if (isValid) {
      formajouthotel[0].submit();
    }
  });
}
//guide
// Fonction d'initialisation du formulaire
function initializeFormguide() {
  const requiredInputs = $('input');
  const formg = $('#guide');
  let roomTypeSelectedlang = false; // Variable pour suivre si au moins un type de chambre est sélectionné

  function validateRequiredFields() {
    let isValid = true;

    requiredInputs.each(function () {
      const input = $(this);

      // Supprimer les messages d'erreur existants
      const existingErrorDiv = input.parent().find('div.error');
      if (existingErrorDiv.length) {
        existingErrorDiv.remove();
        input.removeClass('error');
      }

      if (input.val() === '') {
        // Créer un élément div pour afficher le message d'erreur
        const errorDiv = $('<div>')
          .text('Veuillez remplir ce champ.')
          .addClass('error error-message error-container');

        // Ajouter un gestionnaire d'événements au label pour le clic
        errorDiv.click(function () {
          input.focus();
        });

        // Ajouter l'élément div à la page, à côté de l'input
        input.parent().append(errorDiv);

        // Ajouter la classe 'error' à l'input
        input.addClass('error');

        isValid = false;
      }

      // Ajouter un gestionnaire d'événements pour l'événement de saisie
      input.on('input', function () {
        // Si l'utilisateur commence à écrire, supprimer le message d'erreur
        const existingErrorDiv = input.parent().find('div.error');
        if (existingErrorDiv.length) {
          existingErrorDiv.remove();
          input.removeClass('error');
        }
      });
      if (input.attr('type') === 'checkbox' && input.attr('name') === 'languages[]' && input.prop('checked')) {
        roomTypeSelectedlang = true;
    } });
    if (!roomTypeSelectedlang) {
      const roomTypeErrorDiv = $('<div>')
          .text('Veuillez sélectionner au moins une langue.')
          .addClass('error error-message error-container');

      // Ajouter l'élément div à la page, à côté de la première checkbox 'room_types[]'
      $('.form-group2 input[type="checkbox"][name="languages[]"]').first().parent().append(roomTypeErrorDiv);

      isValid = false;
  }

    return isValid;
  }


  formg.submit(function (event) {
    event.preventDefault();
    let isValid =
      validateRequiredFields() &&validateLettersOnly($('#username'))&&
      validateEmail() &&validatePhoneNumber()&&validateDateOfBirth($('#birth'))&&
      validatePassword() &&
      validateConfirmPassword();

    if (isValid) {
      formg[0].submit();
    }
  });
}
//sortieprivee
// Fonction d'initialisation du formulaire
function initializeFormspriv() {
  const requiredInputs = $('input');
  const formg = $('#spriv');
  let roomTypeSelectedlang = false; // Variable pour suivre si au moins un type de chambre est sélectionné

  function validateRequiredFields() {
    let isValid = true;

    requiredInputs.each(function () {
      const input = $(this);

      // Supprimer les messages d'erreur existants
      const existingErrorDiv = input.parent().find('div.error');
      if (existingErrorDiv.length) {
        existingErrorDiv.remove();
        input.removeClass('error');
      }

      if (input.val() === '') {
        // Créer un élément div pour afficher le message d'erreur
        const errorDiv = $('<div>')
          .text('Veuillez remplir ce champ.')
          .addClass('error error-message error-container');

        // Ajouter un gestionnaire d'événements au label pour le clic
        errorDiv.click(function () {
          input.focus();
        });

        // Ajouter l'élément div à la page, à côté de l'input
        input.parent().append(errorDiv);

        // Ajouter la classe 'error' à l'input
        input.addClass('error');

        isValid = false;
      }

      // Ajouter un gestionnaire d'événements pour l'événement de saisie
      input.on('input', function () {
        // Si l'utilisateur commence à écrire, supprimer le message d'erreur
        const existingErrorDiv = input.parent().find('div.error');
        if (existingErrorDiv.length) {
          existingErrorDiv.remove();
          input.removeClass('error');
        }
      });
      if (input.attr('type') === 'checkbox' && input.attr('name') === 'languages[]' && input.prop('checked')) {
        roomTypeSelectedlang = true;
    } });
    if (!roomTypeSelectedlang) {
      const roomTypeErrorDiv = $('<div>')
          .text('Veuillez sélectionner au moins une langue.')
          .addClass('error error-message error-container');

      // Ajouter l'élément div à la page, à côté de la première checkbox 'room_types[]'
      $('.form-group2 input[type="checkbox"][name="languages[]"]').first().parent().append(roomTypeErrorDiv);

      isValid = false;
  }

    return isValid;
  }


  formg.submit(function (event) {
    event.preventDefault();
    let isValid =
      validateRequiredFields() &&validateLettersOnly($('#full_name'))&&
      validateEmail() &&validatePhoneNumber()&&validateDateOfBirth($('#date'))&& validateDuration()
       && validatecapacity() && validateLettersOnly("#guide_name");

    if (isValid) {
      formg[0].submit();
    }
  });
}
// ajoutsortie
function initializeFormsortie() {
 
  const formajoutsortie = $('#ajoutsortie');

  function validateRequiredFields() {
    let isValid = true;
    
    // Sélecteur spécifique pour les champs requis
    const requiredInputs = $("input[type='text'], input[type='number'], textarea[name='description'], textarea[name='activities']");

    requiredInputs.each(function () {
        const input = $(this);

        // Supprimer les messages d'erreur existants
        const existingErrorDiv = input.parent().find('div.error');
        if (existingErrorDiv.length) {
            existingErrorDiv.remove();
            input.removeClass('error');
        }

        // Si le champ est vide et n'est pas coché
        if (input.val() === '' && !input.prop('checked')) {
            // Créer un élément div pour afficher le message d'erreur
            const errorDiv = $('<div>')
                .text('Veuillez remplir ce champ.')
                .addClass('error error-message error-container');

            // Ajouter un gestionnaire d'événements au label pour le clic
            errorDiv.click(function () {
                input.focus();
            });

            // Ajouter l'élément div à la page, à côté de l'input
            input.parent().append(errorDiv);

            // Ajouter la classe 'error' à l'input
            input.addClass('error');

            isValid = false;
        }

        // Vérifier si le champ de type nombre est inférieur ou égal à zéro ou n'est pas un nombre
        if (input.attr('attribut') === 'attribut' && (input.val() <= 0 || isNaN(input.val()))) {
            const errorDiv = $('<div>')
                .text('Veuillez entrer une valeur numérique valide.')
                .addClass('error error-message error-container');

            // Ajouter l'élément div à la page, à côté de l'input
            input.parent().append(errorDiv);

            isValid = false;
        }
    });

    return isValid;
}





formajoutsortie.submit(function (event) {
    event.preventDefault();
    let isValid =
     validateRequiredFields() && validateLettersOnly($('#title')) && validateDuration() && validatecapacity();

    if (isValid) {
      formajoutsortie[0].submit();
    }
  });
}
// Appel de la fonction d'initialisation du formulaire lorsque le document est prêt
$(document).ready(initializeForm);

// Appel de la fonction d'initialisation du formulaire lorsque le document est prêt
$(document).ready(initializeFormprop);

  // Utiliser $(document).ready() pour s'assurer que le DOM est entièrement chargé
  $(document).ready(initializeFormhotel);
  //------------------------
  $(document).ready(initializeFormsortie);
//-------------------------------
$(document).ready(initializeFormguide);
//----------------------------------------------->
$(document).ready(initializeFormspriv);
//--------------------------------------------->
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