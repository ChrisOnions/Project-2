const show = document.getElementById('modal-name');
// Request to delete the logged in session
const logoutButton = async (event) => {
  event.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })

  if (response.ok) {
    document.location.replace('/')
  } else {
    console.log(response.text);
    show.style.display = "block"
  }
}
document.querySelector('.submit').addEventListener('click', logoutButton)
