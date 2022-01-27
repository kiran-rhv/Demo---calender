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