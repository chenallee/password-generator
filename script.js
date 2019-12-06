// Assignment Code
var generateBtn = document.querySelector("#generate");

// special characters
var specialCharacter = {
  "characters": [
    "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "{", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
  ]
}

// numbers
var numberCharacter = {
  "characters": [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ]
} 

// uppercase
var uppercaseCharacter = {
  "characters": [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ]
}

// lowercase
var lowercaseCharacter = {
  "characters": [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ]
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function generatePassword() {
  //random length 8 - 128 .. math * 120 + 8

  // create array of objects which are the character types
  // > special character object includes:
  // > numeric character object includes: 0-9
  // > upper and lowercase A-Z / a-z
 // ** should we do separate objects for uppercase and lowercase

 //for loop until reach random num length concatenate random from array length and random from object inside

}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
