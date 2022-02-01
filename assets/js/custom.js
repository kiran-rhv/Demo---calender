/* ------------------ Calender JS Code Start ------------------ */

/* ------------------ Form Validation Start ------------------ */
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              event.preventDefault();
              checkMonth();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

/* ------------------ Form Validation End ------------------ */

function checkMonth(){
  let output = "";
  let isMonthNotANumber = isNaN(document.getElementById("monthInput").value);
  let isYearNotANumber = isNaN(document.getElementById("yearInput").value);

  if (isMonthNotANumber || isYearNotANumber) {
    output = "Invalid Month or Year";
    document.getElementById("output").innerHTML = output;
    return;
  } else {
    let month = parseInt(document.getElementById("monthInput").value);
    let checkyear = document.getElementById("yearInput").value;

    switch (month) {
      // case with 31 Days 
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        output = "31 Days in a Month";
        document.getElementById("output").innerHTML = output;
        break;

      // case with 30 Days 
      case 4:
      case 6:
      case 9:
      case 11:
        output = "30 Days in a Month";
        document.getElementById("output").innerHTML = output;
      break;

      // case with leap year
      case 2:
      leapyear(checkyear);
      break;

      default:
        output = "Invalid Month";
        document.getElementById("output").innerHTML = output;
      break;
    }
  }
}

function leapyear(checkyear) {
  let feb = "";

  if ((checkyear % 4 == 0) && (checkyear % 100 !== 0) || (checkyear % 400 == 0)) {
    feb = checkyear + " is a Leap year and its 29 days in a Month";
  } else {
    feb = checkyear + " is not a Leap year and its 28 days in a Month";
  }
  document.getElementById('output').innerHTML = feb;
}

/* ------------------ Calender JS Code End ------------------ */

/* ------------------ Counter JS code Start ------------------ */
function incrementValue() {
  let count_msg = "";
  let add = (document.getElementById('number').value);
  add = function () {
    if (isNaN(add)) {
      return 0;
    }
    return add;
  }();
  add++;
  if (add >10) {
    // alert("Increment Limited");
    count_msg = "Increment Limited";
    document.getElementById('count_msg').innerHTML = count_msg;
    return;
  }else {
    document.getElementById('count_msg').innerHTML = " ";
  }
  document.getElementById('number').value = add;
}

function decrementValue() {
  let count_msg = "";
  let subtract = document.getElementById('number').value;
  subtract = function () {
  if (isNaN(subtract)) {
    return 0;
  }
  return subtract;
  }();

  (function () {
    if (subtract < 1) {
      // alert("Decrement Limited");
      count_msg = "Decrement Limited";
      document.getElementById('count_msg').innerHTML = count_msg;
      return subtract = 1;
    }else{
      document.getElementById('count_msg').innerHTML = " ";
    }
    return;  
  })();

  subtract--;
  document.getElementById('number').value = subtract;
}
  

function reset() {
  document.getElementById('number').value = 0;
  document.getElementById('count_msg').innerHTML = " ";
}

/* ------------------ Counter JS code End ------------------ */


/* ------------------ Restaurant Menu Page JS code Start ------------------ */
let allMenuList = [
	{
		"title": "Masal Dosa",
		"description": "Slightly thick and soft dosa's, served with onion and potato filling along with sambar and chutney",
		"image": "assets/images/restaurant_menu/dosa.jpg",
		"category": "breakfast",
		"amount": 60
	},
	{
		"title": "Idli",
		"description": "Tasty South Indian Breakfast platter that is usually served along with sambar and chutney",
		"image": "assets/images/restaurant_menu/idli.jpg",
		"category": "breakfast",
		"amount": 40
	},
	{
		"title": "Full Meals",
		"description": "South Indian Meals",
		"image": "assets/images/restaurant_menu/full_meals.jpg",
		"category": "lunch",
		"amount": 150
	},
	{
		"title": "Mini Meals",
		"description": "South Indian Mini Meals",
		"image": "assets/images/restaurant_menu/mini_meals.jpg",
		"category": "lunch",
		"amount": 80
	},
  {
		"title": "Rice and Sambar",
		"description": "South Indian Mini Meals",
		"image": "assets/images/restaurant_menu/rice.jpg",
		"category": "dinner",
		"amount": 100
	},
  {
		"title": "Chocolate Milk Shake",
		"description": "Chocolate Milk Shake",
		"image": "assets/images/restaurant_menu/milkshake.jpg",
		"category": "shakes",
		"amount": 80
	}
];

// console.log(allMenuList);

let printMenuList = [];
let filterCategory = [];

printMenuList = allMenuList;
// Creating HTML Menu card
generatemenu(printMenuList);

function generatemenu(printMenuList) {
  for (let i = 0; i<printMenuList.length; i++) {
    document.getElementById('menu').innerHTML = printMenuList.map(menuItem => 
      ` <div class="col-md-6 card border-0 mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${menuItem.image}" class="img-fluid img_card"
                    alt="food images" width="200" height="200" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="card-title d-flex justify-content-between h5 border-bottom border-primary card_title_css">
                  <div class="food_title">${menuItem.title}</div>
                  <div class="food_price"> ₹ ${menuItem.amount} /-</div>
                </div>
                <div class="food_category">${menuItem.category}</div>
                <p class="card-text text-justify food_description">${menuItem.description}</p>
              </div>
            </div>
          </div>
        </div>`).join ('')
  }
}

// selecting ID on click and unselecting ID on click

function checkList(event) {
  printMenuList = [];
  // Getting checkbox values 
  if (event.target.checked === true) {
    filterCategory.push(event.target.value);
  } else if (event.target.checked === false) {
    filterCategory.pop(event.target.value);
  }
  if (filterCategory.length === 0) {
    printMenuList = allMenuList;
  } else {
    printMenuList = allMenuList.map(getAllMenu).filter(menuFilter);
  }
  generatemenu(printMenuList);
}

function getAllMenu(menuItem) {
  return menuItem;
}

function menuFilter(menuItem) {
  if (filterCategory.includes(menuItem.category)) {
    return menuItem;
  }
}

/* ------------------ Restaurant Menu Page JS code End ------------------ */