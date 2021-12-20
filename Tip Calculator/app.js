//----- VARIABLES FOR INPUTS AND TIPS -----//
const billInput = document.querySelector(".bill-input"); 
const peopleInput = document.querySelector(".people-input");
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom");


//----- VARIABLES FOR OUTPUTS -----//
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const resetBtn = document.querySelector(".reset");


//----- ERROR MESSAGE AND BORDER -----//
const error = document.querySelector(".error");


//----- FUNCTION CALLERS -----//
billInput.addEventListener("input", billInputFunction);
peopleInput.addEventListener("input", peopleInputFunction);


tips.forEach(function (button) {
  button.addEventListener("click", handleClick);
});


//----- CUSTOM TIP -----//
tipCustom.addEventListener("input", tipInputFunction);
//----- RESET BUTTON -----//
resetBtn.addEventListener("click", reset);

 
//----- CHANGING VALUES FOR RESULTS -----//
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;


//----- FUNCTIONS -----//
function billInputFunction() {
  billValue = parseFloat(billInput.value);

  if (billValue == 0) {
    error.style.display = "flex";
    billInput.style.border = "2px solid rgb(218, 88, 88)";
  } else {
    error.style.display = "none";
    billInput.style.border = "2px solid hsl(172, 67%, 45%)"
  }
  calculateTip();
}

function tipInputFunction() {
  tipValue = parseFloat(tipCustom.value / 100); // CUSTOM TIP

  tips.forEach(function (val) {
    val.classList.remove("active-tip");  // REMOVE ACTIVE BG-COLOR 
  });
  calculateTip();
}

function peopleInputFunction() {
  peopleValue = parseFloat(peopleInput.value);

  if (peopleValue < 1) {
    error.style.display = "flex";
    peopleInput.style.border = "2px solid rgb(218, 88, 88)";
  } else {
    error.style.display = "none";
    peopleInput.style.border = "2px solid hsl(172, 67%, 45%)";
    calculateTip();
  }
}

function handleClick(event) {
  tips.forEach(function (button) {
    button.classList.remove("active-tip");

    if (event.target.innerHTML == button.innerHTML) {
      button.classList.add("active-tip");
      tipValue = parseFloat(button.innerHTML) / 100;
    }
  });
  calculateTip();
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmountPerson = (billValue * tipValue) / peopleValue; // tip per person

    let tipAmount = billValue * tipValue; // total of tip
    let total = (billValue + tipAmount) / peopleValue; // total of bill

    tipPerPerson.innerHTML = "$" + tipAmountPerson.toFixed(2);
    totalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}

// RESET FUNCTION, SETS VALUES TO 0
function reset() {
  billInput.value = "";
  billInputFun();
  peopleInput.value = "";
  peopleInputFun();
  tipCustom.value = "";
}