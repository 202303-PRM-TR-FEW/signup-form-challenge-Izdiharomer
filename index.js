
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
  
  
  const submitButton = document.getElementById('submitButton');
  const form = document.getElementById('form');
  const error = document.getElementById('error');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); 
  
    const isValid = validateInput(firstName) && validateInput(lastName) && validateInput(email) && validateInput(password);
  
    if (!isValid) {
      error.innerHTML = 'Please fill in all fields';
      return;
    }

  });
  