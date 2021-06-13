const closeBtn = document.querySelector(".close-modal-btn");
const closeX = document.querySelector(".close-modal");
const hide = document.querySelector('.modal');

// Modal X button close

closeX.addEventListener('click', (event) => {
  event.preventDefault();
  hide.style.display = "none";
})
// Modal close button close
closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  hide.style.display = "none";
})