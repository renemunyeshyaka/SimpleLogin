// Show specific form (login, signup, forgot password)
function toggleForms(formName) {
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => form.classList.remove('active'));
  document.getElementById(`${formName}-form`).classList.add('active');
}

// Login function
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (username && password) {
      alert('Logged in successfully!');
  } else {
      alert('Please fill in all fields!');
  }
}

// Signup function with password validation
function signup() {
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  const passwordConfirm = document.getElementById('signup-password-confirm').value;

  if (!username || !password || !passwordConfirm) {
      alert('Please fill in all fields!');
      return;
  }

  // Password validation
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/; // at least 8 characters, 1 letter, 1 number
  if (!password.match(passwordPattern)) {
      alert('Password must be at least 8 characters long, contain at least one letter and one number!');
      return;
  }

  if (password !== passwordConfirm) {
      alert('Passwords do not match!');
      return;
  }

  alert('Account created successfully!');
}

// Forgot password function
function forgotPassword() {
  const email = document.getElementById('forgot-email').value;

  if (!email) {
      alert('Please enter your email address!');
      return;
  }

  alert(`Password reset instructions have been sent to ${email}.`);
}

// Show the login form by default
toggleForms('login');
