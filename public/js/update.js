// https://guides.emberjs.com/v1.10.0/templates/actions/

const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
  event.preventDefault();
  sessionStorage.setItem("isexpandable", true)
})
