const form = document.getElementById("registrationForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const course = document.getElementById("course");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const courseError = document.getElementById("courseError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const successMessage = document.getElementById("successMessage");

function showError(input, errorElement, message) {
  input.classList.add("error");
  input.classList.remove("success");
  errorElement.textContent = message;
}

function showSuccess(input, errorElement) {
  input.classList.remove("error");
  input.classList.add("success");
  errorElement.textContent = "";
}

function validateName() {
  const nameValue = fullName.value.trim();

  if (nameValue === "") {
    showError(fullName, nameError, "Full name is required.");
    return false;
  }

  if (nameValue.length < 3) {
    showError(fullName, nameError, "Full name must be at least 3 characters.");
    return false;
  }

  showSuccess(fullName, nameError);
  return true;
}

function validateEmail() {
  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "") {
    showError(email, emailError, "Email address is required.");
    return false;
  }

  if (!emailPattern.test(emailValue)) {
    showError(email, emailError, "Please enter a valid email address.");
    return false;
  }

  showSuccess(email, emailError);
  return true;
}

function validatePhone() {
  const phoneValue = phone.value.trim();
  const phonePattern = /^[0-9]{10,15}$/;

  if (phoneValue === "") {
    showError(phone, phoneError, "Phone number is required.");
    return false;
  }

  if (!phonePattern.test(phoneValue)) {
    showError(phone, phoneError, "Phone number must contain 10 to 15 digits.");
    return false;
  }

  showSuccess(phone, phoneError);
  return true;
}

function validateCourse() {
  if (course.value === "") {
    showError(course, courseError, "Please select a course.");
    return false;
  }

  showSuccess(course, courseError);
  return true;
}

function validatePassword() {
  const passwordValue = password.value.trim();

  if (passwordValue === "") {
    showError(password, passwordError, "Password is required.");
    return false;
  }

  if (passwordValue.length < 6) {
    showError(password, passwordError, "Password must be at least 6 characters.");
    return false;
  }

  showSuccess(password, passwordError);
  return true;
}

function validateConfirmPassword() {
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (confirmPasswordValue === "") {
    showError(confirmPassword, confirmPasswordError, "Please confirm your password.");
    return false;
  }

  if (confirmPasswordValue !== passwordValue) {
    showError(confirmPassword, confirmPasswordError, "Passwords do not match.");
    return false;
  }

  showSuccess(confirmPassword, confirmPasswordError);
  return true;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isCourseValid = validateCourse();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isCourseValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();

    const inputs = form.querySelectorAll("input, select");
    inputs.forEach((input) => {
      input.classList.remove("success");
    });
  } else {
    successMessage.textContent = "";
  }
});

fullName.addEventListener("input", validateName);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);
course.addEventListener("change", validateCourse);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);