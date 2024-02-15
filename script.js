const length = document.getElementById("length");
const symbols = document.getElementById("symb");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const numbers = document.getElementById("numbers");
const generate = document.querySelector(".generate");
const copy = document.querySelector(".copy");
const pass = document.querySelector("input");

const options = [symbols, upperCase, lowerCase, numbers];
let chosenElements = {};

const elements = {
  symb: "!@#$%^&*()_+~|}{[]:;?><,./-=",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
};

generate.addEventListener("click", () => {
  let chosenOptions = options.filter(ischecked);

  chosenOptions.forEach((option) => {
    const key = option.id;
    chosenElements[key] = elements[key];
  });

  let generatedPassword = generatePassword();
  pass.value = generatedPassword;
  chosenElements = {};
  return generatedPassword;
});

copy.addEventListener("click", () => {
  pass.select();
  navigator.clipboard.writeText(pass.value);
});

const ischecked = (element) => {
  return element.checked;
};

const generatePassword = () => {
  let password = "";
  while (password.length < length.value) {
    let chosenValues = Object.values(chosenElements);
    let passwordElement =
      chosenValues[Math.floor(Math.random() * chosenValues.length)];
    password +=
      passwordElement[Math.floor(Math.random() * passwordElement.length)];
  }
  return password;
};
