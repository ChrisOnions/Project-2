const reAddItem_btn = document.getElementById('reAddItem')
const addCategory_btn = document.getElementById('addCategory')


// Add Fooditem from existing 
const addItem_func = async (event) => {
  event.preventDefault();
  console.log("clicked");
  // popup modal for items
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
// Add Category
const addCategory_func = async (event) => {
  event.preventDefault();
  console.log("clicked");
  // Create modal for item to add
  // 'name'
  // 'is_perishable' checkbox
  // if (name && bool)
  // Fetch Post request to server

}
reAddItem_btn.addEventListener('click', addItem_func)
addCategory_btn.addEventListener('click', addCategory_func)