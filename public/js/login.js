const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();


  if (email && password) {
    // Send a POST request to the API endpoint.
    console.log(email, password);
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/home');
    } else {
      alert('Incorrect email or password, please try again');
    }
  }
};


document
  .querySelector('.button')
  .addEventListener('click', loginFormHandler);