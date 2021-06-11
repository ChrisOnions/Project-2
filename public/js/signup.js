const show = document.getElementById('modal-name');
const errorText = document.getElementById('err-text')
const name = document.querySelector('#name-signup').value.trim();
const email = document.querySelector('#email-signup').value.trim();

// Signup request 
const signupFormHandler = async (event) => {
  event.preventDefault();

  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      errorText.innerHTML = `${response.status} ${response.statusText}, `
      show.style.display = "block"
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);