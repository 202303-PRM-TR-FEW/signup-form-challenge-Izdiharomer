const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("form");
const error = document.getElementById("error");

function validateEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  if (firstName.value === '') {
      alert('You should enter your first name')
  } else if (lastName.value === '') {
      alert('You should enter your last name')
  } else if (email.value === '') {
      alert('You should enter an email address')
  } else if (!validateEmail(email.value)) {
      alert ('Please enter a valid email address')
  } else if (password.value === ''){
      alert('You should enter your password')
  } else if (password.value.length < 8 ) {
      alert('Your password must be at least 8 characters long')
  } else {
      alert('The form is successfully submitted')
  }
});
