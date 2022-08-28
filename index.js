let cardForm = document.querySelector(".card-form"),
  complete = document.querySelector(".complete");

let cardName = document.querySelector("#card-name");
let clientName = document.querySelector("#name");
let nameError = document.getElementById("name-error");

let cardNumber = document.getElementById("card-number");
let clientNumber = document.getElementById("number");
let numberError = document.getElementById("number-error");

let expDate = document.querySelectorAll("span");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let dateError = document.getElementById("date-error");

let cardCvc = document.querySelector("#cvc");
let clientCvc = document.querySelector("#cvc-code");
let cvcError = document.getElementById("cvc-error");

let submitBtn = document.querySelector("#submit");
let continueBtn = document.getElementById("continue");

clientName.addEventListener("keyup", changeName);
function changeName() {
  let name = clientName.value;
  cardName.textContent = name.toUpperCase();
  clientName.style.outline = "1px solid hsl(278, 94%, 30%)";
}

clientNumber.addEventListener("keyup", changeNumber);
function changeNumber() {
  let number = clientNumber.value;
  let numberWithSpace = "";
  for (let num of number) {
    if (
      numberWithSpace.length == 4 ||
      numberWithSpace.length == 9 ||
      numberWithSpace.length == 14
    ) {
      numberWithSpace += " " + num;
    } else {
      numberWithSpace += num;
    }
  }
  cardNumber.textContent = numberWithSpace;
  // clientNumber.value = numberWithSpace;
}

month.addEventListener("keyup", changeMonth);
function changeMonth() {
  let clientMonth = month.value;
  expDate[0].textContent = clientMonth;
}

year.addEventListener("keyup", changeDate);
function changeDate() {
  let clientYear = year.value;
  expDate[1].textContent = clientYear;
}

clientCvc.addEventListener("keyup", changeCvc);
function changeCvc() {
  let cvc = clientCvc.value;
  cardCvc.textContent = cvc;
}

let form = document.querySelector(".form");

const users = [];
let name = clientName.value;
let names = clientName.value.split(" ");
let firstName = (names[0] = {});
users.push(firstName);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateName();
  validateCardNumber();
  validateExpDate();
  validateCvc();

  let isNameValid = validateName()[0],
    isCardNumberValid = validateCardNumber()[0],
    isExpDateValid = validateExpDate()[0],
    isCvcValid = validateCvc()[0];

  let isFormValid =
    isNameValid && isCardNumberValid && isExpDateValid && isCvcValid;

  if (isFormValid) {
    firstName.names = validateName()[2];
    firstName.cardNumber = validateCardNumber()[1];
    firstName.expDate = validateExpDate()[1];
    firstName.cvc = validateCvc()[1];

    cardForm.style.display = "none";
    complete.style.display = "flex";
  }
});

function validateName() {
  let name = clientName.value;
  let names = name.split(" ");
  let firstName = names[0];
  let valid = false;
  if (name == "") {
    nameError.textContent = "Can't be empty!";
    clientName.style.outline = "1px solid hsl(0, 100%, 66%)";
  } else if (name.match(/[a-zA-Z]+[\s][a-zA-Z]+/)) {
    valid = true;
  } else {
    nameError.textContent = "Enter a your first and last name.";
  }
  return [valid, firstName, names];
}

function validateCardNumber() {
  let number = clientNumber.value;
  let valid = false;
  if (number == "") {
    numberError.textContent = "Can't be empty!";
  } else if (number.match(/[\d]{12}/)) {
    valid = true;
  } else if (number.length !== 12) {
    numberError.textContent = "Enter a valid card number!";
  } else {
    numberError.textContent = "Wrong format, numbers only!";
  }
  return [valid, number];
}
function validateExpDate() {
  let clientMonth = month.value;
  let clientYear = year.value;
  let clientDate = "";
  let valid = false;
  if ((clientMonth && clientYear) == "") {
    dateError.textContent = "Can't be empty!";
  } else if ((clientMonth && clientYear).length !== 2) {
    dateError.textContent = "Wrong format!";
  } else if (
    clientMonth < 01 ||
    clientMonth > 12 ||
    clientYear < 17 ||
    clientYear > 27
  ) {
    dateError.textContent = "Invalid date!";
  } else {
    valid = true;
    clientDate = `${clientMonth}/${clientYear}`;
  }
  return [valid, clientDate];
}

function validateCvc() {
  let cvc = clientCvc.value;
  let valid = false;
  if (cvc.length < 3) {
    cvcError.textContent = "Wrong format!";
  } else {
    valid = true;
  }
  return [valid, cvc];
}

continueBtn.addEventListener("click", function (e) {
  cardForm.style.display = "flex";
  complete.style.display = "none";
  form.reset();
});
