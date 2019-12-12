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
  getLength: function () {
    var listLength = this.characters.length;
    // console.log(listLength);
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
    // console.log(listLength);
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
    // console.log(listLength);
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
    // console.log(listLength);
    return listLength;
  },
};

//-----------------------------------------------------------------------------------------------------------------------------
// Write password to the #password input
function writePassword() {
  specialCharacter.getLength();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();

  //once copy button isn't disabled... allow tooltip to show so on click it can be toggled
  jQuery("#copyBtn").tooltip("enable");
}

//-----------------------------------------------------------------------------------------------------------------------------
// generate password
function generatePassword() {
  /* -----
  Ideally, I want to let the user press cancel and then exit out of the prompt and function without changing anything but i think i would have to change the writepassword function for that
  ----- */

  // ---------------------------------------------------------------------------------------- defining password specifications:

  //first we run a loop that prompts user to input password length until they input a valid length ----------------------------
  var lengthValid= false;
  while (lengthValid === false) {
    var passwordLength = prompt("How long should the password be between 8 - 128 characters?");

    //if user picks a valid length
    if (passwordLength >= 8 && passwordLength <= 128) {
      lengthValid = true; //this will cause to exit loop bc it runs while lengthValid is false
    } else {
      alert("Please input a length between 8 and 128!");
      //lengthValid remains false
    }
  }

  //next we run a loop that prompt user to select character types until they select at least one character type ---------------
  var typeChosen = false;

  while (typeChosen === false){
    var useSpec = confirm("Use special characters?");
    var useNum = confirm("Use numeric characters?");
    var useUpper = confirm("Use uppercase characters?");
    var useLower = confirm("Use lowercase characters?");

    if (useSpec || useNum || useUpper || useLower) {
      //console.log("spec: " + useSpec + " | num: " + useNum + " | upper: " + useUpper + " | lower: " + useLower);
      typeChosen = true; //this will cause to exit loop bc it runs while typeCHhosen is false
    } else {
      alert("Please select at least one character type to use.");
      //typeChosen remains false
    }
  }

  //we populate our characterTypes array with only the types the user specified
  var characterTypes = [];

  if (useSpec){
    characterTypes.push(specialCharacter);
  } 
  if (useNum){
    characterTypes.push(numberCharacter);
  }
  if (useUpper){
    characterTypes.push(uppercaseCharacter);
  }
  if (useLower){
    characterTypes.push(lowercaseCharacter);
  }

  // ---------------------------- now that we have defined the password specifications, we can work on generating the password:
  var randomPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    //randomizing which character type we add
    var randomCharType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
    //randomizing which character we add (length to choose from depends on the type)
    var randomCharacter = randomCharType.characters[Math.floor(Math.random() * randomCharType.getLength())];
    //  console.log(randomCharacter);
    randomPassword = randomPassword + randomCharacter;
  }

  //  console.log(randomPassword);
  return randomPassword;

}
//-----------------------------------------------------------------------------------------------------------------------------
// copy password to clipboard
function copyToClipboard() {
  // BONUS 

  

  //selecting textarea
  var copyText = document.getElementById("password");

  copyText.select();

  document.execCommand("copy");
  $("#copyBtn").tooltip("show");
  setTimeout(function(){
    $("#copyBtn").tooltip("hide");
  }, 1000);
}

//-----------------------------------------------------------------------------------------------------------------------------
$("#copyBtn").tooltip("disable");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);

/*
$("copyBtn").click(function () {
  $("copyBtn").tooltip("show");
});
*/

/*
$("#copyBtn").mouseleave(function (){
  $("copyBtn").tooltip("hide");
});
*/