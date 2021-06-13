const createCategory = async (event) => {
  event.preventDefault();

  const catname = document.querySelector("").value.trim();
  const catPerish = document.querySelector("")

  // Post request for new Category 
  const createCat = await fetch('/api/category', {
    method: 'POST',
    body: JSON.stringify(
      {
        name,
        is_perishable
      }
    ),
    headers:
    {
      'Content-Type': 'application/json'
    },
  });
  if (createCat.ok) {
    document.location.replace('/')
  } else {
    alert(createCat.statusText, "Invalid");
  }
}



document
  .querySelector('.')
  .addEventListener('click', createCategory);