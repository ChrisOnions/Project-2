
const addCategory_btn = document.getElementById('addCategory')
const category_modal = document.getElementById('categoryAdd1')
const addCategory_modal_btn = document.getElementById("Add-item")
const show = document.getElementById('modal-name');
const errorText = document.getElementById('err-text');
console.log(category_modal);

const addCategory_func = (event) => {
  event.preventDefault();
  category_modal.style.display = 'block'
}
const fetchcategory = async (name) => {

  if (name) {
    const response = await fetch('/api/category/', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/cart');
    } else {
      const output = await response.json()
      errorText.innerHTML = ` ${output.message} <br> ${response.status} `
      show.style.display = "block"
    }
  }
};

addCategory_modal_btn.addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.querySelector('#newCategory').value.trim()
  fetchcategory(name)
  category_modal.style.display = 'none'
});

addCategory_btn.addEventListener('click', addCategory_func);