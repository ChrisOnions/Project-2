const readdItem_btn = document.getElementById("reAddItem_btn");
const submit_ele = document.getElementById("submit_btn");
const addItems = document.getElementById("Add-items");
const close_modal_btn2 = document.getElementById("close-modal-btn2");
console.log(submit_ele);
console.log(readdItem_btn);


const addItem_func = async (event) => {
  event.preventDefault();
  const name = document.getElementById("item").value;
  const expiryDate = document.getElementById("expdate").value.trim();

  const prev_purchased_items = await fetch('/api/food/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(
      {
        name,
        expiryDate,
      }
    )
  })
  if (prev_purchased_items) {
    document.location.replace('/cart')
  } else {
    alert(createCat.statusText, "Invalid");
  }

}

addItems.addEventListener('click', addItem_func)

readdItem_btn.addEventListener('click', (e) => {
  e.preventDefault();
  submit_ele.style.display = 'block'
})
close_modal_btn2.addEventListener('click', (e) => {
  e.preventDefault()
  submit_ele.style.display = "none"
})