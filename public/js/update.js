const show = document.getElementById('modal-name');
const errorText = document.getElementById('err-text');

/** function to delete food item  */
function deleteFoodItem(id) {
  //calling the delete api
  var res = confirm("Are you sure you want to remove this item?")
  if (res) {
    fetch("/api/food/" + id, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.ok)
        show.style.display = "block"
      errorText.innerHTML = `Item successfully deleted`
      setTimeout(() => {
        document.location.replace('/dashboard')
      }, 2000)
    })
  }
}

/** add item button click */
var addBtn = document.querySelector('.add-item-btn');
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  //hide food list
  var foodList = document.querySelector('.food-item-list');
  foodList.setAttribute('style', 'display:none');

  //show add item form
  var foodList = document.querySelector('.add-food-item');
  foodList.setAttribute('style', 'display:block');

  //need to call everytime as a user can add new category.
  fetch("/api/category", {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return res.json();
  }).then(function (data) {
    // `data` is the parsed version of the JSON returned from the above endpoint.
    var values = data;
    var select = document.getElementById("foodCategoryId");
    select.innerHTML = "";
    var option = document.createElement("option");
    option.value = "";
    option.text = "";
    select.appendChild(option);

    for (const val of values) {
      var option = document.createElement("option");
      option.value = val.id;
      option.text = val.name;
      select.appendChild(option);
    }
  });
});

/**Cancel button action on add item form */

var cancelBtn = document.querySelector('.cancel-item-btn2');
cancelBtn.addEventListener('click', (event) => {
  //hide food list
  var foodList = document.querySelector('.food-item-list');
  foodList.setAttribute('style', 'display:block');

  //show add item form
  var foodList = document.querySelector('.add-food-item');
  foodList.setAttribute('style', 'display:none');
});



/** Add item to the pantry from the form*/

var submitBtn = document.querySelector('#add-item-btn-submit');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  var obj = {};
  var errMsg = "";
  var inputs = document.getElementsByClassName("input");
  for (var i = 0; i < inputs.length; i++) {
    var field = inputs[i].id;
    if (field == "expiryDate") {
      var date = moment(inputs[i].value);
      if (date.isValid() && inputs[i].value.length >= 8)
        obj[field] = inputs[i].value;
      else
        errMsg = "Expiry Date is invalid or empty \n";
    } else {
      obj[field] = inputs[i].value;
    }
    if (!inputs[i].value && field != "expiryDate") {
      errMsg += field + " cannot be empty \n";
    }
  }
  // Post Request to create food item
  if (errMsg != "") {
    show.style.display = "block"
    errorText.innerHTML = errMsg;
  } else {
    fetch("/api/food/create", {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => {
      if (res.ok)
        return res.json();
    }).then((data) => {
      if (data) {
        show.style.display = "block"
        errorText.innerHTML = `Item successfully created `
        setTimeout(() => {
          document.location.replace('/dashboard')
        }, 2000)
      }
    })
  }
});