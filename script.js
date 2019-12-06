// Assignment Code
var generateBtn = document.querySelector("#generate");

//-----------------------------------------------------------------------------------------------------------------------------
  // create array of objects which are the character types
  // > special character object includes:
  // > numeric character object includes: 0-9
  // > upper and lowercase A-Z / a-z
  // ** should we do separate objects for uppercase and lowercase???
  //for loop until reach random num length concatenate random from array length and random from object inside
//-----------------------------------------------------------------------------------------------------------------------------

//character objects -----------------------------------------------------------------------------------------------------------
// special characters
var specialCharacter = {
  characters: [
    "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "{", "\\", "]", "^", "_", "`", "{", "|", "}", "~"
  ],
  getLength: function() {
    var listLength = this.characters.length;
    console.log(listLength);
    return listLength;
  },
};

// numbers
var numberCharacter = {
  characters: [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
  ],
  getLength: function () {
    var listLength = this.characters.length;
    console.log(listLength);
    return listLength;
  },
};

// uppercase
var uppercaseCharacter = {
  characters: [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ],
  getLength: function () {
    var listLength = this.characters.length;
    console.log(listLength);
    return listLength;
  },
};

// lowercase
var lowercaseCharacter = {
  characters: [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ],
  getLength: function () {
    var listLength = this.characters.length;
    console.log(listLength);
    return listLength;
  },
};

//-----------------------------------------------------------------------------------------------------------------------------
// defining password specifications

//defining password length... can prompt userinput here later
var lengthMin = 8;
var lengthMax = 128 - lengthMin;

//we can change this to only include types user checks
var characterTypes = [specialCharacter, numberCharacter, uppercaseCharacter, lowercaseCharacter];

//-----------------------------------------------------------------------------------------------------------------------------
// Write password to the #password input
function writePassword() {
  specialCharacter.getLength();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}

//-----------------------------------------------------------------------------------------------------------------------------
// generate password
function generatePassword() {
  //random length 8 - 128 .. math * 120 + 8

  var randomLength = Math.floor(Math.random() * lengthMax) + lengthMin;
  var randomPassword = "";

 for (var i = 0; i < randomLength; i++){
   //randomizing which character type we add
   var randomCharType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
   var randomCharacter = randomCharType.characters[Math.floor(Math.random() * randomCharType.getLength())];
   console.log(randomCharacter);
  randomPassword = randomPassword + randomCharacter;
 }

 console.log(randomPassword);
 return randomPassword;

}
//-----------------------------------------------------------------------------------------------------------------------------
// copy password to clipboard
// function copyToClipboard() {
//   // BONUS 
// }

//-----------------------------------------------------------------------------------------------------------------------------
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
