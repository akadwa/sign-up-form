// Query Selectors
const inputFields = document.querySelectorAll('input');

const nameInput = document.querySelector('#name');
const nameValidationDiv = document.querySelector('.name-validation');

const surnameInput = document.querySelector('#surname');
const surnameValidationDiv = document.querySelector('.surname-validation');

const emailInput = document.querySelector('#email');
const emailValidationDiv = document.querySelector('.email-validation');

const phoneNumberInput = document.querySelector('#phone-number');
const phoneNumberValidationDiv = document.querySelector('.phone-number-validation');

const passwordInput = document.querySelector('#password');
const passwordValidationDiv = document.querySelector('.password-validation');

const confirmPasswordInput = document.querySelector('#confirm-password');
const confirmPasswordValidationDiv = document.querySelector('.confirm-password-validation');

const submitButton = document.querySelector('.submit-btn');

// Validates if an input field has been correctly filled in
const validate = (inputElement, validationDiv, errorString) => {
  if (inputElement.validity.valid) {
    inputElement.style.outline = "0.2vw solid green";
    validationDiv.innerHTML = "&check;";
    validationDiv.style.color = "green";
  } else if (!inputElement.validity.valid) {
    inputElement.style.outline = "0.2vw solid red";
    validationDiv.innerHTML = `&#9888; ${errorString}`;
    validationDiv.style.color = "red";
  }
}

// Displays the format of which an input must adhere to
const displayFormat = (inputElement, validationDiv, formatString) => {
  inputElement.style.outline = "0.2vw solid orange";
  validationDiv.style.color = "orange";
  validationDiv.innerHTML = `&#33; ${formatString}`;
}

// Checks whether the inputted passwords in the 'password' and 'confirm password' fields match
const comparePasswords = () => {
  validate(confirmPasswordInput, confirmPasswordValidationDiv, "Please re-enter your password");

  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordInput.style.outline = "0.2vw solid red";
    confirmPasswordValidationDiv.innerHTML = `&#9888; Passwords do not match`;
    confirmPasswordValidationDiv.style.color = "red";
  };
}


// Event Listeners

nameInput.addEventListener("focusout", () => {
  validate(nameInput, nameValidationDiv, "Please enter your name")
});

surnameInput.addEventListener("focusout", () => {
  validate(surnameInput, surnameValidationDiv, "Please enter your surname");
});

emailInput.addEventListener("focus", () => {
  displayFormat(emailInput, emailValidationDiv, "example@site.org")
})

emailInput.addEventListener("focusout", () => {
  validate(emailInput, emailValidationDiv, "Please your email address");
});

phoneNumberInput.addEventListener("focus", () => {
  displayFormat(phoneNumberInput, phoneNumberValidationDiv, "Minimum 7 digits long");
});

phoneNumberInput.addEventListener("focusout", () => {
  validate(phoneNumberInput, phoneNumberValidationDiv, "Please enter your phone number");
});

passwordInput.addEventListener("focus", () => {
  displayFormat(passwordInput, passwordValidationDiv, "Minimum 8 characters, at least one letter and one number")
});

passwordInput.addEventListener("focusout", () => {
  validate(passwordInput, passwordValidationDiv, "Please enter your password");
})

confirmPasswordInput.addEventListener("focusout", () => {
  comparePasswords();
});
