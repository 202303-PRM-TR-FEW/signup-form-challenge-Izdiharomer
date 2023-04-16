// Create a function to validate input fields
function validateInput(inputField) {
    if (inputField.value === '') {
      inputField.nextElementSibling.style.display = 'block';
      inputField.style.border = '1px solid #f00';
      return false;
    } else {
      inputField.nextElementSibling.style.display = 'none';
      inputField.style.border = '1px solid blue';
      return true;
    }
  }
  
  // Add event listeners to all input fields
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  
  firstName.addEventListener('blur', function() {
    validateInput(firstName);
  });
  
  lastName.addEventListener('blur', function() {
    validateInput(lastName);
  });
  
  email.addEventListener('blur', function() {
    validateInput(email);
  });
  
  password.addEventListener('blur', function() {
    validateInput(password);
  });
  
  //Add event listener to form submit button
  const submitButton = document.getElementById('submitButton');
  const form = document.getElementById('form');
  const error = document.getElementById('error');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form submission
  
    const isValid = validateInput(firstName) && validateInput(lastName) && validateInput(email) && validateInput(password);
  
    if (!isValid) {
      error.innerHTML = 'Please fill in all fields';
      return;
    }
  
    // If form is valid, submit it
    //...
  });
  