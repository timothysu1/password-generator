// Assignment Code
//querySelector returns first element in doc that matches specified selector
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //assigns variable to the random password created by generatePassword
  var password = generatePassword();
  //takes the textarea in the html and changes the text to this variable
  var passwordText = document.querySelector("#password");
  //changes variable to the of the password to the randomly generated password
  passwordText.value = password;

}

// Add event listener to generate button so when the button is pressed, a password is generated
//addEventListener method that
generateBtn.addEventListener("click", writePassword);

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(item => item.toUpperCase());
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "}", "|", "\{", "~"]
// All of the posibble characters that can be used to make a password

function generatePassword() {
  var charaLen = prompt("How long should your password be? (8-128 characters long)");

  if (!charaLen || charaLen < 8 || charaLen > 128) {
    return;
  }

  //exits if no valid input is recieved
  var confirmLower = confirm("Do you want your password to contain lowercase letters?");
  var confirmUpper = confirm("Do you want your password to contain upperrcase letters?");
  var confirmNum = confirm("Do you want your password to contain numbers?");
  var confirmSpec = confirm("Do you want your password to contain special characters?");

  if (!confirmLower && !confirmUpper && !confirmNum && !confirmSpec) {
    return;
  }
  //exits if all character prompts are declined

  var userChara = [];

  if (confirmLower) {
    userChara = userChara.concat(lowerCase);
  }
  if (confirmUpper) {
    userChara = userChara.concat(upperCase);
  }
  if (confirmNum) {
    userChara = userChara.concat(numeric);
  }
  if (confirmSpec) {
    userChara = userChara.concat(special);
  }
  //Combines all of the character types that the user wants



  /* var index = Math.floor(Math.random() * userChara.length); */
  //Generates random values that correspond to index of possible characters for password

    var pass = "";
  for (var i = 0; i < charaLen; i++) {
    var index = Math.floor(Math.random() * userChara.length);
    pass += userChara[index];
    
  }
  return pass;

}
//Pseudocode
//When the button is pressed 
//Prompt asking how long the password needs to be
  //User can only choose value between 8 and 128 characters
//Prompt asking if the password should include lowercase, uppercase, numeric, and/or special characters
  //User must choose at least one
//All of the charcter types will be accounted for and a random password will be created



//Testing