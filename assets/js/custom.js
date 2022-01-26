function checkMonth(){
  let month = document.getElementById('monthInput').value;
  switch (month) {
    // case with 31 Days 
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
    document.getElementById("demo1").innerHTML = "31 Days in a Month";
    break;

    // case with 30 Days 
    case "4":
    case "6":
    case "9":
    case "11":
    document.getElementById("demo2").innerHTML = "30 Days in a Month";
    break;

    // case with leap year
    case "2":
    leapyear();
    break;

    default:
    document.getElementById("demo3").innerHTML = "Invalid Month";
    break;
  }
}

function leapyear() {
  let checkyear = document.getElementById("yearInput").value;
  let feb;

  if ((checkyear % 4 == 0) && (checkyear % 100 !== 0) || (checkyear % 400 == 0)) {
    feb = checkyear + " is a Leap year" + " and its 29 days in a Month";
  } else {
    feb = checkyear + " is not a Leap year" + " and its 28 days in a Month";
  }
  document.getElementById('leap').innerHTML = feb;
}


