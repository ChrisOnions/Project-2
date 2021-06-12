const close_btn = document.getElementById("close-modal-btn1");
const hide1 = document.getElementById('categoryAdd');

close_btn.addEventListener('click', (event) => {
  event.preventDefault();
  hide1.style.display = "none";
})