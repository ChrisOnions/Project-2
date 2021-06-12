const reAddItem_btn = document.getElementById("reAddItem_btn");
const submit_ele = document.getElementById("submit_btn");
const Add_items = document.getElementById("Add-items");
const close_modal_btn2 = document.getElementById("close-modal-btn2");
console.log(submit_ele);
console.log(reAddItem_btn);
// const add_items = document.getElementById('Add-items');
// console.log(add_items);

const addItem_func = async (event) => {
  event.preventDefault();
  console.log("clicked");
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
    console.log("sucess");
    // document.location.replace('/cart')
  } else {
    alert(createCat.statusText, "Invalid");
  }
  // existing items
  // display existing items
  // get item details
  // update item details
  // expiryDate
  // isFrozen
  // session.user_id
  // quantity
  // brand
  // Post request to server
}

Add_items.addEventListener('click', addItem_func)

reAddItem_btn.addEventListener('click', (e) => {
  e.preventDefault();
  submit_ele.style.display = 'block'
})
close_modal_btn2.addEventListener('click', (e) => {
  e.preventDefault()
  submit_ele.style.display = "none"
})