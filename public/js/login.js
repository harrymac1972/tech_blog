
// LogIn
const handleLogin = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // SignUp
  const handleSignup = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#signup-name').value.trim();
    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    
  if (username && email && password) {

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        const errorMessage = await response.text();
        // displayErrorMessage(errorMessageElement, errorMessage);
        console.error('Error during signup:', errorMessage);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  }
  };
  
  // get variables
  document
    .querySelector('#form-login')
    .addEventListener('submit', handleLogin);  
    document
    .querySelector('#form-signup')
    .addEventListener('submit', handleSignup);
