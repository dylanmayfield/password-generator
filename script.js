// Assignment code here

// variables for password prompt
var userLength = prompt ("Select a number of characters between 8 and 128");

// prompt for user to select password length 
if (userLength < 8 || userLength > 128) {
  alert("Your character number does not meet criteria. Please select a number between 8 and 128");
} else {
  // variables for confirmation boxes
  var userUpper = confirm ("Do you wish to use upper case letters in your password? Press OK for Yes,Cancel for No.");
  var userLower = confirm ("Do you wish to use lower case letters in your password? Press OK for Yes,Cancel for No.");
  var userNumbers = confirm ("Do you wish to use numbers in your password? Press OK for Yes,Cancel for No.");
  var userCharacters = confirm ("Do you wish to use special characters in your password? Press OK for Yes,Cancel for No.");
}

// variables for password characters
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789"
var specialCharacters = "!#$&*():;{}<>,./"
var random = "";












// Get references to the #generate element


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);