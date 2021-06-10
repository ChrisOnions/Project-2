const show = document.getElementById('modal-name');
const errorText = document.getElementById('err-text')
console.log(show);
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();


  if (email && password) {
    // Send a POST request to the API endpoint.
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
      const output = await response.json()
      errorText.innerHTML = ` ${output.message} <br> ${response.status} `
      console.log(response.statusText);

      console.log();

      show.style.display = "block"
    }
  }
};


document
  .querySelector('.button')
  .addEventListener('click', loginFormHandler);
