// Function to register user
function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Store username and password in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  
    // Show login form after successful registration
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  
    // Clear registration form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  }
  
  // Function to log in user
  function login() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;
  
    // Retrieve username and password from local storage
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');
  
    // Check if the entered username and password match the stored values
    if (loginUsername === username && loginPassword === password) {
      alert('Login successful!');
      // Add your desired logic here, such as redirecting to a different page
    } else {
      alert('Invalid username or password!');
    }
  
    // Clear login form fields
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
  }
  
  // Check if a user is already registered
  window.onload = function() {
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');
  
    if (username && password) {
      // Hide registration form and show login form
      document.getElementById('registrationForm').style.display = 'none';
      document.getElementById('loginForm').style.display = 'block';
    }
  };
  