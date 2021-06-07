const closeX = document.querySelector(".close-modal");
const closeBtn = document.querySelector(".close-modal-btn");
const hide = document.querySelector('.modal')
closeX.addEventListener('click', (event) => {
  event.preventDefault();
  hide.style.display = "none";
})

closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  hide.style.display = "none";
})