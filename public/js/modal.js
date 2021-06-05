const closeX = document.querySelector(".close-modal");
const closeBtn = document.querySelector(".close-modal-btn");

closeX.addEventListener('click', (event) => {
  event.preventDefault();
  hide.style.display = "none";
})

closeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  hide.style.display = "none";
})